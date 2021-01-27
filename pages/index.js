import Head from "next/head";
import MainNavbar from "../components/Navbar/mainNavbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>So pack!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />
    </div>
  );
}
