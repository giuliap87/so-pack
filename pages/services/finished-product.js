import Head from "next/head";
import Navbar from "../../components/Navbar/mainNavbar";
import FinishedProductSection from "../../components/FinishedProduct/FinishedProduct";
import Process from "../../components/FinishedProduct/Process/Process";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

function FinishedProduct() {
  const secondary = true;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>So pack - Full Service Products</title>
        <meta
          name="description"
          key="description"
          content="We manage the entire manufactoring process, from design and packaging conception to the filling and delivery. Thanks to our filling factory in the east of France, which specialized in luxury perfumery, we can control and guarantee the quality of our products even during the last phase of manufactoring process. Take a look at our services! "
        />
        <meta
          property="og:title"
          key="og:title"
          content="So pack - Custom Made Perfumes | Our Services"
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <div style={{ minHeight: "calc(100vh - 70px)" }}>
        <Navbar />
        <FinishedProductSection />
        <Process />
        <Footer />
      </div>
    </motion.div>
  );
}

export default FinishedProduct;
