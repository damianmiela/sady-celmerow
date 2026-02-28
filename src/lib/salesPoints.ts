export interface SalesPoint {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  description?: string;
  photo?: string;
}

export const salesPoints: SalesPoint[] = [
  {
    id: "sady-celmerow",
    name: "Sady Celmerów",
    address: "ul. Obornicka 18, 55-100 Trzebnica",
    lat: 51.3105,
    lng: 17.0625,
    description:
      "Siedziba gospodarstwa — tutaj możesz kupić jabłka i soki bezpośrednio od producenta.",
  },
];
