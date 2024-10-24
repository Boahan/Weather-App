"use client";
import Image from "next/image";
import AirPollution from "../Components/AirPollution/AirPollution";
import DailyForecast from "../Components/DailyForecast/DailyForecast";
import FeelsLike from "../Components/FeelsLike/FeelsLike";
import Humidity from "../Components/Humidity/Humidity";
import Navbar from "../Components/Navbar";
import Population from "../Components/Population/Population";
import Pressure from "../Components/Pressure/Pressure";
import Temperature from "../Components/Temperature/Temperature";
import UvIndex from "../Components/UvIndex/UvIndex";
import Visibility from "../Components/Visibility/Visibility";
import Wind from "../Components/Wind/Wind";
import FiveDayForecast from "../Components/FiveDayForecast/FiveDayForecast";
import { useGlobalContextUpdate } from "../context/globalContext";
import { RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import TempLimit from "../Components/TempLimit/TempLimit"

export default function Home() {
  const { setActiveCityCoords } = useGlobalContextUpdate();

  const getClickedCityCords = (lat: number, lon: number) => {
    setActiveCityCoords([lat, lon]);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <FiveDayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <TempLimit />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>

        </div>
      </div>

      <footer className="py-4 flex justify-center pb-8">
        <p className="footer-text text-sm flex items-center gap-1">
          Made by
          <Image src={"/logo-white.svg"} alt="logo" width={20} height={20} />
          <a
            href="https://thecodedealer.com"
            target="_blank"
            className=" text-green-300 font-bold"
          >
            TheCodeDealer
          </a>
        </p>
      </footer>
    </main>
    <SignedOut>
    <RedirectToSignIn />
  </SignedOut>
  </>
  );
}
