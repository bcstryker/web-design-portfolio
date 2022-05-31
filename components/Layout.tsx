import {FC, useEffect} from "react";
import type {NextPage} from "next";
import type {AppProps} from "next/app";

// import NavbarMobile from "v2/components/NavbarMobile";
// import LeftNavbar from "v2/components/LeftNavbar";
// import TopNavbar from "v2/components/TopNavbar";
// import {store} from "v2/store";
// import UserFlowsAnimationsProvider from "v2/providers/UserFlowsAnimationsProvider";
// import Confetti from "v2/components/Confetti";
// import "react-toastify/dist/ReactToastify.css";

type Page<P = {}> = NextPage<P> & {
  PageTitle?: FC;
};

type Props = AppProps & {
  Component: Page;
};

const Layout: FC<Props> = ({Component, pageProps}) => {
  const PageTitle = Component.PageTitle ?? (() => <></>);

  return (
    <main className="sm:pl-64">
      <p>{PageTitle}</p>
      <div className="px-4 py-2 sm:px-10 sm:py-10 text-foreground">
        <Component {...pageProps} />
      </div>
    </main>
  );
};

export default Layout;
