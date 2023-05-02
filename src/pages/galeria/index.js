import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import classes from "./index.module.css";
import { CUSTOM_MOTION_PROPS } from "@/config/config";
import { CUSTOM_MOTION_PROPS_MOBILE_MAIN_GALLERY } from "@/config/config";
import { preloadGalImages } from "@/helpers/preloadGalleryImages";
import { Fragment } from "react";
import Layout from "@/layout/Layout";
import MotionContainer from "@/components/MotionContainer";

const scrollHandler = () => {
  window.scrollTo(0, 0);
};

const MainGallery = () => {
  const [windowWidth, setWindowWidth] = useState(801);

  useEffect(() => {
    preloadGalImages();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const motionProps =
    windowWidth > 1400
      ? { ...CUSTOM_MOTION_PROPS }
      : { ...CUSTOM_MOTION_PROPS_MOBILE_MAIN_GALLERY };

  return (
    <Fragment>
      <Head>
        <meta
          property="description"
          content="Galeria: Studio i Portret / Reportaż / Zwierzęta / Travel"
        />
        <meta
          property="og:description"
          content="Galeria: Studio i Portret / Reportaż / Zwierzęta / Travel"
        />
        <title>Galeria: Studio i Portret / Reportaż / Zwierzęta / Travel</title>
      </Head>
      <Layout>
        <MotionContainer>
          <div className={classes.gallery}>
            <Link onClick={scrollHandler} href="/galeria/studio-portret">
              <div className={`${classes.tab1} ${classes.tabs}`}>
                <button>STUDIO / PORTRET</button>
              </div>
            </Link>
            <Link onClick={scrollHandler} href="/galeria/reportaz">
              <div className={`${classes.tab2} ${classes.tabs}`}>
                <button>REPORTAŻ</button>
              </div>
            </Link>
            <Link onClick={scrollHandler} href="/galeria/zwierzeta">
              <div className={`${classes.tab4} ${classes.tabs}`}>
                <button>ZWIERZĘTA</button>
              </div>
            </Link>
            <Link onClick={scrollHandler} href="/galeria/travel">
              <div className={`${classes.tab3} ${classes.tabs}`}>
                <button>TRAVEL</button>
              </div>
            </Link>
          </div>
        </MotionContainer>
      </Layout>
    </Fragment>
  );
};

export default MainGallery;
