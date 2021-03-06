import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Features from "../components/Features";
import Magazin from "../components/Magazin";
import { API_URL } from "../utils/urls";
import Footer from "../components/Footer";
export default function Home({ products }) {
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

      <div className=" bg-yellow-400 pt-10 lg:pt-0 ">
        <Main />
      </div>
      <div className={`${styles.featuresBg}`}>
        <Features />
      </div>
      <div>
        <Magazin products={products} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let products = [];
  let error = "";
  try {
    const products_res = await fetch(`${API_URL}/produses`, {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
    });
    products = await products_res.json();
  } catch (e) {
    error = e.toString();
  }

  return {
    props: {
      products,
      error,
    },
  };
}
