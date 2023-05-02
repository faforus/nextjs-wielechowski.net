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

const CommercialReportage = () => {
  const [images, setImages] = useState([]);
  const [thumbnailImages, setThumbnailImages] = useState([]);
  const [mappedObjectImages, setMappedObjectsImages] = useState([]);

  useEffect(() => {
    let images;
    let thumbnailImages;

    if (webpSupported) {
      images = importAll(
        require.context(
          `../../../../public/webpimages/galleries/reportage/corporate/`,
          true,
          /\.(webp)$/
        )
      );
      thumbnailImages = importAll(
        require.context(
          `../../../../public/webpimages/galleries/reportage-thumbnails/corporate/`,
          true,
          /\.(webp)$/
        )
      );
    } else {
      images = importAll(
        require.context(
          `../../../../public/images/galleries/reportage/corporate/`,
          true,
          /\.(jpe?g)$/
        )
      );
      thumbnailImages = importAll(
        require.context(
          `../../../../public/images/galleries/reportage-thumbnails/corporate/`,
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
  }, [images]);

  return (
    <Fragment>
      <Head>
        <meta
          property="description"
          content="wszelkiego rodzaju reportaże / imprezy / eventy firmowe / jubileusze / konferencje / eventy sportowe / muzyczne / otwarcia nowych lokali"
        />
        <meta
          property="og:description"
          content="wszelkiego rodzaju reportaże / imprezy / eventy firmowe / jubileusze / konferencje / eventy sportowe / muzyczne / otwarcia nowych lokali"
        />
        <title>Eventy Firmowe / Sportowe - Reportaż</title>
      </Head>
      <Layout>
        <MotionContainer>
          <div className={classes.wrapper}>
            <Title title="Eventy Firmowe / Sportowe" />
            <div className={classes.main}>
              <div className={classes["main-container"]}>
                <div className={classes["main-left"]}>
                  <p>Między innymi:</p>
                  <p>wszelkiego rodzaju reportaże</p>
                  <p>imprezy / eventy firmowe</p>
                  <p>jubileusze / konferencje</p>
                  <p>eventy sportowe / muzyczne</p>
                  <p>otwarcia nowych lokali</p>
                </div>
                <div className={classes["main-right"]}>
                  <HorizontalMiniGallery images={mappedObjectImages} />
                </div>
              </div>
            </div>
            <div className={classes.price}>
              <p>
                Cena jest zależna od długości wydarzenia, lokalizacji, ilości
                zdjęć i rodzaju obróbki.
              </p>
            </div>
            <div className={classes.main}>
              <p className={classes["partners-txt"]}>Współpracowałem z</p>
            </div>
            <div className={classes.partners}>
              <img src="/images/partners/emporium.png" alt="emporium" />
              <img src="/images/partners/fedex.png" alt="fedex" />
              <img src="/images/partners/hebe.png" alt="hebe" />
              <img src="/images/partners/hevelianum.png" alt="hevelianum" />
              <img src="/images/partners/pepsico.png" alt="pepsico" />
              <img src="/images/partners/png.png" alt="png" />
              <img src="/images/partners/pomerania.png" alt="pomerania" />
              <img src="/images/partners/zabka.png" alt="zabka" />
              <img src="/images/partners/arrow.png" alt="arrow" />
            </div>
          </div>
        </MotionContainer>
      </Layout>
    </Fragment>
  );
};

export default CommercialReportage;
