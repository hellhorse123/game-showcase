import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PageArt = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
`;
export const WrapperArt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  min-height: 100%;
`;

export const Art = styled.div`
  height: 500px;
  background-color: transparent;
  background: no-repeat top;
  background-image: linear-gradient(
      to bottom,
      rgba(15, 15, 15, 0),
      rgb(21, 21, 21)
    ),
    linear-gradient(to bottom, rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),
    url(${(props) => props.art});
  background-size: cover;
  z-index: 1;
  width: 100%;
  max-height: 100%;
`;

export const WrapperGame = styled.div`
  padding: 50px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 40px;

  > div:first-child {
    flex: 1 1 auto;
  }

  > div:last-child {
    flex: 0 0 auto;
    margin-left: 48px;
    width: 384px;
  }

  @media (max-width: 1100px) {
    gap: 10px;
  }

  @media (max-width: 980px) {
    flex-direction: column;
    max-width: 500px;

    > div:last-child {
      margin-left: 0;
    }
  }
`;

export const GameMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  font-size: 13px;
  line-height: normal;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  justify-content: center;

  @media (min-width: 981px) {
    justify-content: start;
  }
`;

export const GameMetaDate = styled.div`
  padding: 2px 7.5px;
  color: #000;
  background-color: #fff;
  border-radius: 4px;
`;

export const GameMetaPlatforms = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const GameTitle = styled.h1`
  font-size: 62px;
  font-weight: 700;
  text-transform: capitalize;
  margin: 5px 0 25px;
  text-align: center;

  @media (min-width: 981px) {
    font-size: 72px;
    text-align: start;
  }
`;

export const GameRatingChart = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  h3 {
    font-size: 38px;
    font-weight: 700;
    margin: 0 0 10px;
    text-align: center;
  }
  @media (min-width: 981px) {
    div {
      justify-content: start;
    }
    h3 {
      text-align: start;
    }
  }

  span {
    font-size: 25px;
    font-weight: 700;
    text-transform: capitalize;
  }

  span:not(:last-child) {
    border-right: 1px solid hsla(0, 0%, 100%, 0.2);
    padding-right: 10px;
  }
`;

export const GameRatingStats = styled.div``;

export const GameRatingIcon = styled.span`
  ${(props) =>
    props.color == "exceptional"
      ? `
        background-image: linear-gradient(180deg,#b4ec51,#429321);
    `
      : props.color == "recommended"
      ? `
        background-image: linear-gradient(0deg,#4354b9,#649bff);
    `
      : props.color == "skip"
      ? `
        background-image: linear-gradient(180deg,#ff5764,#f11a2a);
    `
      : `
        background-image: linear-gradient(180deg,#fad961,#f76b1c);
    `}
`;

export const GameRatingStatsInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 32px;
    cursor: default;
    box-shadow: 0 0 0 2px transparent;
    padding: 0 10px;
    margin-left: -10px;
    border-radius: 24.5px;

    span:first-child {
      border-radius: 50%;
      height: 10px;
      width: 10px;
    }

    p {
      font-size: 15px;
    }

    p:nth-child(2) {
      color: #fff;
      font-weight: 700;
      text-transform: capitalize;
    }

    p:last-child {
      color: hsla(0, 0%, 100%, 0.4);
    }
  }
`;

export const GameRatingDistributionStat = styled.div`
  display: flex;
  margin-top: 20px;
  span {
    height: 50px;
    cursor: default;
  }

  span:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  span:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
export const GameAbout = styled.div`
  margin-top: 20px;
  h4 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 0;
  }
  p {
    font-size: 17px;
    line-height: 22px;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
  }

  div:last-child {
    display: inline-block;
    height: 16px;
    padding: 0 5px 1px;
    color: #000;
    background-color: #fff;
    font-size: 13px;
    border-radius: 2px;
  }
  button:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const GameInfo = styled.div`
  > div:first-child {
    display: grid;
    grid-template-columns: auto auto;
    gap: 16px;
    margin-top: 30px;
    text-transform: capitalize;
  }

  > :only-child {
    grid-column: 1/-1;
  }

  div {
    font-size: 17px;
  }

  > div span {
    display: block;
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 500;
    color: hsla(0, 0%, 100%, 0.2);
  }

  > div:not(:first-child) {
    margin-top: 16px;
  }

  > div:not(:first-child) div {
    margin-top: 10px;
    line-height: 22px;
  }
`;

export const GameGallery = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  margin: auto;
  overflow-x: auto;

  div {
    position: relative;
    width: 184px;
    height: 102px;
    border-radius: 6px;
    background: hsla(0, 0%, 100%, 0.05);
    cursor: pointer;
    overflow: hidden;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: all 0.3s;
    color: hsla(0, 0%, 100%, 0.3);
  }

  div:last-child span {
    font-size: 11px;
  }

  div:last-child span:first-child {
    font-size: 48px;
    margin-top: -20px;
    margin-bottom: -5px;
  }

  @media (max-width: 980px) {
    flex-direction: column;
    grid-template-columns: auto auto auto;
    margin-bottom: 20px;
    max-width: 500px;
  }

  @media (max-width: 630px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media (max-width: 407px) {
    justify-content: center;
  }
`;

export const GameAvailability = styled.div`
  margin-top: 32px;
  font-size: 18px;

  > div:first-child {
    color: hsla(0, 0%, 100%, 0.4);
  }

  > div:not(:first-child) {
    grid-template-columns: auto;
  }

  @media (min-width: 408px) {
    > div:not(:first-child) {
      display: grid;
      grid-template-columns: auto auto;
      gap: 10px;
      margin-top: 16px;
    }
  }

  > div:not(:first-child) span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 184px;
    height: 40px;
    margin-bottom: 5px;
    color: hsla(0, 0%, 100%, 0.5);
    border-radius: 6px;
    background-color: hsla(0, 0%, 100%, 0.1);
    transition: all 0.3s;
    cursor: default;
  }

  > div:not(:first-child) span:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;
