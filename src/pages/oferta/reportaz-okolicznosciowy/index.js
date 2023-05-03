import Layout from "@/layout/Layout";
import { Fragment } from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Title from "@/components/Title";
import classes from "../Offer.module.css";
import webpSupported from "@/helpers/webpSupport";
import HorizontalMiniGallery from "../../../components/Gallery Mini Horizontal/HorizontalMiniGallery";
import { importAll } from "@/helpers/importall";
import MotionContainer from "@/components/MotionContainer";

const NonCommercialReportage = () => {
  const [images, setImages] = useState([]);
  const [thumbnailImages, setThumbnailImages] = useState([]);
  const [mappedObjectImages, setMappedObjectsImages] = useState([]);

  useEffect(() => {
    let images;
    let thumbnailImages;

    if (webpSupported) {
      images = importAll(
        require.context(
          `../../../../public/webpimages/galleries/reportage/noncorporate/`,
          true,
          /\.(webp)$/
        )
      );
      thumbnailImages = importAll(
        require.context(
          `../../../../public/webpimages/galleries/reportage-thumbnails/noncorporate/`,
          true,
          /\.(webp)$/
        )
      );
    } else {
      images = importAll(
        require.context(
          `../../../../public/images/galleries/reportage/noncorporate/`,
          true,
          /\.(jpe?g)$/
        )
      );
      thumbnailImages = importAll(
        require.context(
          `../../../../public/images/galleries/reportage-thumbnails/noncorporate/`,
          true,
          /\.(jpe?g)$/
        )
      );
    }

    setImages(images);
    setThumbnailImages(thumbnailImages);
  }, []);

  useEffect(() => {
    const mappedObjectImages = images.map((img, index) => {
      return { id: index + 1, src: thumbnailImages[index], largeImage: img };
    });
    setMappedObjectsImages(mappedObjectImages);
  }, [images, thumbnailImages]);

  return (
    <Fragment>
      <Head>
        <meta
          property="description"
          content="wieczory panieńskie / kawalerskie / chrzciny / pierwsza komunia / zaręczyny / urodziny / imieniny"
        />
        <meta
          property="og:description"
          content="wieczory panieńskie / kawalerskie / chrzciny / pierwsza komunia / zaręczyny / urodziny / imieniny"
        />
        <title>
          Reportaż Okolicznościowy - Wieczory Panieńskie / Kawalerskie /
          Chrzciny / Urodziny / ...
        </title>
      </Head>
      <Layout>
        <MotionContainer>
          <div className={classes.wrapper}>
            <Title title="Reportaż Okolicznościowy" />
            <div className={classes.main}>
              <div className={classes["main-container"]}>
                <div className={classes["main-left"]}>
                  <p>Między innymi:</p>
                  <p>wieczory panieńskie / kawalerskie</p>
                  <p>chrzciny / pierwsza komunia</p>
                  <p>zaręczyny</p>
                  <p>urodziny / imieniny</p>
                </div>
                <div className={classes["main-right"]}>
                  <HorizontalMiniGallery images={mappedObjectImages} />
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <p>Ceny od:</p>
              <p className={classes["price-large"]}>
                500<span className={classes["price-currency"]}> zł</span>
              </p>
            </div>
            <div className={classes.main}>
              <p>
                Cena jest zależna od długości wydarzenia, lokalizacji, ilości
                zdjęć i rodzaju obróbki.
              </p>
            </div>
          </div>
        </MotionContainer>
      </Layout>
    </Fragment>
  );
};

export default NonCommercialReportage;
