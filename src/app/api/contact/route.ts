import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT ?? GMAIL_USER;

function isConfigured(): boolean {
  return Boolean(GMAIL_USER && GMAIL_APP_PASSWORD);
}

function validate(body: ContactBody): string | null {
  if (!body.name || body.name.trim().length < 2) {
    return "Imię jest wymagane (min. 2 znaki).";
  }
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return "Podaj prawidłowy adres e-mail.";
  }
  if (!body.message || body.message.trim().length < 10) {
    return "Wiadomość jest wymagana (min. 10 znaków).";
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    const error = validate(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    if (!isConfigured()) {
      console.error("Gmail credentials not configured (GMAIL_USER, GMAIL_APP_PASSWORD)"); // eslint-disable-line no-console
      return NextResponse.json(
        { error: "Formularz kontaktowy jest tymczasowo niedostępny. Prosimy o kontakt telefoniczny." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Formularz Sady Celmerów" <${GMAIL_USER}>`,
      replyTo: `"${body.name.trim()}" <${body.email.trim()}>`,
      to: CONTACT_RECIPIENT,
      subject: `Nowa wiadomość od ${body.name.trim()} — sadycelmerow.pl`,
      text: [
        `Imię i nazwisko: ${body.name.trim()}`,
        `E-mail: ${body.email.trim()}`,
        ``,
        `Wiadomość:`,
        body.message.trim(),
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #4A7C59;">Nowa wiadomość z formularza kontaktowego</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="padding: 8px; font-weight: bold; vertical-align: top;">Imię i nazwisko:</td>
              <td style="padding: 8px;">${body.name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; vertical-align: top;">E-mail:</td>
              <td style="padding: 8px;"><a href="mailto:${body.email.trim()}">${body.email.trim()}</a></td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f5f0e8; border-radius: 8px;">
            <p style="margin: 0; white-space: pre-wrap;">${body.message.trim()}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #888;">
            Wysłano z formularza kontaktowego na sadycelmerow.pl
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err); // eslint-disable-line no-console
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później." },
      { status: 500 },
    );
  }
}
