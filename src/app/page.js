import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Image from "next/image";
import './styles.css'
import Carousel from "@/components/Carousel";
import NoticeBoard from "@/components/NoticeBoard";
import Placement from "@/components/Placement";
import { About } from "@/components/About";
import { Testimonial } from "@/components/Testimonial";
import { Team } from "@/components/Team";
import { Teacher } from "@/components/Teacher";
import { Student } from "@/components/Student";
import { Map } from "@/components/Map";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <Carousel/>
      <NoticeBoard/>
      <Placement/>
      <About/>
      <Testimonial/>
      <Team/>
      <Teacher/>
      <Student/>
      <Map/>
      <Footer/>
    </>
  );
}
