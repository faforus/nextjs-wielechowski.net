import Link from "next/link";
import classes from "./Gallery.module.css";
import Spinner from "../Spinner";
import Title from "../Title";
import Modal from "../Modal";
import { Fragment } from "react";
import MotionContainer from "../MotionContainer";

function Gallery(props) {
  return (
    <Fragment>
      <Modal
        modal={props.modal}
        setModal={props.setModal}
        closeModal={props.closeModal}
        tempImgSrc={props.tempImgSrc}
        setTempImgSrc={props.setTempImgSrc}
        largeImgIsLoading={props.largeImgIsLoading}
        handleLargeImageLoad={props.handleLargeImageLoad}
        handlePrevClick={props.handlePrevClick}
        handleNextClick={props.handleNextClick}
      />
      <MotionContainer>
        <div className={classes.wrapper}>
          <Title title={props.category} />
          {props.isLoading && <Spinner />}
          <div
            style={{ display: props.isLoading ? "none" : "block" }}
            className={classes.container}
          >
            {props.mappedImgs}
            {props.mappedUnsortedImgs}
          </div>
          <div className={classes["button-container"]}>
            {props.link === "empty" ? (
              ""
            ) : (
              <Link href={props.link}>
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  ‹‹‹
                </button>
              </Link>
            )}
          </div>
        </div>
      </MotionContainer>
    </Fragment>
  );
}

export default Gallery;
