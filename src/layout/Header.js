import { useState, useEffect } from "react";
import Link from "next/link";
import classes from "./Header.module.css";
import Navbar from "../components/Navigation/Navbar";
import Burger from "@/components/Navigation/Burger";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(801);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={classes.header}>
      <Link href="/">
        <h1>Filip Wielechowski</h1>
      </Link>
      {windowWidth > 800 ? <Navbar /> : <Burger />}
    </header>
  );
};

export default Header;
