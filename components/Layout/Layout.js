import Head from "next/head";
import Navbar from "../Navbar/mainNavbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
