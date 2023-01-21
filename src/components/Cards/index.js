import React, { memo, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import RenderIf from '../../utils/renderIf';
import FavoriteButton from '../../UI/FavoriteButton';
import Card from '../Card';
import styles from "./styles.module.scss";
import Switch from '../../UI/Switch';
import { useAppContext } from '../../context';


function Cards({ title, data }) {
  const { movieView } = useAppContext();
  return (
    <div className={styles.cards_outer}>
      <RenderIf isTrue={title}>
        <div className={`${styles.cards_title} fade_in`}>
          <span className={styles.cards_text}>
          {title}
          </span>
          <Switch
            colorOne="#EF476F"
            colorTwo="#06D6A0"
          />
        </div>
      </RenderIf>
      <div className={styles.cards_inner}>
        {data?.map((card) => {
          const { id, poster_path, title } = card;
          return (
            <div key={id} className={styles.card}>
              <Link to={`/movie/${id}`}>
                <Card path={poster_path} alt={title} />
              </Link>
              <FavoriteButton movie={card} />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default memo(Cards)