import useGallery from "@/hooks/use-gallery";
import Gallery from "@/components/Gallery Large/Gallery";
import { Fragment } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";

const Animals = () => {
  const {
    modal,
    largeImgIsLoading,
    tempImgSrc,
    handleLargeImageLoad,
    setModal,
    setTempImgSrc,
    isLoading,
    mappedImgs,
    mappedUnsortedImgs,
    handlePrevClick,
    handleNextClick,
  } = useGallery("animals");

  return (
    <Fragment>
      <Head>
        <title>FW Fotografia - Galeria Zwierzęta - Dzikie i Udomowione</title>
      </Head>
      <Layout>
        <Gallery
          category={"Zwierzęta"}
          link="/galeria"
          modal={modal}
          largeImgIsLoading={largeImgIsLoading}
          tempImgSrc={tempImgSrc}
          handleLargeImageLoad={handleLargeImageLoad}
          setModal={setModal}
          setTempImgSrc={setTempImgSrc}
          isLoading={isLoading}
          mappedImgs={mappedImgs}
          mappedUnsortedImgs={mappedUnsortedImgs}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      </Layout>
    </Fragment>
  );
};

export default Animals;
