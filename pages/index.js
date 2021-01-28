import Head from "next/head";
import MainNavbar from "../components/Navbar/mainNavbar";
import HomePage from "../components/Home/Home";
import About from "../components/About/About";
import OurService from "../components/OurService/OurService";

export default function Home() {
  return (
    <div>
      <Head>
        <title>So pack!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />
      <HomePage />
      <About />
      <OurService />
    </div>
  );
}
