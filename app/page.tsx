import { HeroLanding } from "@/components/component/hero-landing";
import { Devblog } from "@/components/Devblog";
import { Equipes } from "@/components/Equipes";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Navbar/>
    <HeroLanding/>
    <Equipes/>
    <Devblog/>
    <Footer/>
   </>
  );
}
