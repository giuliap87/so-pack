import Head from "next/head";
import MainNavbar from "../components/Navbar/mainNavbar";
import HomePage from "../components/Home/Home";
import About from "../components/About/About";
import Service from "../components/OurService/OurService";
import Products from "../components/Products/Products";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";

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
      <Service />
      <Products />
      <Contacts />
      <Footer />
    </div>
  );
}
