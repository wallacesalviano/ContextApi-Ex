"use client"

import { Header } from "./components/Header";
import { LoggedUserProvider } from "./contexts/Context";

const Page = () => {
  return(
    <LoggedUserProvider>
      <Header />
    </LoggedUserProvider>
  );
}

export default Page