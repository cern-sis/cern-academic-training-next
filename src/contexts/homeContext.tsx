import React, { createContext, useState, ReactElement } from "react";

export interface LeftSideStateProviderProps {
  children: ReactElement;
}

export const initialState: any = {
};

const store = createContext(initialState);
const { Provider } = store;

const GlobalStateProvider = ({ children }: LeftSideStateProviderProps) => {
  // const [frameHeight, setframeHeight] = useState(
  //   initialState.frameHeight
  // );

  return (
    <Provider
      value={{
        // frameHeight,
        // setframeHeight,
      }}
    >
      {children}
    </Provider>
  );
};

export { store, GlobalStateProvider };
