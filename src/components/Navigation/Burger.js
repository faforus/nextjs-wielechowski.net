import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./Burger.module.css";
import { preloadNavImages } from "../../helpers/preloadNavigationImages";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Burger = () => {
  const router = useRouter();
  const [toggleBurger, setToggleBurger] = useState(false);
  const [isActiveB, setIsActiveB] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    if (toggleBurger && !isMobile) {
      document.documentElement.style.overflowY = "hidden";
      document.body.style.width = "calc(100% - 6px)";
    } else {
      document.documentElement.style.overflowY = "scroll";
      document.body.style.width = "100%";
    }
    if (toggleBurger && isMobile) {
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }
    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [toggleBurger]);

  const toggleBurgerMenuHandler = () => {
    setToggleBurger((prev) => !prev);
  };

  const scrollToTopAndClose = () => {
    toggleBurgerMenuHandler();
    scrollToTop();
  };

  return (
    <div className={classes["burger-overflow-hidden"]}>
      <div
        onClick={() => {
          toggleBurgerMenuHandler();
          preloadNavImages();
        }}
        className={`${classes.button} ${toggleBurger ? classes.move : ""}`}
      >
        <div className={classes["menu-icon"]}>
          <span className={toggleBurger ? `${classes["top-line"]}` : ""}></span>
          <span
            className={toggleBurger ? `${classes["middle-line"]}` : ""}
          ></span>
          <span
            className={toggleBurger ? `${classes["bottom-line"]}` : ""}
          ></span>
        </div>
      </div>
      <div
        className={`${classes.container} ${toggleBurger ? "" : classes.hidden}`}
      >
        <nav className={classes["burger-nav"]}>
          <ul className={classes["burger-ul"]}>
            <li>
              <Link
                className={router.pathname === "/" ? `${classes.activeB}` : ""}
                onClick={scrollToTopAndClose}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href=""
                className={
                  router.pathname.includes("/oferta")
                    ? `${classes.activeB}`
                    : ""
                }
              >
                Oferta
              </Link>
              <ul className={classes["dropdown-content"]}>
                <li>
                  <Link
                    className={
                      router.pathname === "/oferta/sesja-biznesowa"
                        ? `${classes.activeB}`
                        : ""
                    }
                    onClick={scrollToTopAndClose}
                    href="/oferta/sesja-biznesowa"
                  >
                    Sesja Biznesowa
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      router.pathname === "/oferta/sesja-wizerunkowa"
                        ? `${classes.activeB}`
                        : ""
                    }
                    onClick={scrollToTopAndClose}
                    href="/oferta/sesja-wizerunkowa"
                  >
                    Sesja Wizerunkowa
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      router.pathname === "/oferta/reportaz-slubny"
                        ? `${classes.activeB}`
                        : ""
                    }
                    onClick={scrollToTopAndClose}
                    href="/oferta/reportaz-slubny"
                  >
                    Reportaż Ślubny
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      router.pathname === "/oferta/reportaz-okolicznosciowy"
                        ? `${classes.activeB}`
                        : ""
                    }
                    onClick={scrollToTopAndClose}
                    href="/oferta/reportaz-okolicznosciowy"
                  >
                    Reportaż Okolicznościowy
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      router.pathname === "/oferta/reportaz-firmowy"
                        ? `${classes.activeB}`
                        : ""
                    }
                    onClick={scrollToTopAndClose}
                    href="/oferta/reportaz-firmowy"
                  >
                    Eventy Firmowe / Sportowe
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className={
                  router.pathname.includes("/galeria")
                    ? `${classes.activeB}`
                    : ""
                }
                onClick={scrollToTopAndClose}
                href="/galeria"
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.pathname === "/kontakt" ? `${classes.activeB}` : ""
                }
                onClick={scrollToTopAndClose}
                href="/kontakt"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Burger;
