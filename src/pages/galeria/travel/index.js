import useGallery from "@/hooks/use-gallery";
import Gallery from "@/components/Gallery Large/Gallery";
import { Fragment } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";

const Travel = () => {
  const {
    modal,
    closeModal,
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
  } = useGallery("outdoors");

  return (
    <Fragment>
      <Head>
        <title>Galeria Travel - Podróże / Architektura / Przyroda</title>
      </Head>
      <Layout>
        <Gallery
          category={"Travel"}
          link="/galeria"
          modal={modal}
          closeModal={closeModal}
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

export default Travel;
