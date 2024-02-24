"use client"

import { Main } from "./components/Main";
import { ContextProvider } from "./contexts/Context";

const Page = () => {
  return (
    <ContextProvider>
      <Main/>
    </ContextProvider>
  );
}

export default Page