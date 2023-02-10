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
  AiOutlineCalendar
} from "react-icons/ai";


import {BsGraphUp} from "react-icons/bs";

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
      <Link title='Genres' className={styles.link} to={"/genres"}>
        <AiOutlineAppstore color={activeLink("genres")} />
      </Link>
      <Link title='Upcoming' className={styles.link} to={"/upcoming"}>
        <AiOutlineCalendar color={activeLink("upcoming")} />
      </Link>
      <Link title='Trending' className={styles.link} to={"/trending"}>
        <BsGraphUp color={activeLink("trending")} />
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