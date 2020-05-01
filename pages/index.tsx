import Head from "next/head";
import Header from "../components/Header";
import Recipe from "../components/Recipe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Salut chef</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="pt-16">
          <Recipe />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
