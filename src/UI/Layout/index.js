import React, { useEffect } from "react";
import styles from "./styles.module.scss";

function Layout({ children, title }) {
  useEffect(() => {
    document.title = `MovieApp | ${title ? title : "Loading"}`;
  }, [title]);
  return (
    <div className={styles.layout}>{children}</div>
  )
}
export default Layout