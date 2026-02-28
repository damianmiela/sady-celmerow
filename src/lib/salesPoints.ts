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
    lat: 51.30634389983335,
    lng: 17.05018064172381,
    description:
      "Siedziba gospodarstwa — tutaj możesz kupić jabłka i soki bezpośrednio od producenta.",
  },
];
