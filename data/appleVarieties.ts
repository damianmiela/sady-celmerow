export interface AppleVariety {
  id: number;
  name: string;
  image: string;
}

export const appleVarieties: AppleVariety[] = [
  { id: 1, name: 'Topaz', image: '/images/odmiany/topaz.jpg' },
  { id: 2, name: 'Rubinola', image: '/images/odmiany/rubinola.jpg' },
  {
    id: 3,
    name: 'Golden Delicious',
    image: '/images/odmiany/golden-delicious.jpg',
  },
  { id: 4, name: 'Rubin', image: '/images/odmiany/rubin.jpg' },
  { id: 5, name: 'Szampion', image: '/images/odmiany/szampion.jpg' },
  { id: 6, name: 'Rubinstar', image: '/images/odmiany/rubinstar.jpg' },
  { id: 7, name: 'Melrose', image: '/images/odmiany/melrose.jpg' },
  { id: 8, name: 'Elstar', image: '/images/odmiany/elstar.jpg' },
  { id: 9, name: 'Gloster', image: '/images/odmiany/gloster.jpg' },
  { id: 10, name: 'Cortland', image: '/images/odmiany/cortland.jpg' },
];

export const appleVarietiesDescription = [
  'Obecnie uprawiamy 12 odmian jabłek a naszą specjalnością są takie rarytasy jak: Topaz i Rubinola. Od wielu lat uczestniczymy w systemie Integrowanej Produkcji. Program ten to kompromis pomiędzy ekologią, a uprawą konwencjonalną. Co roku staramy się o Certyfikat Integrowanej Produkcji, który gwarantuje, że jabłka są zdrowe i brak w nich groźnych dla konsumentów pozostałości pestycydów.',
  'Dążymy do tego, aby środki ochrony roślin były stosowane z umiarem, a w sadzie panowała równowaga biologiczna. W naszych sadach znajdziemy mnóstwo biedronek, pająków, skorków i dobroczynków. Na drzewach zauważyć można gniazda ptaków. Sady odwiedzają też sarny, borsuki, lisy, zające i bażanty. I zupełnie nam to nie przeszkadza:)',
];
