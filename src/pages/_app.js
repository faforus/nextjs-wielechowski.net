import React, { useState, useEffect, Fragment } from "react";
import "@/styles/globals.css";
import Head from "next/head";
import WelcomeModal from "@/components/WelcomeModal";
import { preloadAppImages } from "@/helpers/preloadAppImages";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loadedWelcome, setLoadedWelcome] = useState(false);

  useEffect(() => {
    preloadAppImages();
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setTimeout(() => {
        document.querySelector(".welcome").style.opacity = 0;
        setTimeout(() => {
          setLoadedWelcome(true);
        }, 400);
      }, 500);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="description"
          content="Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto"
        />
        <meta
          property="og:description"
          content="Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto"
        />
        <meta
          name="keywords"
          content="fotograf, fotografia, sesja biznesowa, sesja wizerunkowa, fotografia ślubna, reportaż, reportaż ślubny, wieczory panieńskie, chrzciny, fotografia komercyjna, b2b, gdynia, sopot, gdańsk, trójmiasto, pomorze, retouch, obróbka zdjęć"
        />
        <meta
          property="og:image"
          content="https://nextjs-wielechowski-net.vercel.app/images/fbogimage.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://nextjs-wielechowski-net.vercel.app/images/fbogimage.jpg"
        />
        <meta property="og:title" content="Filip Wielechowski Fotografia" />
        <meta property="og:url" content="https://wielechowski.net/" />
        <meta property="og:type" content="website" />

        <link rel="icon" type="image/png" href="/images/iconpng.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
      </Head>
      {!loadedWelcome && <WelcomeModal />}
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </Fragment>
  );
}
