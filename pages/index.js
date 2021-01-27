import Head from "next/head";
import NavigationBar from "../components/Navbar/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>So pack!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
    </div>
  );
}
