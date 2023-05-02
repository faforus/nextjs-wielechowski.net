import Layout from "@/layout/Layout";
import { Fragment } from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Title from "@/components/Title";
import classes from "../Offer.module.css";
import webpSupported from "@/helpers/webpSupport";
import VerticalMiniGallery from "../../../components/Gallery Mini Vertical/VerticalMiniGallery";
import { importAll } from "@/helpers/importall";
import MotionContainer from "@/components/MotionContainer";

const Image = () => {
  const [images, setImages] = useState([]);
  const [thumbnailImages, setThumbnailImages] = useState([]);
  const [mappedObjectImages, setMappedObjectsImages] = useState([]);

  useEffect(() => {
    let images;
    let thumbnailImages;

    if (webpSupported) {
      images = importAll(
        require.context(
          `../../../../public/webpimages/galleries/studio/image/`,
          true,
          /\.(webp)$/
        )
      );
      thumbnailImages = importAll(
        require.context(
          `../../../../public/webpimages/galleries/studio-thumbnails/image/`,
          true,
          /\.(webp)$/
        )
      );
    } else {
      images = importAll(
        require.context(
          `../../../../public/images/galleries/studio/image/`,
          true,
          /\.(jpe?g)$/
        )
      );
      thumbnailImages = importAll(
        require.context(
          `../../../../public/images/galleries/studio-thumbnails/image/`,
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
          content="Zdjęcia w plenerze lub w studiu. Idealne na media społecznościowe, stronę www lub do CV. Zdjęcia są poddawane profesjonalnemu retuszowi"
        />
        <meta
          property="og:description"
          content="Zdjęcia w plenerze lub w studiu. Idealne na media społecznościowe, stronę www lub do CV. Zdjęcia są poddawane profesjonalnemu retuszowi"
        />
        <title>Sesja Wizerunkowa - Portret / Sesja Wizerunkowa</title>
      </Head>
      <Layout>
        <MotionContainer>
          <div className={classes.wrapper}>
            <Title title="portret / sesja wizerunkowa" />
            <div className={classes.main}>
              <div className={classes["main-container"]}>
                <div className={classes["main-left"]}>
                  <p>Zdjęcia w plenerze lub w studiu.</p>
                  <p>Idealne na media społecznościowe, stronę www lub do CV</p>
                  <p>Zdjęcia są poddawane profesjonalnemu retuszowi*</p>
                  <p>Wysoka rozdzielczość zdjęć**</p>
                </div>
                <div className={classes["main-right"]}>
                  <VerticalMiniGallery images={mappedObjectImages} />
                </div>
              </div>
            </div>
            <div className={classes.squares}>
              <div className={classes.square}>
                <p>3 zdjęcia</p>
                <p>250 zł</p>
              </div>
              <div className={classes.square}>
                <p>5 zdjęć</p>
                <p>350 zł</p>
              </div>
              <div className={classes.square}>
                <p>7 zdjęć</p>
                <p>400 zł</p>
              </div>
              <div className={classes.square}>
                <p>8+ zdjęć</p>
                <p>do</p>
                <p>uzgodnienia</p>
              </div>
            </div>
            <div className={classes["additional-info"]}>
              <div className={classes["additional-info-container"]}>
                <p>
                  * podstawowy retusz to korekta cery, oczu, sylwetki oraz
                  lekkie wybielanie zębów. Na życzenie klienta można wykonać
                  bardziej zaawansowany retusz.
                </p>
                <p>
                  ** zdjęcia bez kadrowania są w rozdzielczości 8640 x 5760.
                </p>
              </div>
            </div>
          </div>
        </MotionContainer>
      </Layout>
    </Fragment>
  );
};

export default Image;
