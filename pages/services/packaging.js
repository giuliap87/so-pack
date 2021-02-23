import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar/mainNavbar";
import Description from "../../components/Packing/Description";
import Packing from "../../components/Packing/Packing";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

function Packaging() {
  const secondary = true;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>So pack - Packaging</title>
        <meta
          name="description"
          key="description"
          content="Thanks to our industry partners for glass, metal working, polymers injection and mold development, we can manage the develoment of one of several components for perfumery and cosmetic. Take a look at what we offer!"
        />
        <meta
          property="og:title"
          key="og:title"
          content="So pack - Custom Made Perfumes | Our Services"
        />
      </Head>
      <div
        style={{
          minHeight: "calc(100vh - 70px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Description/>
        <Packing
        />
      </div>
      <Footer />
    </motion.div>
  );
}

export default Packaging;
