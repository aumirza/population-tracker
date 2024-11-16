import React from "react";
import { Map } from "src/components/Map";

export default function MainPage() {
  return (
    <div className="flex flex-col">
      <header className="flex justify-between items-center py-3">
        <div className="w-11/12 m-auto">
          <h2 className="text-2xl font-semibold">Population Tracker</h2>
        </div>
      </header>
      <Map />
    </div>
  );
}
