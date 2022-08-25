import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #0E0811;
    color: #fff;
	-webkit-font-smoothing: antialiased;
  }

  a {
	  text-decoration: none;
	  color: #fff;
  }
`;

export const AppWrapper = styled.div`
  padding: 10px;
  overflow-x: hidden;

  @media (max-width: 980px) {
    padding: 10px 15px;
  }
`;

export const PlatformIcon = styled.div`
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  display: inline-block;

  ${(props) =>
    props.small
      ? `
    width: 12px;
    height: 14px;
  `
      : props.extraLarge
      ? `
		width: 22px;
		height: 18px;
  `
      : `
    width: 19px;
    height: 15px;
  `}
`;

export const CenteredTitle = styled.h3`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const MetaScore = styled.div`
  ${(props) =>
    props.metacritic > 70
      ? `
      color: #6dc849;
      border-color: rgba(109, 200, 73, 0.4);

    `
      : props.metacritic < 71 && props.metacritic > 40
      ? `
      color: yellow;
  border-color: yellow;
  `
      : `
      color: red;
      border-color: red;

    `}
  display: inline-block;
  padding: 2px 0;
  margin-left: auto;
  min-width: 32px;
  text-align: center;
  font-weight: 700;
  border: 1px solid;
  border-radius: 4px;
`;

export const MainLink = styled.a`
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.4) 0,
    hsla(0, 0%, 100%, 0.4) 1px,
    hsla(0, 0%, 100%, 0) 0
  );
  cursor: pointer;
  display: inline;
  transition: all 0.3s;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: hsla(0, 0%, 100%, 0.4);
  }
`;

export const RoundButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 50px;
  height: 50px;
  border: 1px solid hsla(0, 0%, 59.2%, 0.05);
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.1);
  cursor: pointer;
  transition: all 0.2s;

  span {
    height: 16px;
    width: 16px;
    margin: 16px;
    transition: all 0.2s;
  }

  &:hover {
    background-color: #fff;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 400;
  width: 100%;
  height: 100%;
  background-color: #000;
  outline: none;
`;

export const ModalClose = styled.div`
  position: absolute;
  bottom: 15px;
  right: 20px;
  ${RoundButton}

  span {
    background-size: cover;
    filter: grayscale(1) brightness(20);
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxOScgaGVpZ2h0PScxOScgdmlld0JveD0nMCAwIDE5IDE5Jz48cGF0aCBkPSdNMiAybDE1IDE1bTAtMTVMMiAxNycgZmlsbD0nbm9uZScgc3Ryb2tlPScjMUQxRDFEJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycvPjwvc3ZnPg==);
  }

  &:hover span {
    filter: grayscale(1) brightness(0);
  }
`;

export const Chevron = css`
  border-style: solid;
  border-width: 0.1em 0.1em 0 0;
  height: 0.45em;
  width: 0.45em;
  font-size: 28px;
`;
export const ModalImageWrapper = styled.div`
  width: 92vw;
  padding: 20px 50px;
  height: 100%;

  .slide img {
    width: 100%;
    height: 87vh;
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 980px) {
    padding: 20px 10px;
    width: 95%;
  }

  .thumbs-wrapper {
    margin: 0;
    margin-left: -40px;
  }
`;
