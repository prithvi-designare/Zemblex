'use client';

import Image from "next/image";
import SideBar from "../components/sidebar";
import { Navbar } from "../components/navbar";
import { Header } from "../sections/Home/Header";
import { AboutUs } from "../sections/Home/AboutUs";
import { Highlights } from "../sections/Home/Highlights";
import "../styles/global.css"

export default function Home() {
  return (
    <div className="flex bg-[rgb(0,0,0)]">
      <SideBar/>
      <div className="px-4 w-[100%] flex justify-center">
        <div className="max-w-[1080px]">
        <Navbar/>
        <Header />
        <AboutUs />
        <Highlights />
        </div>
      </div>
    </div>
  );
}
