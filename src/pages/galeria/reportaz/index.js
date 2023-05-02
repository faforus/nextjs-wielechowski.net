import useGallery from "@/hooks/use-gallery";
import Gallery from "@/components/Gallery Large/Gallery";
import { Fragment } from "react";
import Head from "next/head";
import Layout from "@/layout/Layout";

const Reportage = () => {
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
  } = useGallery("reportage");

  return (
    <Fragment>
      <Head>
        <title>Galeria Reportaż - Okolicznościowy i Komercyjny</title>
      </Head>
      <Layout>
        <Gallery
          category={"Reportaż"}
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

export default Reportage;
