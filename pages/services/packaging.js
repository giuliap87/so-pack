import { useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar/mainNavbar";
import Description from "../../components/Packing/Description";
import Packing from "../../components/Packing/Packing";
import Footer from "../../components/Footer/Footer";
import {motion} from "framer-motion";

function Packaging() {

  const secondary = true;

  const [isOverlay, setIsOverlay] = useState(false);

  function toggleOverlay(){
    setIsOverlay(!isOverlay)
  }

  function closeOverlay(){
    setIsOverlay(false)
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {duration: .4}}} exit={{opacity: 0}}>
      <Head>
        <title>So pack services - Packaging</title>
      </Head>
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <Navbar secondary={secondary}/>
        <Description isOverlay={isOverlay}/>
        <Packing isOverlay={isOverlay} toggleOverlay={toggleOverlay} closeOverlay={closeOverlay}/>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Packaging;
