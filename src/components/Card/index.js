import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./styles.module.scss";
import { POSTER_NOT_FOUND, POSTER_URL } from "../../utils/constants";


function Card({ path, alt }) {
  const src = path ? POSTER_URL + path : POSTER_NOT_FOUND;
  return (
    <figure className={styles.figure}>
      <picture className={styles.picture}>
        <LazyLoadImage
          effect="blur"
          src={src}
          alt={alt}
          wrapperClassName={styles.image}
        />
      </picture>
    </figure>
  )
}




export default memo(Card)