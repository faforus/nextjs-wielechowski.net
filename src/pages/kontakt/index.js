import Layout from "@/layout/Layout";
import Head from "next/head";
import classes from "./index.module.css";
import ContactForm from "@/components/ContactForm";
import { Fragment } from "react";
import MotionContainer from "@/components/MotionContainer";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <meta
          property="description"
          content="Kontakt: +48 722 265 649 / info@wielechowski.net"
        />
        <meta
          property="og:description"
          content="Kontakt: +48 722 265 649 / info@wielechowski.net"
        />
        <title>Kontakt: +48 722 265 649 / info@wielechowski.net</title>
      </Head>
      <Layout>
        <MotionContainer>
          <div className={classes["contact-container"]}>
            <div className={classes["contact-image"]}></div>
            <div className={classes["contact-form-container"]}>
              <div className={classes["contact-form"]}>
                <ContactForm />
              </div>
              <div className={classes["contact-info-container"]}>
                <div className={classes["contact-info"]}>
                  <p>
                    <a href="tel:+48722265649">+48 722 265 649</a>
                  </p>
                  <p>
                    <a href="mailto:info@wielechowski.net">
                      info@wielechowski.net
                    </a>
                  </p>
                  <p>Filip Wielechowski Fotografia - Trójmiasto</p>
                </div>
              </div>
            </div>
          </div>
        </MotionContainer>
      </Layout>
    </Fragment>
  );
};

export default Contact;
