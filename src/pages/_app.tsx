// import "@/styles/globals.css";
import "antd/dist/reset.css";
import "@/components/CERN_FOOTER.css";
import "@/components/CERN_TOOLBAR.css";
import "@/components/LOADING_ICON.css";
import "@/components/SortMenu.css";
import "@/components/index.css";
import "@/styles/App.css";
import "@/components/AT_HEADER.css";

import type { AppProps } from "next/app";
import { Layout } from "antd";
import CernToolBar from "@/components/cernToolbar";
import { SearchField } from "@/components/searchField";
import { NavigationButtons } from "@/components/navigationButtons";

export default function App({ Component, pageProps }: AppProps) {
  // if (typeof window !== "undefined") {
  //   window.onload = () => {
  //     document.getElementById("holderStyle").remove();
  //   };
  // }
  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 1,
          paddingRight: 15,
        }}
      >
        <CernToolBar />
        <div
          style={{
            justifyContent: "space-evenly",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "33%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            Cern Acadeic training
          </div>
          <SearchField />
          <NavigationButtons />
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
//