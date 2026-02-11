export interface Juice {
  id: number;
  name: string;
  description: string;
  image: string;
  thumbnail: string;
  thumbnailLabel: string;
}

export const juices: Juice[] = [
  {
    id: 1,
    name: 'Sok Jabłkowy',
    description:
      'wytłoczony z najszlachetniejszych owoców naszego regionu, to połączenie kilku odmian jabłek składających się na słodko-kwaśny bukiet smakowy. Niezwykle słodka Rubinola, szalenie kwaśny Topaz, soczysty i dorodny Rubinstar czy też rumiana i wdzięczna Ariva, to odmiany, z których powstaje nasz niepowtarzalny sok.',
    image: '/images/juice/jablko.jpg',
    thumbnail: '/images/juice/jablko-min.jpg',
    thumbnailLabel: 'Jabłkowy',
  },
  {
    id: 2,
    name: 'Sok Jabłkowo - Aroniowy',
    description:
      'to połączenie klasycznych sprawdzonych rozwiązań, z odważnym, konsekwentnym, a przede wszystkim niezwykle ZDROWYM smakiem czarnej aronii. Aromat, który powala swym charakterem na łopatki wypełniając zmysły delikatną nutą cierpkości z idealnym wywarzeniem słodyczy soczystego jabłka.',
    image: '/images/juice/aronia.jpg',
    thumbnail: '/images/juice/aronia-min.jpg',
    thumbnailLabel: 'Jabłkowo-Aroniowy',
  },
  {
    id: 3,
    name: 'Sok Jabłkowo - Buraczkowy',
    description:
      'płonąca, krwista czerwień życiodajnego soku, sprawi że zadumasz się na chwilę i docenisz bogactwo wrażeń estetyczno-smakowych. Ten sok charakteryzuje się mocnym, wytrawnym aromatem buraka z łagodnym smakiem naszych jabłuszek, neutralizującym warzywną surowość. Sok stworzony dla koneserów i wielbicieli zdrowych doznań.',
    image: '/images/juice/burak.jpg',
    thumbnail: '/images/juice/burak-min.jpg',
    thumbnailLabel: 'Jabłkowo-Buraczkowy',
  },
  {
    id: 4,
    name: 'Sok Jabłkowo - Gruszkowy',
    description:
      'to połączenie znanej i lubianej wszystkim gruszki Konferencji z dorodnymi jabłkami z naszych sadów. Smak, który doda Ci energii i zaleje Twoje zmysły szaloną słodyczą, w której dosłownie rozpłyniesz się i zakochasz.',
    image: '/images/juice/gruszka.jpg',
    thumbnail: '/images/juice/gruszka-min.jpg',
    thumbnailLabel: 'Jabłkowo-Gruszkowy',
  },
  {
    id: 5,
    name: 'Sok Jabłkowo - Marchwiowy',
    description:
      'to mądre wywarzenie pomarańczowych i czerwonych aromatów. Sok z pozoru wydaje się klasyczny, a jednak zaskoczy Cię swoim krzepkim smakiem i wywarzonymi nutami marchwi. Spróbuj go, a zbaraniejesz z zachwytu i pochylisz czoło nad mądrością pomarańczowej marchwi.',
    image: '/images/juice/marchew.jpg',
    thumbnail: '/images/juice/marchew-min.jpg',
    thumbnailLabel: 'Jabłkowo-Marchwiowy',
  },
  {
    id: 6,
    name: 'Sok Jabłkowo - Porzeczkowy',
    description:
      'stworzony dla wielbicieli mocnego smaku, który pozostaje z Tobą na długo. Czarna porzeczka sprawi, że twoje zmysły zakrzykną z zachwytu, a Ty nagle znajdziesz się w ogrodzie Twojej ukochanej babci w piękny, wiosenny dzionek. Zdrowotne walory czarnych jagód to przede wszystkim ogromne pokłady witaminy C, które szybko zaspokoją potrzeby Twojego organizmu na cały dzień.',
    image: '/images/juice/porzeczka.jpg',
    thumbnail: '/images/juice/porzeczka-min.jpg',
    thumbnailLabel: 'Jabłkowo-Porzeczkowy',
  },
  {
    id: 7,
    name: 'Sok Jabłkowo - Wiśniowy',
    description:
      'to połączenie kwaśnego aromatu czerwonej wisienki z dorodną słodyczą rumianego jabłuszka. Smak, który pozostaje w ustach na długo dopełniony intensywną głębią czerwonego koloru, zachwyci każdego amatora wiśniowej przygody!',
    image: '/images/juice/wisnia.jpg',
    thumbnail: '/images/juice/wisnia-min.jpg',
    thumbnailLabel: 'Jabłkowo-Wiśniowy',
  },
];
