// import "@/styles/globals.css";
import "antd/dist/reset.css";
import GlobalFonts from '../fonts/fonts';


import type { AppProps } from "next/app";
import { Layout } from "antd";
import CernToolBar from "@/components/cernToolbar";
import { SearchField } from "@/components/searchField";
import { NavigationButtons } from "@/components/navigationButtons";
import AT_HEADER from "@/components/AT_HEADER";
import CERN_FOOTER from "@/components/CERN_FOOTER";
import styled from "styled-components";
// import '../global.css'

const { Header, Content } = Layout;

const StyledContent = styled(Content)`
  background: linear-gradient(160deg, #0b1117 0, #0033a0 100%) no-repeat
  padding-box;
  z-index: -2;
  position: relative;
  height: calc(100% - 80px);
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalFonts />
      <Header
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          zIndex: 1,
          padding: "0px 0px",
          height: "40px",
        }}
      >      <GlobalFonts />

        <CernToolBar />
        <AT_HEADER />
      </Header>
      <StyledContent style={{zIndex: 2, height: "calc(100vh - 40px)"}}>
        <Component {...pageProps} />
      </StyledContent>
      {/* <CERN_FOOTER /> */}
    </>
  );
}
