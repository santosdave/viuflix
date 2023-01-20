import React from 'react'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

import styles from "./styles.module.scss";


import Card from "../Card";
import FavoriteButton from "../../UI/FavoriteButton";
import RenderIf from "../../utils/renderIf";


const breakpoints = {
  640: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 5,
  },
  1440: {
    slidesPerView: 6,
  },
  1700: {
    slidesPerView: 7,
  },
};

function Carousel({ title, data, isCast, style }) {
  return (
    <div className={styles.carousel} style={style}>
      <RenderIf isTrue={title}>
        <div className={styles.title_wrapper}>
          <div className={styles.title}>{title}</div>
        </div>
      </RenderIf>
      <Swiper
        className='mySwiper'
        freemode={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={breakpoints}
        modules={[Navigation, FreeMode]}
      >
        {data?.map((card) => {
          const { id, title, poster_path, profile_path, name, character } =
            card;
          const path = isCast ? profile_path : poster_path;
          const link = isCast ? `/person/${id}` : `/movie/${id}`;
          return (
            <SwiperSlide key={id}>
              <div className={styles.carousel_card}>
              <Link to={link}>
                <Card path={path} alt={title}/>
              </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default Carousel