import { HeroLanding } from "@/components/component/hero-landing";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Navbar/>
    <HeroLanding/>
   </>
  );
}
