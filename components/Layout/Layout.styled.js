import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 10px;

  @media (min-width: 981px) {
    padding: 24px 40px;
  }
`;

export const HeaderTitle = styled.div`
  a {
    background-image: none;
    font-size: 14px;
    line-height: normal;
    font-weight: 400;
    position: relative;
    text-transform: uppercase;
    font-weight: 500;
    color: #fff;
    border: none;
    white-space: nowrap;

    div {
      position: relative;
      font-size: 18px;
      font-weight: 900;
      line-height: 1;
      letter-spacing: 5px;
      color: #fff;
    }
  }
`;

export const WrapperForm = styled.div`
  width: 100%;
  form {
    width: 100%;
  }
`;

export const WrapperInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  input {
    width: 100%;
    height: 44px;
    padding: 0 12px 0 38px;
    line-height: 14px;
    color: hsla(0, 0%, 100%, 0.6);
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIG9wYWNpdHk9Jy40JyB3aWR0aD0nMzEnIGhlaWdodD0nMzEnIHZpZXdCb3g9JzAgMCAxNCAxNCc+PHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNOS4yMDIgMy4wMjZhNC4zNjcgNC4zNjcgMCAxMC02LjE3NiA2LjE3NiA0LjM2NyA0LjM2NyAwIDEwNi4xNzYtNi4xNzZtNC41NDMgMTAuNzE5YS44NzUuODc1IDAgMDEtMS4yMzYgMGwtMi43NTEtMi43NTJjLTIuMzk1IDEuNzktNS43OTEgMS42MjEtNy45NjctLjU1NWE2LjExMyA2LjExMyAwIDAxMC04LjY0NyA2LjExMyA2LjExMyAwIDAxOC42NDcgMGMyLjE3NiAyLjE3NiAyLjM0NiA1LjU3Mi41NTUgNy45NjdsMi43NTIgMi43NTFjLjM0LjM0MS4zNC44OTQgMCAxLjIzNicvPjwvc3ZnPg==)
      no-repeat scroll 16px;
    background-size: 14px;
    background-color: hsla(0, 0%, 100%, 0.16);
    border: none;
    border-radius: 24px;
    transition: color 0.3s, background-color 0.3s, opacity 0.3s,
      width 0.05s linear;

    &:hover,
    &:focus {
      color: #000;
      opacity: 1;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J005LjIwMiAzLjAyNmE0LjM2NyA0LjM2NyAwIDEwLTYuMTc2IDYuMTc2IDQuMzY3IDQuMzY3IDAgMTA2LjE3Ni02LjE3Nm00LjU0MyAxMC43MTlhLjg3NS44NzUgMCAwMS0xLjIzNiAwbC0yLjc1MS0yLjc1MmMtMi4zOTUgMS43OS01Ljc5MSAxLjYyMS03Ljk2Ny0uNTU1YTYuMTEzIDYuMTEzIDAgMDEwLTguNjQ3IDYuMTEzIDYuMTEzIDAgMDE4LjY0NyAwYzIuMTc2IDIuMTc2IDIuMzQ2IDUuNTcyLjU1NSA3Ljk2N2wyLjc1MiAyLjc1MWMuMzQuMzQxLjM0Ljg5NCAwIDEuMjM2Jy8+PC9zdmc+);
      background-color: #fff;
      outline: none;
    }

    @media (max-width: 980px) {
      z-index: 302;
      background-color: #fff;
      color: #000;
      opacity: 1;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J005LjIwMiAzLjAyNmE0LjM2NyA0LjM2NyAwIDEwLTYuMTc2IDYuMTc2IDQuMzY3IDQuMzY3IDAgMTA2LjE3Ni02LjE3Nm00LjU0MyAxMC43MTlhLjg3NS44NzUgMCAwMS0xLjIzNiAwbC0yLjc1MS0yLjc1MmMtMi4zOTUgMS43OS01Ljc5MSAxLjYyMS03Ljk2Ny0uNTU1YTYuMTEzIDYuMTEzIDAgMDEwLTguNjQ3IDYuMTEzIDYuMTEzIDAgMDE4LjY0NyAwYzIuMTc2IDIuMTc2IDIuMzQ2IDUuNTcyLjU1NSA3Ljk2N2wyLjc1MiAyLjc1MWMuMzQuMzQxLjM0Ljg5NCAwIDEuMjM2Jy8+PC9zdmc+);
      background-color: #fff;
    }
  }

  @media (max-width: 980px) {
    ${(props) =>
      props.open
        ? `
            position: absolute;
            top: 10px;
            left: 0;
            max-width: 98%
        `
        : `
            max-width: 400px;
        `}
  }
  @media (max-width: 630px) {
    ${(props) =>
      props.open
        ? `
            max-width: 98%
        `
        : `
            max-width: 300px;
        `}
  }

  @media (max-width: 425px) {
    ${(props) =>
      props.open
        ? `
            max-width: 98%
        `
        : `
            max-width: 200px;
        `}
  }
`;

export const WrapperDropList = styled.div`
  margin-top: 12px;
  min-width: 240px;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 301;

  @media (max-width: 980px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin: 0;
  }
`;

export const DropListContent = styled.div`
  border-radius: 18.5px;
  background: #000;
  width: 100%;
  height: 100%;
  margin-top: 40px;
  overflow-y: auto;
  min-height: 150px;

  @media (min-width: 981px) {
    width: 650px;
    margin-top: 0px;
  }
`;

export const DropListClose = styled.button`
  display: flex;
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 0;
  background-color: #fff;
  border: none;
  border-radius: 100%;

  span {
    height: 16px;
    width: 16px;
    margin: 16px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxOScgaGVpZ2h0PScxOScgdmlld0JveD0nMCAwIDE5IDE5Jz48cGF0aCBkPSdNMiAybDE1IDE1bTAtMTVMMiAxNycgZmlsbD0nbm9uZScgc3Ryb2tlPScjMUQxRDFEJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycvPjwvc3ZnPg==);
    background-size: cover;
  }
`;
export const DropListOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 300;
`;

export const WrapperSuggestions = styled.div`
  padding: 15px 16px;
  margin: 0 0 10px;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
`;

export const SuggestionsHeader = styled.div`
  margin: 16px 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;

  span {
    color: hsla(0, 0%, 100%, 0.4);
    font-weight: 400;
    margin-left: 4px;
  }
`;
export const SuggestionsItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
  width: 100%;

  a {
    color: #fff;
    transition: all 0.3s;
    font-size: 14px;
    font-weight: 700;
    &:hover {
      color: hsla(0, 0%, 100%, 0.4);
    }
  }
`;

export const SuggestionsImage = styled.a`
	width: 36px;
	height: 47px;
	margin-right: 8px
	transition: opacity .3s;

	&:hover {
		opacity: 0.4;
	}

	span {
		background-image: url(${(props) => props.img});
		display: block;
		width: 100%;
		height: 100%;
		background-color: hsla(0,0%,100%,.05);
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 6px;
		cursor: pointer;
	}
`;
export const SuggestionsInfoPlatforms = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 3px;
  font-size: 14px;
`;
