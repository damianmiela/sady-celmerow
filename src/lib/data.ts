/* ─── Site-wide content data ─────────────────────────────────── */

export const siteConfig = {
  name: "Sady Celmerów",
  tagline: "Rodzinne Gospodarstwo Sadownicze",
  taglineSub: "ze wzgórz Trzebnickich",
  url: "https://sadycelmerow.pl",
  email: "sady.celmerow@gmail.com",
  facebook: "https://www.facebook.com/sady.celmerow",
  address: {
    street: "ul. Obornicka 18",
    city: "55-100 Trzebnica",
  },
  contacts: [
    { name: "Szymon Celmer", phone: "667 599 922" },
    { name: "Jakub Celmer", phone: "609 273 078" },
  ],
};

export const navLinks = [
  { label: "Strona główna", href: "/" },
  { label: "Soki", href: "/soki" },
  { label: "Odmiany jabłek", href: "/odmiany" },
  { label: "Spotkaj nas", href: "/spotkaj-nas" },
  { label: "Galeria", href: "/galeria" },
  { label: "Kontakt", href: "/kontakt" },
];

/* ─── Juices ────────────────────────────────────────────────── */

export interface Juice {
  id: number;
  name: string;
  shortName: string;
  description: string;
  image: string;
  imageMini: string;
}

export const juices: Juice[] = [
  {
    id: 3,
    name: "Sok Jabłkowy",
    shortName: "Jabłkowy",
    description:
      "Sok Jabłkowy wytłoczony z najszlachetniejszych owoców naszego regionu, to połączenie kilku odmian jabłek składających się na słodko-kwaśny bukiet smakowy. Niezwykle słodka Rubinola, szalenie kwaśny Topaz, soczysty i dorodny Rubinstar czy też rumiana i wdzięczna Ariva, to odmiany, z których powstaje nasz niepowtarzalny sok.",
    image: "/images/juice/jablko.jpg",
    imageMini: "/images/juice/jablko-min.jpg",
  },
  {
    id: 2,
    name: "Sok Jabłkowo - Aroniowy",
    shortName: "Jabłkowo-Aroniowy",
    description:
      "Sok Jabłkowo - Aroniowy to połączenie klasycznych sprawdzonych rozwiązań, z odważnym, konsekwentnym, a przede wszystkim niezwykle ZDROWYM smakiem czarnej aronii. Aromat, który powala swym charakterem na łopatki wypełniając zmysły delikatną nutą cierpkości z idealnym wywarzeniem słodyczy soczystego jabłka.",
    image: "/images/juice/aronia.jpg",
    imageMini: "/images/juice/aronia-min.jpg",
  },
  {
    id: 1,
    name: "Sok Jabłkowo - Buraczkowy",
    shortName: "Jabłkowo-Buraczkowy",
    description:
      "Sok Jabłkowo - Buraczkowy płonąca, krwista czerwień życiodajnego soku, sprawi że zadumasz się na chwilę i docenisz bogactwo wrażeń estetyczno-smakowych. Ten sok charakteryzuje się mocnym, wytrawnym aromatem buraka z łagodnym smakiem naszych jabłuszek, neutralizującym warzywną surowość. Sok stworzony dla koneserów i wielbicieli zdrowych doznań.",
    image: "/images/juice/burak.jpg",
    imageMini: "/images/juice/burak-min.jpg",
  },
  {
    id: 7,
    name: "Sok Jabłkowo - Wiśniowy",
    shortName: "Jabłkowo-Wiśniowy",
    description:
      "Sok Jabłkowo - Wiśniowy to połączenie kwaśnego aromatu czerwonej wisienki z dorodną słodyczą rumianego jabłuszka. Smak, który pozostaje w ustach na długo dopełniony intensywną głębią czerwonego koloru, zachwyci każdego amatora wiśniowej przygody!",
    image: "/images/juice/wisnia.jpg",
    imageMini: "/images/juice/wisnia-min.jpg",
  },
  {
    id: 6,
    name: "Sok Jabłkowo - Porzeczkowy",
    shortName: "Jabłkowo-Porzeczkowy",
    description:
      "Sok Jabłkowo - Porzeczkowy stworzony dla wielbicieli mocnego smaku, który pozostaje z Tobą na długo. Czarna porzeczka sprawi, że twoje zmysły zakrzykną z zachwytu, a Ty nagle znajdziesz się w ogrodzie Twojej ukochanej babci w piękny, wiosenny dzionek. Zdrowotne walory czarnych jagód to przede wszystkim ogromne pokłady witaminy C, które szybko zaspokoją potrzeby Twojego organizmu na cały dzień.",
    image: "/images/juice/porzeczka.jpg",
    imageMini: "/images/juice/porzeczka-min.jpg",
  },
  {
    id: 5,
    name: "Sok Jabłkowo - Marchwiowy",
    shortName: "Jabłkowo-Marchwiowy",
    description:
      "Sok Jabłkowo - Marchwiowy to mądre wywarzenie pomarańczowych i czerwonych aromatów. Sok z pozoru wydaje się klasyczny, a jednak zaskoczy Cię swoim krzepkim smakiem i wywarzonymi nutami marchwi. Spróbuj go, a zbaraniejesz z zachwytu i pochylisz czoło nad mądrością pomarańczowej marchwi.",
    image: "/images/juice/marchew.jpg",
    imageMini: "/images/juice/marchew-min.jpg",
  },
  {
    id: 4,
    name: "Sok Jabłkowo - Gruszkowy",
    shortName: "Jabłkowo-Gruszkowy",
    description:
      "Sok Jabłkowo - Gruszkowy to połączenie znanej i lubianej wszystkim gruszki Konferencji z dorodnymi jabłkami z naszych sadów. Smak, który doda Ci energii i zaleje Twoje zmysły szaloną słodyczą, w której dosłownie rozpłyniesz się i zakochasz.",
    image: "/images/juice/gruszka.jpg",
    imageMini: "/images/juice/gruszka-min.jpg",
  },
];

