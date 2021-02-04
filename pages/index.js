import Head from "next/head";
import MainNavbar from "../components/Navbar/mainNavbar";
import HomePage from "../components/Home/Home";
import About from "../components/About/About";
import Service from "../components/OurService/OurService";
import Products from "../components/Products/Products";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";

export default function Home() {
const main = true;
  return (
    <div>
      <Head>
        <title>Custom Made Perfumes</title>
      </Head>
      <MainNavbar main={main}/>
      <HomePage />
      <About />
      <Service />
      <Products />
      <Contacts />
      <Footer />
    </div>
  );
}
