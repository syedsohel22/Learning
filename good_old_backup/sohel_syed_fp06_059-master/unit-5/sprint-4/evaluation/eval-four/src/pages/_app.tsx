import "@/styles/globals.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return;
  <ChakraProvider>
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  </ChakraProvider>;
}
