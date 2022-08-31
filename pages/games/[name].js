import Head from "next/head";

import { apiURL } from "../../helpers/api";

import DisplaySingleGame from "../../components/Games/DisplaySingleGame";

export default function singleGame({ dlc, game, screenshots, similar }) {
  return (
    <>
      <Head>
        <title>{game?.name}</title>
        <meta name="description" content={game?.name} />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <DisplaySingleGame
        dlc={dlc}
        game={game}
        screenshots={screenshots}
        similar={similar}
      />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const results = await Promise.all([
    apiURL(`/games/${params.name}?`),
    apiURL(`/games/${params.name}/screenshots?`),
    apiURL(`/games/${params.name}/game-series?`),
    apiURL(`/games/${params.name}/additions?`),
  ]);
  const [game, screenshots, similar, dlc] = results;

  if (!game || game.message) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      game: game || [],
      screenshots: screenshots?.results || [],
      similar: similar?.results || [],
      dlc: dlc?.results || [],
    },
  };
};
