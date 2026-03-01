export interface SalesPoint {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  description?: string;
  mapsUrl?: string;
  isHQ?: boolean;
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
    mapsUrl: "https://maps.app.goo.gl/fWoKNBcPtvz2jHPF7",
    isHQ: true,
  },
  {
    id: "bazar-smakoszy",
    name: "Wrocławski Bazar Smakoszy",
    address: "ul. Paczkowska 26, Wrocław",
    lat: 51.0912490733812,
    lng: 17.04703892561617,
    description: "Nasze stoisko w każdy weekend — sobota 9:00–13:00, niedziela 10:00–14:00.",
    mapsUrl: "https://maps.app.goo.gl/SrkAoR21VS1gZ6846",
  },
  {
    id: "por-favor",
    name: "POR favor — sklep owocowo-warzywny",
    address: "Wrocław",
    lat: 51.086275903450435,
    lng: 17.046395693254006,
    description: "Sklep owocowo-warzywny z naszymi jabłkami i sokami.",
    mapsUrl: "https://maps.app.goo.gl/tj9bNoVJsQsRYSuT7",
  },
  {
    id: "ogrodek-warzywny",
    name: "Ogródek Warzywny",
    address: "Wrocław",
    lat: 51.11639341479037,
    lng: 16.94957609170451,
    description: "Świeże jabłka i soki Sady Celmerów dostępne na miejscu.",
  },
  {
    id: "bazar-komador",
    name: "Bazar Komador — Stoisko u Pana Sławka",
    address: "Wrocław",
    lat: 51.09416026635312,
    lng: 17.02476736418977,
    description: "Nasze jabłka i soki na stoisku u Pana Sławka.",
    mapsUrl: "https://maps.app.goo.gl/UeiUnv6kMjiCzboSA",
  },
  {
    id: "piekarnia-lwowska",
    name: "Piekarnia Lwowska",
    address: "Wrocław",
    lat: 51.09932525907361,
    lng: 17.012210883654674,
    description: "Nasze soki jabłkowe dostępne w piekarni.",
    mapsUrl: "https://maps.app.goo.gl/y3J621qhMGrruu1N8",
  },
  {
    id: "fabryczna-boulder",
    name: "Fabryczna Boulder — ścianka wspinaczkowa",
    address: "Wrocław",
    lat: 51.09736451539748,
    lng: 16.982400844861736,
    description: "Soki Sady Celmerów na ściance wspinaczkowej.",
    mapsUrl: "https://maps.app.goo.gl/gN4NijsULc1XKDpG7",
  },
  {
    id: "wibrem-arena",
    name: "Wibrem Arena — ścianka wspinaczkowa",
    address: "Wrocław",
    lat: 51.15533733765965,
    lng: 17.02456502296663,
    description: "Nasze soki dostępne na miejscu.",
    mapsUrl: "https://maps.app.goo.gl/aN6Vj32LihHqLogs7",
  },
  {
    id: "es8bar",
    name: "es8bar — restauracja",
    address: "Trzebnica",
    lat: 51.22704246639916,
    lng: 17.169877027348104,
    description: "Restauracja serwująca nasze soki jabłkowe.",
    mapsUrl: "https://maps.app.goo.gl/E1PfyiQgLwE1sFoT9",
  },
  {
    id: "il-pane-trzebnica",
    name: "Il Pane — piekarnia",
    address: "Trzebnica",
    lat: 51.30705309981582,
    lng: 17.05987548524783,
    description: "Piekarnia rzemieślnicza z naszymi sokami w ofercie.",
    mapsUrl: "https://maps.app.goo.gl/2hardg4d4aoTFkmG6",
  },
  {
    id: "il-pane-oborniki",
    name: "Il Pane — piekarnia",
    address: "Oborniki Śląskie",
    lat: 51.29930462826928,
    lng: 16.911138196667597,
    description: "Piekarnia rzemieślnicza z naszymi sokami w ofercie.",
    mapsUrl: "https://maps.app.goo.gl/nVLqDCSutERMt6g56",
  },
  {
    id: "zajazd-pod-lwem",
    name: "Zajazd Pod Lwem — restauracja",
    address: "Trzebnica",
    lat: 51.32737730673984,
    lng: 17.054946902935004,
    description: "Restauracja z naszymi sokami w karcie.",
    mapsUrl: "https://maps.app.goo.gl/VdKcPTZWGoEL1EeR6",
  },
];
