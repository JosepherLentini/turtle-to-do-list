import { useReducer, useEffect } from "react";
import { MainContext, initialState } from "@/store";
import { mainReducer } from "@/store/redicuers";

import "@/styles/globals.scss";
import MainLayout from "@/layouts/MainLayout";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  
  
  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <MainLayout>
        <main className="Main">
          <Component {...pageProps} />
        </main>
      </MainLayout>
    </MainContext.Provider>
  );
}
