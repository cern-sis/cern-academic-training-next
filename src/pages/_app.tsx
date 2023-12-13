import "antd/dist/reset.css";
import GlobalFonts from "../fonts/fonts";

import type { AppProps } from "next/app";
import { Layout } from "antd";
import CernToolBar from "@/components/cernToolbar";
import AT_HEADER from "@/components/AT_HEADER";
import { GlobalStateProvider } from "../contexts/homeContext";
import { StyledTopBar, StyledContent } from "@/components/StyledAppComponents";

const { Footer } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <>
        <GlobalFonts />
        <StyledTopBar>
          <GlobalFonts />
          <CernToolBar />
          <AT_HEADER />
        </StyledTopBar>
        <StyledContent>
          <Component {...pageProps} />
        </StyledContent>
        <Footer><div>is it?</div></Footer>
      </>
    </GlobalStateProvider>
  );
}
