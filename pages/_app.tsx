// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import {FC} from "react";
import type {AppProps} from "next/app";
import Head from "next/head";
import {appWithTranslation, useTranslation} from "next-i18next";
import useTranslationsHMR from "hooks/useTranslationsHMR";

/**
 * Global CSS must be in _app.tsx.
 * https://nextjs.org/docs/messages/css-global
 */

import "../styles/globals.css";

import Layout from "../components/Layout";

// i18n
import config from "../next-i18next.config";

const Body: FC<AppProps> = (props) => {
  return <Layout {...props} />;
};

const App: FC<AppProps> = (props) => {
  useTranslationsHMR();

  const {t} = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("meta.titleFull")}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={t("meta.titleFull")} />
        <meta property="og:description" content={t("meta.description")} />
        {/* <meta property="og:image" content="https://i.imgur.com/avQP3n2.jpg" /> */}
        <meta property="og:url" content="https://brandonstryker.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Body {...props} />
    </>
  );
};

export default appWithTranslation(App, config);
