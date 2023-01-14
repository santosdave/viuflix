import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


import styles from "./styles.module.scss";


import Loading from "../../UI/Loading";
import Button from "../../UI/Button";
import useFetch from "../../hooks/useFetch";

import {
  BACKDROP_URL,
  BACKDROP_NOT_FOUND,
  API_KEY,
} from "../../utils/constants";


import RenderIf from "../../utils/renderIf";

function NowPlaying() {
  const url = `movie/now_playing?api_key=${API_KEY}&language=en-US`;
  const { data, isLoading } = useFetch(url);

  return (
    <Loading loading={isLoading}>
      <div className="fade_in">
        <div className={styles.nowPlaying_title}>Now Playing Movies</div>
        <Swiper
          className="mySwiper"
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >

          {data.results?.map((movie) => {
            const { id, title, overview, backdrop_path } = movie;
            const backdrop = backdrop_path
              ? BACKDROP_URL + backdrop_path
              : BACKDROP_NOT_FOUND;
            return (
              <SwiperSlide key={id}>
                <div className={styles.button_wrapper}>
                  <LazyLoadImage
                    src={backdrop}
                    effect="blur"
                    alt={title || "movie"}
                  />
                </div>
                <div className={styles.info_outer}>
                  <div className={styles.info_inner}>
                    <div className={styles.title}>{title}</div>
                    <RenderIf isTrue={overview}>
                      <div className={styles.overview}>{overview}</div>
                    </RenderIf>
                    <div className={styles.button_wrapper}>
                      <Button>
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Loading>

  )
}

export default NowPlaying