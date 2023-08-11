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

const { Header, Content } = Layout;

const StyledContent = styled(Content)`
  background: linear-gradient(160deg, #0b1117 0, #0033a0 100%) no-repeat
  padding-box;
  z-index: -2;
  position: relative;
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalFonts />
      <Header
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          zIndex: 1,
          padding: "0px 0px",
        }}
      >
        <CernToolBar />
        <AT_HEADER />
      </Header>
      <StyledContent style={{paddingBottom: 40, zIndex: 2}}>
        <Component {...pageProps} />
      </StyledContent>
      <CERN_FOOTER />
    </div>
  );
}
