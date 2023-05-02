import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "./Navbar.module.css";
import { preloadNavImages } from "../../helpers/preloadNavigationImages";

const Navbar = () => {
  const router = useRouter();
  const dropdownRef = useRef();
  const [hovering, setHovering] = useState(false);

  const handleHover = () => {
    dropdownRef.current.style.opacity = 1;
    dropdownRef.current.style.transition = "none";
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  const handleClick = () => {
    dropdownRef.current.style.transition = "opacity 0.3s ease-in";
    dropdownRef.current.style.opacity = 0;
    setTimeout(() => {
      setHovering(false);
    }, 300);
  };

  return (
    <nav className={classes.navigation}>
      <ul onMouseOut={handleMouseOut} className={classes["menu-main"]}>
        <li>
          <Link
            className={router.pathname === "/" ? `${classes.active}` : ""}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className={classes.dropdown}>
          <Link
            onMouseOver={() => {
              handleHover();
              preloadNavImages();
            }}
            href="#"
            className={`${classes.arrow} ${
              router.pathname.includes("/oferta") ? `${classes.active}` : ""
            }`}
          >
            Oferta
          </Link>
          <ul
            ref={dropdownRef}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
            style={{
              display: hovering ? "block" : "none",
            }}
            className={classes["dropdown-content"]}
          >
            <li>
              <Link
                className={
                  router.pathname === "/oferta/sesja-biznesowa"
                    ? `${classes.active}`
                    : ""
                }
                onClick={handleClick}
                href="/oferta/sesja-biznesowa"
              >
                Sesja Biznesowa
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.pathname === "/oferta/sesja-wizerunkowa"
                    ? `${classes.active}`
                    : ""
                }
                onClick={handleClick}
                href="/oferta/sesja-wizerunkowa"
              >
                Sesja Wizerunkowa
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.pathname === "/oferta/reportaz-slubny"
                    ? `${classes.active}`
                    : ""
                }
                onClick={handleClick}
                href="/oferta/reportaz-slubny"
              >
                Reportaż Ślubny
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.pathname === "/oferta/reportaz-okolicznosciowy"
                    ? `${classes.active}`
                    : ""
                }
                onClick={handleClick}
                href="/oferta/reportaz-okolicznosciowy"
              >
                Reportaż Okolicznościowy
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.pathname === "/oferta/reportaz-firmowy"
                    ? `${classes.active}`
                    : ""
                }
                onClick={handleClick}
                href="/oferta/reportaz-firmowy"
              >
                <span className={classes["last-dropdown-item"]}>
                  Eventy Firmowe / Sportowe
                </span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            className={
              router.pathname.includes("/galeria") ? `${classes.active}` : ""
            }
            href="/galeria"
          >
            Galeria
          </Link>
        </li>
        <li>
          <Link
            className={
              router.pathname === "/kontakt" ? `${classes.active}` : ""
            }
            href="/kontakt"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
