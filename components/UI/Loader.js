import React from "react";
import styled from "styled-components";

export const LoaderRing = styled.div`
   {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid hsla(280, 25%, 43%, 0.2);
    border-top-color: #765288;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    animation: spin 1s linear infinite;
    transform-origin: center;
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0);
    }

    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const Loader = () => {
  return <LoaderRing />;
};

export default Loader;
