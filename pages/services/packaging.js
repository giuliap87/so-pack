import Head from "next/head";
import Navbar from "../../components/Navbar/secondaryNavbar";
import Packing from "../../components/Packing/Packing";
import Footer from "../../components/Footer/Footer";

function Packaging() {
  return (
    <div>
      <Head>
        <title>So pack services - Packaging</title>
      </Head>
      <Navbar />
      <Packing />
      <Footer />
    </div>
  );
}

export default Packaging;
