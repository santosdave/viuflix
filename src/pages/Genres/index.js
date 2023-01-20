import React, { useState } from 'react'
import Layout from '../../UI/Layout'
import Loading from '../../UI/Loading'
import useFetch from '../../hooks/useFetch';
import RenderIf from '../../utils/renderIf';
import { API_KEY } from '../../utils/constants';
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "./styles.module.scss";
import imagesList from "./images";

function Genres() {
  const { data, isLoading } = useFetch(`genre/movie/list?api_key=${API_KEY}&language=en-US`)
  const [visible, setVisible] = useState(false);
  return (
    <Layout title='Genres'>
      <Loading loading={isLoading} isFull>
        <div className={styles.genres_outer}>
          <div className={`${styles.genres_title} fade_in`}>Genres</div>
          <div className={styles.genres_inner}>
            {data.genres?.map((genre) => {
              const { id, name } = genre;
              return (
                <Link
                  to={`/genre/${id}/${name}`}
                  key={id}
                  className={styles.genres_link}
                >
                  <div className={styles.genres_image}>
                    <figure>
                      <picture>
                        <LazyLoadImage
                          src={imagesList[name]}
                          alt={name}
                          effect="blur"
                          afterLoad={() => setVisible(true)}
                        />
                      </picture>
                    </figure>
                    <RenderIf isTrue={visible}>
                      <div className={styles.genres_name}>{name}</div>
                    </RenderIf>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Loading>
    </Layout>
  )
}

export default Genres