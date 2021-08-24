import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>AirMnM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-5">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>

        {exploreData?.map((item) => (
          <SmallCard
            key={item.img}
            img={item.img}
            distance={item.distance}
            location={item.location}
          />
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
