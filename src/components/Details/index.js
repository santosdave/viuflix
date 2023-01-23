import React, { memo, useEffect, useState } from 'react'
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
import { useAppContext } from '../../context';
import {
  arrayToString,
  dateFormat,
  moneyConverter,
  timeConverter,
} from "../../utils/helpers";

function Details({ details, loading }) {
  const { movieView } = useAppContext();

  const {
    backdrop_path,
    poster_path,
    genres,
    overview,
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
      {movieView ? (
        <div className={`${styles.details_outer} fade_in`}>
          <div className={styles.backdrop}>
            <LazyLoadImage effect="blur" src={backdrop} alt={details?.name} />
          </div>
          <RenderIf isTrue={match}>
            <div className={styles.poster}>
              <img src={poster} alt={details?.name || "title"} />
            </div>
          </RenderIf>
          <div className={styles.details_inner}>
            <div className={styles.title_wrapper}>
              <div className={styles.title}>
                {details?.name || "title"}
              </div>
            </div>
            <div className={styles.genres}>
              {arrayToString(genres)}
            </div>
            <RenderIf isTrue={vote_average !== 0}>
              <div>
                <Rate
                  value={vote_average / 2}
                  count={5}
                  disabled={true}
                  allowHalf={true}
                />
              </div>
            </RenderIf>
            <div className={styles.overview}>
              {overview}
            </div>
            <div className={styles.info}>
              <div className={styles.info_item}>
                <h4>Status:</h4>
                <p>{status}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Languages</h4>
                <p>{arrayToString(spoken_languages)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Country:</h4>
                <p>{arrayToString(production_countries)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Air Date:</h4>
                <p>{dateFormat(details?.first_air_date)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Ep. Runtime:</h4>
                <p>{timeConverter(details?.episode_run_time)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>No. Of Seasons</h4>
                <p>{details?.number_of_seasons}</p>
              </div>
              <div className={styles.info_item}>
                <h4>No. Of Episodes:</h4>
                <p>{details?.number_of_episodes}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Production:</h4>
                <p>{arrayToString(production_companies)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Network:</h4>
                <p>{arrayToString(details?.networks)}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.details_outer} fade_in`}>
          <div className={styles.backdrop}>
            <LazyLoadImage effect="blur" src={backdrop} alt={details?.title} />
          </div>
          <RenderIf isTrue={match}>
            <div className={styles.poster}>
              <img src={poster} alt={details?.title || "title"} />
            </div>
          </RenderIf>
          <div className={styles.details_inner}>
            <div className={styles.title_wrapper}>
              <div className={styles.title}>
                {details?.title || "title"}
              </div>
            </div>
            <div className={styles.genres}>
              {arrayToString(genres)}
            </div>
            <RenderIf isTrue={vote_average !== 0}>
              <div>
                <Rate
                  value={vote_average / 2}
                  count={5}
                  disabled={true}
                  allowHalf={true}
                />
              </div>
            </RenderIf>
            <div className={styles.overview}>
              {overview}
            </div>
            <div className={styles.info}>
              <div className={styles.info_item}>
                <h4>Status:</h4>
                <p>{status}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Languages</h4>
                <p>{arrayToString(spoken_languages)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Country:</h4>
                <p>{arrayToString(production_countries)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Release:</h4>
                <p>{dateFormat(details?.release_date)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Runtime:</h4>
                <p>{timeConverter(details?.runtime)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Budget:</h4>
                <p>{moneyConverter(details?.budget)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Revenue:</h4>
                <p>{moneyConverter(details?.revenue)}</p>
              </div>
              <div className={styles.info_item}>
                <h4>Production:</h4>
                <p>{arrayToString(production_companies)}</p>
              </div>
            </div>
          </div>
        </div>
      )};
    </Loading >
  )


}

export default memo(Details)