export const juiceQualities = [
  "100% tłoczony sok z jabłek",
  "bez dodatku cukru",
  "bez konserwantów",
  "bez barwników",
  "ze specjalnie dobranych odmian",
];

export const whyText = [
  "Nasze soki produkowane są ze staranne dobranych odmian. Najczęściej tłoczeniem zajmujemy się bezpośrednio po zerwaniu owoców, dzięki czemu uzyskujemy bardzo wysoką jakość oraz odpowiednią wydajność. Do produkcji nie wykorzystujemy żadnych wspomagaczy.",
  "Do soków nie dodajemy ani cukru, ani wody, ani żadnych konserwantów. Aby zachowały one trwałość, stosujemy łagodną pasteryzację w 82 stopniach Celsjusza.",
  "Nasze produkty sprzedajemy w szklanych butelkach 0,33 l i 0,75 l, a także w kartonach 3 i 5 l. Technologia Bag-in- Box (woreczek w pudełku) sprawia, że soki zachowują długotrwałą świeżość i zdatność do spożycia.",
];

/* ─── About ─────────────────────────────────────────────────── */

export const aboutText = [
  "Nasze Gospodarstwo ma kilkudziesięcioletnią tradycję, którą kontynuuje już trzecie pokolenie sadowników. Pod koniec lat sześćdziesiątych Zdzisław Celmer założył jedno z pierwszych prywatnych gospodarstw sadowniczych w Trzebnicy wraz z nowoczesną bazą i chłodnią do przechowywania owoców.",
  "W naszych sadach ochrona chemiczna stosowana jest z umiarem. Od wielu lat bierzemy udział w programie Integrowanej Produkcji. Każdego roku przyznawany jest nam Certyfikat Integrowanej Produkcji, który gwarantuje, że nasze jabłka są regularnie badane na obecność pozostałości środków ochrony roślin. Jabłka są więc smaczne i zdrowe.",
];

/* ─── Apple Varieties ───────────────────────────────────────── */

export interface AppleVariety {
  name: string;
  image: string;
  placeholder?: boolean;
}

export const appleVarieties: AppleVariety[] = [
  { name: "Topaz", image: "/images/odmiany/topaz.jpg" },
  { name: "Rubinola", image: "/images/odmiany/rubinola.jpg" },
  { name: "Golden Delicious", image: "/images/odmiany/golden-delicious.jpg" },
  { name: "Rubin", image: "/images/odmiany/rubin.jpg" },
  { name: "Rubinstar", image: "/images/odmiany/rubinstar.jpg" },
  {
    name: "Red Jonaprince Select",
    image: "/images/odmiany/red-jonaprince-select.jpg",
    placeholder: true,
  },
];

export const varietiesText = [
  "Specjalizujemy się w uprawie 6 starannie dobranych odmian jabłek, wśród których znajdziemy takie rarytasy jak Topaz, Rubinola czy Red Jonaprince Select. Od wielu lat uczestniczymy w systemie Integrowanej Produkcji. Program ten to kompromis pomiędzy ekologią, a uprawą konwencjonalną. Co roku staramy się o Certyfikat Integrowanej Produkcji, który gwarantuje, że jabłka są zdrowe i brak w nich groźnych dla konsumentów pozostałości pestycydów.",
  "Dążymy do tego, aby środki ochrony roślin były stosowane z umiarem, a w sadzie panowała równowaga biologiczna. W naszych sadach znajdziemy mnóstwo biedronek, pająków, skorków i dobroczynków. Na drzewach zauważyć można gniazda ptaków. Sady odwiedzają też sarny, borsuki, lisy, zające i bażanty. I zupełnie nam to nie przeszkadza:)",
];

/* ─── Reviews ──────────────────────────────────────────────── */

