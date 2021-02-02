import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar/secondaryNavbar";
import Description from "../../components/Packing/Description/Description";
import Packing from "../../components/Packing/Packing";
import Footer from "../../components/Footer/Footer";
import Overlay from "../../components/Packing/Overlay";

function Packaging() {

  return (
    <div>
      <Head>
        <title>So pack services - Packaging</title>
      </Head>
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <Navbar />
        <Description />
        <Packing />
      </div>
      <Footer />
    </div>
  );
}

export default Packaging;
