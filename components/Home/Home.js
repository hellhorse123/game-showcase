import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { WrapperHome } from "./HomePage.styled";
import { CenteredTitle } from "../styles/global.styled";

import { apiURL } from "../../helpers/api";
import useUpdateEffect from "../../helpers/hooks/useUpdateEffect";

import GamesList from "./GamesList";
import Filters from "./Filters";
import Header from "./Header";
import Loader from "../UI/Loader";

const Home = ({ data, platforms }) => {
  const [gameCards, setGameCards] = useState(data);
  const [hasMore, setHasMore] = useState(data.length > 0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(data.length);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState({
    value: "rating",
    label: "По рейтингу (убывание)",
  });
  const [orderDesc, setOrderDesc] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState({
    value: "All",
    label: "Все",
  });

  useUpdateEffect(() => {
    setIsLoading(true);
    setHasMore(true);
    setCount(20);

    let orderBy = selectedOrder.value;

    if (orderDesc) {
      orderBy = `-${orderBy}`;
    }

    let filters = `page_size=20&page=1&ordering=${orderBy}`;

    if (selectedPlatform.value != "All") {
      filters += `&parent_platforms=${selectedPlatform.value}`;
    }

    apiURL(
      `/games/lists/main?${filters}&`,
      (newGames) => {
        if (newGames?.results?.length > 0) {
          setGameCards(newGames.results);
          setPage(1);
          setCount(20);
        } else {
          setCount(0);
          setHasMore(false);
        }
      },
      () => setIsLoading(false),
      (err) => {
        setCount(0);
        setHasMore(false);
      }
    );
  }, [selectedOrder.value, selectedPlatform.value, orderDesc]);

  const getMoreGameCards = () => {
    const pageSize = 20;

    const nextPage = page + 1;
    let orderBy = selectedOrder.value;

    if (orderDesc) {
      orderBy = `-${orderBy}`;
    }

    let filters = `page_size=${pageSize}&page=${nextPage}&ordering=${orderBy}`;

    if (selectedPlatform.value != "All") {
      filters += `&parent_platforms=${selectedPlatform.value}`;
    }

    apiURL(
      `/games/lists/main?${filters}&`,
      (newGames) => {
        if (newGames?.results?.length > 0) {
          setGameCards((game) => [...game, ...newGames.results]);
          setPage(nextPage);
          setCount((prevCount) => prevCount + pageSize);
        }
      },
      () => {},
      (err) => {
        setHasMore(false);
      }
    );
  };

  const handleChangeOrder = (value) => {
    if (selectedOrder.value == value.value && orderDesc) {
      setOrderDesc(false);
    } else {
      setOrderDesc(true);
    }
    setSelectedOrder(value);
  };

  const handleChangePlatform = (value) => {
    setSelectedPlatform(value);
  };

  return (
    <WrapperHome>
      <Header
        count={count}
        orderDesc={orderDesc}
        selectedOrder={selectedOrder}
        platform={selectedPlatform}
      />

      <Filters
        orderDesc={orderDesc}
        selectedOrder={selectedOrder}
        platforms={platforms}
        selectedPlatform={selectedPlatform}
        handleChangeOrder={handleChangeOrder}
        handleChangePlatform={handleChangePlatform}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <InfiniteScroll
          dataLength={gameCards.length}
          hasMore={hasMore}
          next={getMoreGameCards}
          loader={<CenteredTitle>Загрузка...</CenteredTitle>}
          endMessage={<CenteredTitle>Нет данных для отображения</CenteredTitle>}
        >
          <GamesList games={gameCards} />
        </InfiniteScroll>
      )}
    </WrapperHome>
  );
};

export default Home;
