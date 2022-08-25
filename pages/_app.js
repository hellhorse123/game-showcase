import { ThemeProvider } from "styled-components";

import { GlobalStyle, AppWrapper } from "../components/styles/global.styled";

import Layout from "../components/Layout/Layout";

const theme = {};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Layout />

          <Component {...pageProps} />
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
