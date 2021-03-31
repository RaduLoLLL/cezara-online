import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Miere Cezara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.body + " min-h-screen px-10 py-5 relative"}>
        <Navbar />
        <Hero />
      </div>
      <div className=" bg-yellow-400 pb-16">
        <Main />
      </div>
    </div>
  );
}
