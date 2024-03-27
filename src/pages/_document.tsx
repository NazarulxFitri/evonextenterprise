import FooterModule from "@/modules/Footer";
import HeaderModule from "@/modules/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <HeaderModule />
        <Main />
        <FooterModule />
        <NextScript />
      </body>
    </Html>
  );
}
