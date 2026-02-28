"use client";

import { useEffect, useState } from "react";
import { salesPoints } from "@/lib/salesPoints";

export default function SalesMap() {
  const [MapComponent, setMapComponent] = useState<React.ComponentType | null>(
    null,
  );

  useEffect(() => {
    import("./SalesMapInner").then((mod) => setMapComponent(() => mod.default));
  }, []);

  if (!MapComponent) {
    return (
      <div className="flex h-[400px] items-center justify-center bg-sage-50 text-sage-400 sm:h-[500px]">
        Ładowanie mapy…
      </div>
    );
  }

  return <MapComponent />;
}
