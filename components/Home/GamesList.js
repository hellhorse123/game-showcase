import { useState } from "react";
import Link from "next/link";

import useMedia from "../../helpers/hooks/useMedia";

import {
  GameElementDesc,
  GameElementBody,
  GameElementInside,
  GameElementOutside,
  GameElementHeader,
  GameElementPlatforms,
  GameElementShowMore,
  GameListMedia,
  WrapperGamesList,
} from "./HomePage.styled";
import { PlatformIcon, MetaScore } from "../styles/global.styled";
import { formatDate } from "../../helpers/utils/formattedDate";

import { getPlatformIcon, getRatingScore } from "../../helpers/utils/forGame";

const GamesList = ({ games }) => {
  const [infoOpen, setInfoOpen] = useState(null);

  const isSmallScreen = useMedia(980);

  const handleInfoOpen = (index) => {
    if (infoOpen == index) {
      index = null;
    }
    setInfoOpen(index);
  };
  return (
    <WrapperGamesList>
      {games?.map((item, index) => {
        return (
          <GameElementOutside key={index}>
            <GameElementInside>
              <GameListMedia>
                <img src={item.background_image} alt="img" />
              </GameListMedia>

              <GameElementBody>
                <GameElementPlatforms>
                  {item.parent_platforms
                    ?.slice(0, 5)
                    .map(({ platform }, index) => (
                      <PlatformIcon
                        key={index}
                        style={{
                          backgroundImage: `url(data:image/svg+xml;base64,${getPlatformIcon(
                            platform.name
                          )}
											)`,
                        }}
                      />
                    ))}
                  {item.parent_platforms?.length > 5 && (
                    <div>+{item.parent_platforms.slice(5).length}</div>
                  )}
                  {item.metacritic && (
                    <MetaScore metacritic={item.metacritic} title="MetaScore">
                      {item.metacritic}
                    </MetaScore>
                  )}
                </GameElementPlatforms>

                <GameElementHeader>
                  <Link href={`/games/${item.slug}`}>
                    <a>{item.name}</a>
                  </Link>
                </GameElementHeader>

                <GameElementDesc open={index == infoOpen}>
                  <div>
                    <span>Дата выхода:</span>
                    <span>
                      {item.released ? formatDate(item.released) : "Не указана"}
                    </span>
                  </div>
                  <div>
                    <span>Жанры:</span>
                    <span>
                      {item.genres?.map((genre, index) => {
                        let name = genre.name;
                        if (index + 1 !== item.genres.length) {
                          name += ", ";
                        }
                        return name;
                      })}
                    </span>
                  </div>
                  <div>
                    <span>Рейтинг:</span>
                    <span>{getRatingScore(item)}</span>
                  </div>
                </GameElementDesc>

                {isSmallScreen && (
                  <GameElementShowMore onClick={() => handleInfoOpen(index)}>
                    {index == infoOpen ? (
                      <span>Скрыть</span>
                    ) : (
                      <span>Подробее</span>
                    )}
                  </GameElementShowMore>
                )}
              </GameElementBody>
            </GameElementInside>
          </GameElementOutside>
        );
      })}
    </WrapperGamesList>
  );
};

export default GamesList;
