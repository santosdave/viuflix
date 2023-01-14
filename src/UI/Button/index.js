import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss"


function Button(props) {
  const { link = false, url = "", children } = props;
  return (
    <>
      {link ? (
        <Link to={url} className={styles.button}>
          {children }
        </Link>
      ) : (
        <button className={styles.button}>
          {children}
        </button>
      )}
    </>
  )
}

export default Button