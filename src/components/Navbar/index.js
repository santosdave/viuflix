import React from 'react'
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import {
  AiOutlineAppstore,
  AiOutlineFire,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";

function Navbar() {

  const location = useLocation();

  const pathname = location.pathname === "/" ? location.pathname : location.pathname.slice(1, location.pathname.length);

  const activeLink = (link) => {
    switch (pathname) {
      case link: {
        return "#1976d2";
      }
      default:
        return "#fff";
    }
  };
  return (
    <div className={styles.navbar}>
      <Link title='Home' className={styles.link} to={"/"}>
        <AiOutlineHome color={pathname === "/" ? "#1976d2" : "#fff"} />
      </Link>
      <button title='Search' className={styles.link}>
        <AiOutlineSearch color={activeLink("search")} />
      </button>
      <Link title='Genres' className={styles.link} to={"/genre"}>
        <AiOutlineAppstore color={activeLink("genre")} />
      </Link>
      <Link title='Popular' className={styles.link} to={"/popular"}>
        <AiOutlineFire color={activeLink("popular")} />
      </Link>
      <Link title='Top rated' className={styles.link} to={"/top_rated"}>
        <AiOutlineStar color={activeLink('top_rated')} />
      </Link>
      <Link title='Favorite' className={styles.link} to={"/favorite"}>
        <AiOutlineHeart color={activeLink('favorite')} />
      </Link>
    </div>
  )
}

export default Navbar