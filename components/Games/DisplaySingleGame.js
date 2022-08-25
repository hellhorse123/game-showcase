import React, { useState, useEffect } from "react";
import Link from "next/link";

import {
  Art,
  WrapperArt,
  GameAbout,
  GameAvailability,
  GameGallery,
  GameInfo,
  GameMeta,
  GameMetaDate,
  GameMetaPlatforms,
  GameRatingChart,
  GameRatingDistributionStat,
  GameRatingIcon,
  GameRatingStats,
  GameRatingStatsInfo,
  GameTitle,
  WrapperGame,
  PageArt,
  Wrapper,
} from "./Games.styled";
import { MainLink, MetaScore, PlatformIcon } from "../styles/global.styled";

import useMedia from "../../helpers/hooks/useMedia";

import {
  getPlatformIcon,
  getRatingName,
  getRatingScore,
  getRatingsSorted,
} from "../../helpers/utils/forGame";
import { formatDate } from "../../helpers/utils/formattedDate";

import Modal from "../UI/Modal";

const DisplaySingleGame = ({ dlc, game, screenshots, similar }) => {
  const [readMore, setReadMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const isSmallScreen = useMedia(980);

  const handleReadMore = () => {
    setReadMore((prevReadMore) => !prevReadMore);
  };

  const handleSelectImage = (index) => {
    if (index == null) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setSelectedImage(index);
  };

  return (
    <>
      <Wrapper>
        <WrapperGame>
          <div>
            <GameMeta>
              <GameMetaDate>
                {game.released ? formatDate(game.released) : "TBD"}
              </GameMetaDate>
              <GameMetaPlatforms>
                {game.parent_platforms
                  ?.slice(0, 5)
                  .map(({ platform }, index) => (
                    <PlatformIcon
                      key={index}
                      extraLarge={true}
                      style={{
                        backgroundImage: `url(data:image/svg+xml;base64,${getPlatformIcon(
                          platform.name
                        )}`,
                      }}
                    />
                  ))}
                {game.parent_platforms?.length > 5 && (
                  <div>+{item.parent_platforms.slice(5).length}</div>
                )}
              </GameMetaPlatforms>

              {game.playtime > 0 && (
                <div>Средняя длительность: {game.playtime} часов</div>
              )}
            </GameMeta>

            <GameTitle>{game.name}</GameTitle>

            {screenshots.length > 0 && isSmallScreen && (
              <Gallery
                isSmallScreen={isSmallScreen}
                screenshots={screenshots}
                handleSelectImage={handleSelectImage}
              />
            )}

            <GameRatingChart>
              <h3>Рейтинг</h3>
              <div>
                <span>{getRatingName(game.ratings)}</span>
                <span>{getRatingScore(game)}</span>
              </div>
            </GameRatingChart>

            {game.ratings?.length > 0 && (
              <GameRatingStats>
                <GameRatingDistributionStat>
                  {getRatingsSorted(game.ratings).map((rating, index) => (
                    <GameRatingIcon
                      key={index}
                      style={{ width: rating.percent + "%" }}
                      color={rating.title}
                    />
                  ))}
                </GameRatingDistributionStat>

                <GameRatingStatsInfo>
                  {getRatingsSorted(game.ratings).map((rating, index) => (
                    <div key={index}>
                      <GameRatingIcon color={rating.title} />
                      <p>
                        {rating.title == "exceptional"
                          ? "Необычайная"
                          : rating.title == "recommended"
                          ? "Рекомендую"
                          : rating.title == "skip"
                          ? "Пропущу"
                          : rating.title == "meh"
                          ? "Ну такое"
                          : rating.title}
                      </p>
                      <p>{rating.count}</p>
                    </div>
                  ))}
                </GameRatingStatsInfo>
              </GameRatingStats>
            )}
            <GameAbout>
              <h4>Об игре</h4>
              {!readMore ? (
                <p>{game.description_raw}</p>
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: game.description }}
                ></div>
              )}
              {game.description_raw?.length > 280 &&
                game.description?.length > 0 && (
                  <button onClick={handleReadMore}>
                    {readMore ? "Скрыть" : "Подробнее"}
                  </button>
                )}
            </GameAbout>

            <GameInfo>
              <div>
                {game.platforms?.length > 0 && (
                  <div>
                    <span>Платформы</span>
                    <div>
                      {game.platforms.map(
                        ({ platform }, index) =>
                          `${platform.name}${
                            index + 1 < game.platforms.length ? ", " : ""
                          }`
                      )}
                    </div>
                  </div>
                )}

                {game.metacritic && (
                  <div>
                    <span>МетаРейтинг</span>
                    <MetaScore metacritic={game.metacritic} title="MetaScore">
                      {game.metacritic}
                    </MetaScore>
                  </div>
                )}
                {game.genres?.length > 0 && (
                  <div>
                    <span>Жанры</span>
                    <div>
                      {game.genres.map(
                        (genre, index) =>
                          `${genre.name}${
                            index + 1 < game.genres.length ? ", " : ""
                          }`
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <span>Дата выхода</span>
                  <div>
                    {game.released ? formatDate(game.released) : "Не указана"}
                  </div>
                </div>
                {game.developers?.length > 0 && (
                  <div>
                    <span>Разработчик</span>
                    <div>
                      {game.developers.map(
                        (developer, index) =>
                          `${developer.name}${
                            index + 1 < game.developers.length ? ", " : ""
                          }`
                      )}
                    </div>
                  </div>
                )}

                {game.publishers?.length > 0 && (
                  <div>
                    <span>Издатель</span>
                    <div>
                      {game.publishers.map(
                        (publisher, index) =>
                          `${publisher.name}${
                            index + 1 < game.publishers.length ? ", " : ""
                          }`
                      )}
                    </div>
                  </div>
                )}
                <div>
                  <span>Возрастной рейтинг</span>
                  <div>
                    {game.esrb_rating ? game.esrb_rating.name : "Не указано"}
                  </div>
                </div>
              </div>

              {similar.length > 0 && (
                <div>
                  <span>Другие игры этой серии</span>
                  <div>
                    {similar.map((game, index) => (
                      <React.Fragment key={index}>
                        <Link href={`/games/${game.slug}`}>
                          <MainLink>{game.name}</MainLink>
                        </Link>
                        {index + 1 < similar.length ? ", " : ""}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
              {dlc.length > 0 && (
                <div>
                  <span>DLC</span>
                  <div>
                    {dlc.map((game, index) => (
                      <React.Fragment key={index}>
                        <Link href={`/games/${game.slug}`}>
                          <MainLink>{game.name}</MainLink>
                        </Link>
                        {index + 1 < dlc.length ? ", " : ""}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {game.tags?.length > 0 && (
                <div>
                  <span>Теги</span>
                  <div>
                    {game.tags.map(
                      (tag, index) =>
                        `${tag.name}${index + 1 < game.tags.length ? ", " : ""}`
                    )}
                  </div>
                </div>
              )}
              {game.website && (
                <div>
                  <span>Сайт</span>
                  <MainLink href={game.website} target="_blank">
                    {game.website}
                  </MainLink>
                </div>
              )}
            </GameInfo>
          </div>

          <div>
            {screenshots.length > 0 && !isSmallScreen && (
              <Gallery
                screenshots={screenshots}
                handleSelectImage={handleSelectImage}
              />
            )}

            {game.stores?.length > 0 && (
              <GameAvailability>
                <div>Где купить</div>

                <div>
                  {game.stores.map((game, index) => (
                    <a
                      href={`https://${game.store.domain}`}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      <span>{game.store.name}</span>
                    </a>
                  ))}
                </div>
              </GameAvailability>
            )}
          </div>
        </WrapperGame>
      </Wrapper>

      {selectedImage != null && (
        <Modal
          selected={selectedImage}
          closeModal={handleSelectImage}
          items={screenshots}
        />
      )}

      <PageArt>
        <WrapperArt>
          <Art art={game.background_image} />
        </WrapperArt>
      </PageArt>
    </>
  );
};

export const Gallery = ({
  isSmallScreen = false,
  screenshots,
  handleSelectImage,
}) => {
  return (
    <GameGallery>
      {screenshots.slice(0, 3).map((screenshot, index) => {
        return (
          <div
            type="button"
            onClick={() => handleSelectImage(index)}
            key={index}
          >
            <img src={screenshot.image} alt="img" />
          </div>
        );
      })}
      {!isSmallScreen && (
        <div onClick={() => handleSelectImage(0)}>
          <span>...</span>
          <span>Показать все</span>
        </div>
      )}
    </GameGallery>
  );
};

export default DisplaySingleGame;
