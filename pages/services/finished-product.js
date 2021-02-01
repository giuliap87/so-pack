import Head from "next/head";
import Navbar from "../../components/Navbar/secondaryNavbar";
import FinishedProductSection from "../../components/FinishProduct/FinishProduct";
import Footer from "../../components/Footer/Footer";

function FinishedProduct() {
  return (
    <div>
      <Head>
        <title>So pack services - Finished Products</title>
      </Head>
      <Navbar />
      <FinishedProductSection />
      <Footer />
    </div>
  );
}

export default FinishedProduct;
