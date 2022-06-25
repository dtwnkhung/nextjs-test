import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import MainLayout from "../layout/main";
import { homeBanner } from "../components/image";
import Partner from "../components/home/partner";
import ContactInfo from "../components/home/contactinfo";
import Feedback from "../components/home/feedback";
import Philosophy from "../components/home/philosophy";
import Technology from "../components/home/technology";
import Feature from "../components/home/feature";
import Intro from "../components/home/intro";

export default function Home() {
  return (
    <MainLayout>
      <div className="-mb-2"><Image src={homeBanner} width="1920" height="918" /></div>
      <Intro />
      <Feature />
      <Philosophy />
      <Technology />
      <Feedback />
      <ContactInfo />
      <Partner />
    </MainLayout>
  );
}
