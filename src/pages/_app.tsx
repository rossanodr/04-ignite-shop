import Image from "next/image";
import type { AppProps } from "next/app";
import { Container, Header } from "@/styles/pages/app";
import { globalStyles } from "@/styles/global";

import logoImg from "../assets/logo.svg";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
