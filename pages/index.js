import Head from "next/head";

import { apiURL } from "../helpers/api";

import Home from "../components/Home/Home";

export default function HomePage({ data, platforms }) {
  return (
    <div>
      <Head>
        <title>Каталог игр</title>
        <meta name="description" content="games showcase" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Home data={data} platforms={platforms} />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await apiURL(
    `/games/lists/main?page_size=20&page=1&ordering=-rating&`
  );

  const platforms = await apiURL(`/platforms/lists/parents?`);

  return {
    props: {
      data: data?.results || [],
      platforms: platforms?.results || [],
    },
    revalidate: 120,
  };
};
