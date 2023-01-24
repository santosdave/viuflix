import React, { useEffect, useState } from 'react'

import { FaUserCircle } from "react-icons/fa";
import styles from "./styles.module.scss";
import EmptyMessage from "../EmptyMessage";
import ReadMore from "../../UI/ReadMore";
import Loading from "../../UI/Loading";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../utils/constants";
import { dateFormat } from "../../utils/helpers";
import { useAppContext } from '../../context';
function Reviews({ id }) {
  const { movieView } = useAppContext();
  const [url, setUrl] = useState();
  useEffect(() => {
    if (movieView) {
      setUrl(`tv/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    } else {
      setUrl(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    }
  }, [setUrl]);

  const { data, isLoading } = useFetch(url);
  const isReviews = data.results?.length;
  return (
    <Loading loading={isLoading} isFull>
      {isReviews ? (
        <div className={`${styles.reviews_outer} fade_in`}>
          <div className={styles.reviews_inner}>
            {data.results?.map((review) => {
              const { id, author, created_at, content } = review;
              return (
                <div key={id} className={styles.review}>
                  <div className={styles.author}>
                    <FaUserCircle />
                    <div className={styles.info}>
                      <h4>{author}</h4>
                      <p>{dateFormat(created_at)}</p>
                    </div>
                  </div>
                  <ReadMore text={content} limit={400} />
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <EmptyMessage msg="No reviews" isHalf />
      )}
    </Loading>
  )
}

export default Reviews