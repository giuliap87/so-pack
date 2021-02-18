import Head from "next/head";
import MainNavbar from "../components/Navbar/mainNavbar";
import HomePage from "../components/Home/Home";
import About from "../components/About/About";
import Service from "../components/OurService/OurService";
import Products from "../components/Products/Products";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>So pack - Custom Made Perfumes </title>
        <meta
          name="description"
          key="description"
          content="So pack is a perfumery and cosmetics manufacturing company based in Paris. We can realize your `Made in France` perfumes and create your own manufacturing company or we can manage the develoment of one or several components for perfumery and cosmetics. Take a look at what we offer!"
        />
        <meta property="og:title" key="og:title" content="So pack - Custom Made Perfumes" />
      </Head>
      <MainNavbar />
      <HomePage />
      <About />
      <Service />
      <Products />
      <Contacts />
      <Footer />
    </motion.div>
  );
}
