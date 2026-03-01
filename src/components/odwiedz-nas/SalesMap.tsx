"use client";

import { useEffect, useState } from "react";

export default function SalesMap() {
  const [MapComponent, setMapComponent] = useState<React.ComponentType | null>(
    null,
  );

  useEffect(() => {
    import("./SalesMapInner").then((mod) => setMapComponent(() => mod.default));
  }, []);

  if (!MapComponent) {
    return (
      <div className="flex h-[350px] items-center justify-center rounded-2xl bg-sage-50 text-sage-400 shadow-md sm:h-[450px]">
        Ładowanie mapy…
      </div>
    );
  }

  return <MapComponent />;
}
