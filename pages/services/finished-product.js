import Head from "next/head";
import Navbar from "../../components/Navbar/secondaryNavbar";
import FinishedProductSection from "../../components/FinishProduct/FinishProduct";
import Process from "../../components/FinishProduct/Process/Process";
import Footer from "../../components/Footer/Footer";

function FinishedProduct() {
  return (
    <div>
      <Head>
        <title>So pack services - Finished Products</title>
      </Head>
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <Navbar />
        <FinishedProductSection />
        <Process />
        <Footer />
      </div>
    </div>
  );
}

export default FinishedProduct;
