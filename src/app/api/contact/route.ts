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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildNotificationEmail(name: string, email: string, message: string): string {
  const date = new Date().toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f5f0e8;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f0e8;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#2D4A35 0%,#4A7C59 100%);padding:32px 40px;text-align:center;">
          <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">Sady Celmerów</h1>
          <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.75);letter-spacing:0.3px;">Rodzinne Gospodarstwo Sadownicze</p>
        </td></tr>

        <!-- Title bar -->
        <tr><td style="padding:28px 40px 0;">
          <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8FB882;font-weight:600;">Nowa wiadomość</p>
          <h2 style="margin:8px 0 0;font-size:20px;color:#1F3224;font-weight:600;">od ${escapeHtml(name)}</h2>
        </td></tr>

        <!-- Sender info -->
        <tr><td style="padding:24px 40px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F0F5EE;border-radius:10px;">
            <tr>
              <td style="padding:16px 20px;width:50%;vertical-align:top;">
                <p style="margin:0 0 4px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#6A9E5B;font-weight:600;">Imię i nazwisko</p>
                <p style="margin:0;font-size:15px;color:#1F3224;font-weight:500;">${escapeHtml(name)}</p>
              </td>
              <td style="padding:16px 20px;width:50%;vertical-align:top;">
                <p style="margin:0 0 4px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#6A9E5B;font-weight:600;">E-mail</p>
                <p style="margin:0;font-size:15px;"><a href="mailto:${escapeHtml(email)}" style="color:#4A7C59;text-decoration:none;font-weight:500;">${escapeHtml(email)}</a></p>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Message -->
        <tr><td style="padding:24px 40px;">
          <p style="margin:0 0 10px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#6A9E5B;font-weight:600;">Treść wiadomości</p>
          <div style="padding:20px;background-color:#FEFDFB;border:1px solid #EBE4D6;border-radius:10px;">
            <p style="margin:0;font-size:15px;line-height:1.7;color:#333;white-space:pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </td></tr>

        <!-- Reply button -->
        <tr><td style="padding:0 40px 32px;" align="center">
          <a href="mailto:${escapeHtml(email)}?subject=Re: Wiadomość ze strony sadycelmerow.pl" style="display:inline-block;padding:12px 32px;background-color:#4A7C59;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:8px;letter-spacing:0.3px;">Odpowiedz</a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 40px;background-color:#F0F5EE;border-top:1px solid #DCE8D8;text-align:center;">
          <p style="margin:0;font-size:12px;color:#8FB882;">${date}</p>
          <p style="margin:6px 0 0;font-size:11px;color:#B8D1AF;">Wysłano z formularza kontaktowego na sadycelmerow.pl</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildConfirmationEmail(name: string, message: string): string {
  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f5f0e8;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f0e8;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

        <!-- Header -->
        <tr><td style="background:linear-gradient(135deg,#2D4A35 0%,#4A7C59 100%);padding:32px 40px;text-align:center;">
          <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">Sady Celmerów</h1>
          <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.75);letter-spacing:0.3px;">Rodzinne Gospodarstwo Sadownicze</p>
        </td></tr>

        <!-- Greeting -->
        <tr><td style="padding:32px 40px 0;text-align:center;">
          <div style="display:inline-block;width:52px;height:52px;border-radius:50%;background-color:#F0F5EE;line-height:52px;font-size:24px;text-align:center;">&#10003;</div>
          <h2 style="margin:16px 0 0;font-size:20px;color:#1F3224;font-weight:600;">Dziękujemy, ${escapeHtml(name.split(" ")[0])}!</h2>
          <p style="margin:10px 0 0;font-size:15px;color:#666;line-height:1.6;">Twoja wiadomość dotarła do nas pomyślnie.<br>Postaramy się odpowiedzieć jak najszybciej.</p>
        </td></tr>

        <!-- Message summary -->
        <tr><td style="padding:28px 40px;">
          <p style="margin:0 0 10px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#6A9E5B;font-weight:600;">Twoja wiadomość</p>
          <div style="padding:20px;background-color:#FEFDFB;border:1px solid #EBE4D6;border-radius:10px;">
            <p style="margin:0;font-size:14px;line-height:1.7;color:#555;white-space:pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </td></tr>

        <!-- Contact info -->
        <tr><td style="padding:0 40px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F0F5EE;border-radius:10px;">
            <tr><td style="padding:20px;text-align:center;">
              <p style="margin:0 0 4px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#6A9E5B;font-weight:600;">Kontakt bezpośredni</p>
              <p style="margin:8px 0 0;font-size:14px;color:#1F3224;">
                Szymon Celmer — <a href="tel:+48667599922" style="color:#4A7C59;text-decoration:none;font-weight:500;">667 599 922</a>
              </p>
              <p style="margin:4px 0 0;font-size:14px;color:#1F3224;">
                Jakub Celmer — <a href="tel:+48609273078" style="color:#4A7C59;text-decoration:none;font-weight:500;">609 273 078</a>
              </p>
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 40px;background-color:#F0F5EE;border-top:1px solid #DCE8D8;text-align:center;">
          <p style="margin:0;font-size:12px;color:#8FB882;">
            <a href="https://sadycelmerow.pl" style="color:#6A9E5B;text-decoration:none;font-weight:500;">sadycelmerow.pl</a>
            &nbsp;&middot;&nbsp;
            <a href="https://www.facebook.com/sady.celmerow" style="color:#6A9E5B;text-decoration:none;font-weight:500;">Facebook</a>
          </p>
          <p style="margin:8px 0 0;font-size:11px;color:#B8D1AF;">ul. Obornicka 18, 55-100 Trzebnica</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
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

    const name = body.name.trim();
    const email = body.email.trim();
    const message = body.message.trim();

    await Promise.all([
      transporter.sendMail({
        from: `"Formularz Sady Celmerów" <${GMAIL_USER}>`,
        replyTo: `"${name}" <${email}>`,
        to: CONTACT_RECIPIENT,
        subject: `Nowa wiadomość od ${name} — sadycelmerow.pl`,
        text: [
          `Imię i nazwisko: ${name}`,
          `E-mail: ${email}`,
          ``,
          `Wiadomość:`,
          message,
        ].join("\n"),
        html: buildNotificationEmail(name, email, message),
      }),
      transporter.sendMail({
        from: `"Sady Celmerów" <${GMAIL_USER}>`,
        to: email,
        subject: `Potwierdzenie wiadomości — Sady Celmerów`,
        text: [
          `Cześć ${name.split(" ")[0]}!`,
          ``,
          `Dziękujemy za wiadomość. Dotarła do nas pomyślnie i postaramy się odpowiedzieć jak najszybciej.`,
          ``,
          `Twoja wiadomość:`,
          message,
          ``,
          `Kontakt bezpośredni:`,
          `Szymon Celmer — 667 599 922`,
          `Jakub Celmer — 609 273 078`,
          ``,
          `Pozdrawiamy,`,
          `Sady Celmerów`,
          `ul. Obornicka 18, 55-100 Trzebnica`,
          `sadycelmerow.pl`,
        ].join("\n"),
        html: buildConfirmationEmail(name, message),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err); // eslint-disable-line no-console
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później." },
      { status: 500 },
    );
  }
}
