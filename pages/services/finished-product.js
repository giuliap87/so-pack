import Head from "next/head";
import Navbar from "../../components/Navbar/mainNavbar";
import FinishedProductSection from "../../components/FinishedProduct/FinishedProduct";
import Process from "../../components/FinishedProduct/Process/Process";
import Footer from "../../components/Footer/Footer";
import {motion} from "framer-motion"

function FinishedProduct() {

  const secondary = true;
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition: {duration: .6}}} exit={{opacity: 0}}>
      <Head>
        <title>So pack services - Finished Products</title>
      </Head>
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <Navbar secondary={secondary}/>
        <FinishedProductSection />
        <Process />
        <Footer />
      </div>
    </motion.div>
  );
}

export default FinishedProduct;

