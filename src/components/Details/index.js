import React, { memo } from 'react'
import {
  POSTER_URL,
  BACKDROP_URL,
  POSTER_NOT_FOUND,
  BACKDROP_NOT_FOUND,
} from "../../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Rate from "rc-rate";

import useMatch from "../../hooks/useMatch";
import Loading from "../../UI/Loading";
import styles from "./styles.module.scss";
import RenderIf from "../../utils/renderIf";
import {
  arrayToString,
  dateFormat,
  moneyConverter,
  timeConverter,
} from "../../utils/helpers";

function Details({ details, loading }) {
  const {
    backdrop_path,
    poster_path,
    title,
    genres,
    overview,
    release_date,
    runtime,
    budget,
    revenue,
    vote_average,
    production_countries,
    production_companies,
    spoken_languages,
    status,
  } = details;
  const match = useMatch("(min-width: 1024px)");
  const poster = poster_path ? POSTER_URL + poster_path : POSTER_NOT_FOUND;
  const backdrop = backdrop_path
    ? BACKDROP_URL + backdrop_path
    : BACKDROP_NOT_FOUND;
  return (
    <Loading loading={loading} isFull>
      <div className={` ${styles.details_outer} fade_in`}>
        <div className={styles.backdrop}>
          <LazyLoadImage effect="blur" src={backdrop} alt={title} />
        </div>
        <RenderIf isTrue={match}>
          <div className={styles.poster}>
            <img src={poster} alt={title || "title"} />
          </div>
        </RenderIf>
      </div>
    </Loading>
  )
}

export default memo(Details)