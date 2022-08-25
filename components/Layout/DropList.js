import Link from "next/link";

import {
  DropListContent,
  DropListClose,
  WrapperDropList,
  SuggestionsInfoPlatforms,
  SuggestionsImage,
  SuggestionsItem,
  SuggestionsHeader,
  WrapperSuggestions,
} from "./Layout.styled";
import { PlatformIcon } from "../styles/global.styled";

import Loader from "../UI/Loader";

import { getPlatformIcon } from "../../helpers/utils/forGame";

const DropList = ({
  gamesCount,
  isLoading,
  isSmallScreen,
  searchResults,
  handleClose,
}) => {
  return (
    <WrapperDropList>
      <DropListContent>
        <WrapperSuggestions>
          {isLoading && <Loader />}

          {searchResults?.length > 0 && (
            <>
              <SuggestionsHeader>
                {gamesCount && (
                  <div>
                    Игры<span>{gamesCount}</span>
                  </div>
                )}
              </SuggestionsHeader>
              {searchResults.map((item) => (
                <SuggestionsItem key={item.id}>
                  <Link href={`/games/${item.slug}`}>
                    <SuggestionsImage
                      img={item.background_image}
                      onClick={handleClose}
                    >
                      <span role="button" />
                    </SuggestionsImage>
                  </Link>

                  <div>
                    <SuggestionsInfoPlatforms>
                      {item.parent_platforms
                        ?.slice(0, 3)
                        .map(({ platform }, index) => (
                          <PlatformIcon
                            key={index}
                            small={true}
                            style={{
                              backgroundImage: `url(  data:image/svg+xml;base64,${getPlatformIcon(
                                platform.name
                              )})`,
                            }}
                          />
                        ))}
                      {item.parent_platforms?.length > 3 && (
                        <div>+{item.parent_platforms.slice(3).length}</div>
                      )}
                    </SuggestionsInfoPlatforms>

                    <Link href={`/games/${item.slug}`}>
                      <a onClick={handleClose}>{item.name}</a>
                    </Link>
                  </div>
                </SuggestionsItem>
              ))}
            </>
          )}
        </WrapperSuggestions>
      </DropListContent>

      {isSmallScreen && (
        <DropListClose onClick={handleClose}>
          <span />
        </DropListClose>
      )}
    </WrapperDropList>
  );
};

export default DropList;
