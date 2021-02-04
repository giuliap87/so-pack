import Head from "next/head";
import Navbar from "../../components/Navbar/mainNavbar";
import FinishedProductSection from "../../components/FinishProduct/FinishProduct";
import Process from "../../components/FinishProduct/Process/Process";
import Footer from "../../components/Footer/Footer";

function FinishedProduct() {

  const secondary = true;
  return (
    <div>
      <Head>
        <title>So pack services - Finished Products</title>
      </Head>
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <Navbar secondary={secondary}/>
        <FinishedProductSection />
        <Process />
        <Footer />
      </div>
    </div>
  );
}

export default FinishedProduct;

