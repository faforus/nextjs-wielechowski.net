import classes from "./Home.module.css";
import { Fragment } from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import webpSupported from "@/helpers/webpSupport";
import MotionContainer from "@/components/MotionContainer";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta
          property="description"
          content="Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto"
        />
        <meta
          property="og:description"
          content="Fotograf Trójmiasto - Studio / Portret / Reportaż Komercyjny / Reportaż Okolicznościowy / Śluby / Eventy / Sport / Trójmiasto"
        />
        <title>FW Fotografia</title>
      </Head>
      <MotionContainer>
        <div className={classes["img-container"]}>
          {windowWidth > 800 ? (
            <img
              className={classes.color}
              alt="+48 722 265 649 Fotograf, Gdynia, Sopot, Gdańsk, Trójmiasto"
              src="/images/color.png"
            />
          ) : (
            ""
          )}
          <img
            className={classes["img-top"]}
            alt="Filip Wielechowski Fotografia - Gdynia, Sopot, Gdańsk, Trójmiasto"
            src={
              windowWidth > 800
                ? webpSupported
                  ? "webpimages/top.webp"
                  : "images/top.jpg"
                : webpSupported
                ? "webpimages/topSmall.webp"
                : "images/topSmall.jpg"
            }
          />
          <div className={classes.stripe}>
            F<span className={classes.smaller}>ILIP&nbsp;</span> W
            <span className={classes.smaller}>IELECHOWSKI&nbsp;</span>F
            <span className={classes.smaller}>OTOGRAFIA</span>
          </div>
          <img
            className={classes["img-bottom"]}
            alt="Filip Wielechowski Fotografia - Gdynia, Sopot, Gdańsk, Trójmiasto"
            src={
              windowWidth > 800
                ? webpSupported
                  ? "webpimages/bottom.webp"
                  : "images/bottom.jpg"
                : webpSupported
                ? "webpimages/bottomSmall.webp"
                : "images/bottomSmall.jpg"
            }
          />
        </div>
      </MotionContainer>
    </Fragment>
  );
};

export default Home;
