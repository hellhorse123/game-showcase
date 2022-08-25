import { useState } from "react";

import useDebounce from "../../helpers/hooks/useDebounce";
import useMedia from "../../helpers/hooks/useMedia";

import { apiURL } from "../../helpers/api";

import { DropListOverlay, WrapperForm, WrapperInput } from "./Layout.styled";

import DropList from "./DropList";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [gamesCount, setGameCardsCount] = useState(0);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const findHandler = () => {
    setIsLoading(true);
    setOpen(true);
    setSearchResults([]);
    setGameCardsCount(0);

    let pagesNumber = 10;
    const value = inputText;

    apiURL(
      `/games?page_size=${pagesNumber}&search=${value}&page=1&`,
      (data) => {
        if (data.count > 0) {
          setSearchResults(data.results);
          setGameCardsCount(data.count);
        } else {
          setOpen(false);
        }
      },
      (_) => setIsLoading(false)
    );
  };

  const handleClose = () => {
    if (isSmallScreen) {
      document.body.style.overflow = "auto";
    }
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Escape") {
      handleClose();
    }
  };

  const isSmallScreen = useMedia(980);
  useDebounce(findHandler, 1000, [inputText]);

  return (
    <WrapperForm>
      <form>
        <WrapperInput open={open}>
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            onClick={handleClose}
            onKeyDown={handleKeyDown}
          />

          {open && (
            <DropList
              gamesCount={gamesCount}
              isLoading={isLoading}
              isSmallScreen={isSmallScreen}
              searchResults={searchResults}
              handleClose={handleClose}
            />
          )}
        </WrapperInput>

        {open && !isSmallScreen && <DropListOverlay onClick={handleClose} />}
      </form>
    </WrapperForm>
  );
};

export default Search;
