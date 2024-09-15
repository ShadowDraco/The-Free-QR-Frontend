"use client";
import { useEffect, useState } from "react";

import MainBanner from "./components/headings/MainBanner";
import FlyoutForm from "./components/menus/FlyoutForm";
import AllQRS from "./components/qrs/AllQRS";

export default function Home() {
  const [allTimeQRs, setAllTimeQRs] = useState(0);
  const [allTimeScans, setAllTimeScans] = useState(0);
  const [allQRS, setAllQRs] = useState([]);
  const [error, setError] = useState("");

  const addNewQRData = (data) => {
    setAllQRs([...allQRS, data.QR]);
    setAllTimeQRs(data.allTimeQRs);
    setAllTimeScans(data.allTimeScans);
  };

  const replaceQRData = (data) => {
    setAllQRs(data.codeQRs);
    setAllTimeQRs(data.allTimeQRs);
    setAllTimeScans(data.allTimeScans);
  };

  /* Get ALL QRS on page load */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/qr/all`, {}).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setAllQRs([...allQRS, data.allQRS]);
      setAllTimeQRs(data.allTimeQRs);
      setAllTimeScans(data.allTimeScans);
      if (data.error) {
        setError(data.error);
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-100">
      <MainBanner allTimeQRs={allTimeQRs} allTimeScans={allTimeScans} />
      <FlyoutForm addNewQRData={addNewQRData} />
      <AllQRS allQRS={allQRS} replaceQRData={replaceQRData} />
    </main>
  );
}
