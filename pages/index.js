import Head from "next/head";
import MainNavbar from "../components/Navbar/mainNavbar";
import HomePage from "../components/Home/Home";
import About from "../components/About/About";
import Service from "../components/OurService/OurService";
import Products from "../components/Products/Products";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {duration: .6}}} exit={{opacity: 0}}>
      <Head>
        <title>Custom Made Perfumes</title>
      </Head>
      <MainNavbar/>
      <HomePage />
      <About />
      <Service />
      <Products />
      <Contacts />
      <Footer />
    </motion.div>
  );
}