export interface Review {
  name: string;
  date: string;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Yuliia Hunza",
    date: "2025-09-15",
    text: "Cudowne miejsce pełne natury i spokoju. Byliśmy tam w weekend i czuliśmy się jak na małym święcie – własnoręczne zbieranie jabłek daje tyle radości! Atmosfera jest bardzo rodzinna i serdeczna. Polecam wszystkim, którzy chcą odpocząć od codzienności i wrócić do domu z koszem pysznych jabłek.",
  },
  {
    name: "Mariola Mecner",
    date: "2024-02-10",
    text: "Byliśmy dzisiaj rodzinną ekipą na samozbiorach. Super atmosfera, pyszne i soczyste wszystkie odmiany jabłek. Dodatkowo możliwość zakupu już zebranych jabłek a także gruszek, suszonych jabłek, soków i wiele innych rzeczy. Bardzo dobry grzany sok jabłkowy, którym można się degustować przy rozpalonym ognisku. Z całego serca polecam!",
  },
  {
    name: "Bogumiła Ka",
    date: "2025-10-20",
    text: "Rewelacyjne miejsce, pyszne jabłka, muzyka na żywo. Idealny pomysł na aktywną niedzielę.",
  },
  {
    name: "Janusz Koliński",
    date: "2023-02-20",
    text: "Wspaniałe miejsce dla małych i dużych smakoszy jabłka. Kwitnące sady i zapierający w piersiach widok na panoramę miasta.",
  },
  {
    name: "Krzysztof Kempa",
    date: "2021-10-30",
    text: "Jabłkobranie to świetna przygoda dla maluchów. Przepiękne miejsce ze świetnym widokiem na Trzebnicę. Zbieranie jabłek zamienione w zabawę to był świetny pomysł!",
  },
  {
    name: "Szymon Zięba",
    date: "2023-03-10",
    text: "Piękne, zdrowe, smaczne jabłka, soki i przetwory — wszystko uprawiane przez ludzi z pasją do natury! Polecam serdecznie!",
  },
  {
    name: "Ania Meinhard",
    date: "2025-02-15",
    text: "Na Sady Celmerów trafiliśmy dzięki jabłkobraniu. Wspaniała atmosfera, pyszne jabłka, dzieci zadowolone. Bardzo polecam to cudowne miejsce!",
  },
  {
    name: "Michał Górski",
    date: "2019-02-20",
    text: "Przepyszne soki i jabłka (najlepsze jakie jadłem), różne odmiany — nie ma nudy! I wspaniali ludzie z pasją do tego co robią.",
  },
  {
    name: "Alicja Śmiertka",
    date: "2019-03-15",
    text: "Miła obsługa i wysoka jakość produktów sprawiły, że nie wyobrażam sobie zaopatrywać się w jabłka i soki z nich gdzie indziej.",
  },
  {
    name: "Kamil Snowacki",
    date: "2023-04-05",
    text: "Super jabłka! Świeże i zdrowe!",
  },
];

/* ─── Gallery ───────────────────────────────────────────────── */

export interface GalleryPhoto {
  src: string;
  alt: string;
  category: "sad" | "produkty" | "przyroda";
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/gallery/sad-jablonie.jpg",
    alt: "Jabłonie w sadzie",
    category: "sad",
  },
  {
    src: "/images/gallery/jablka-na-drzewie.jpg",
    alt: "Jabłka na drzewie",
    category: "sad",
  },
  {
    src: "/images/gallery/jablka-zblizenie.jpg",
    alt: "Jabłka — zbliżenie",
    category: "sad",
  },
  {
    src: "/images/gallery/odmiany-na-galezi.jpg",
    alt: "Odmiany jabłek na gałęzi",
    category: "sad",
  },
  {
    src: "/images/gallery/czerwone-jablka.jpg",
    alt: "Czerwone jabłka w słońcu",
    category: "sad",
  },
  {
    src: "/images/gallery/pszczola-na-kwiecie.jpg",
    alt: "Pszczoła miodna na kwiecie jabłoni",
    category: "przyroda",
  },
  {
    src: "/images/gallery/produkty-w-sadzie.jpg",
    alt: "Produkty Sady Celmerów w sadzie",
    category: "produkty",
  },
  {
    src: "/images/gallery/produkty-wystawa.jpg",
    alt: "Wystawa produktów z jabłkami",
    category: "produkty",
  },
  {
    src: "/images/gallery/sok-jablkowy-produkt.jpg",
    alt: "Sok jabłkowy — karton i butelka",
    category: "produkty",
  },
  {
    src: "/images/gallery/ptasie-gniazdo.jpg",
    alt: "Ptasie gniazdo w jabłoni",
    category: "przyroda",
  },
  {
    src: "/images/gallery/sarenka-w-sadzie.jpg",
    alt: "Sarenka w sadzie",
    category: "przyroda",
  },
  {
    src: "/images/gallery/sad-zima.jpg",
    alt: "Sad zimą",
    category: "sad",
  },
];
