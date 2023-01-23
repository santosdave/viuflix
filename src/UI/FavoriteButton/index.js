import React from 'react'
import styles from "./styles.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAppContext } from '../../context'

function FavoriteButton({ movie }) {
  const { favorites, handleToggleFavorite, tvFavorites, handleToggleTvFavorite, movieView } = useAppContext();
  return (
    <div>
      {movieView ? (
        <span onClick={() => handleToggleTvFavorite(movie)} className={styles.icon}>
          {tvFavorites.find((favTv) => favTv.id === movie.id) ? (
            <AiFillHeart />
          ) : (
            <AiOutlineHeart />
          )}
        </span>
      ) : (
        <span onClick={() => handleToggleFavorite(movie)} className={styles.icon}>
          {favorites.find((favMovie) => favMovie.id === movie.id) ? (
            <AiFillHeart />
          ) : (
            <AiOutlineHeart />
          )}
        </span>
      )}
    </div>
  )
}
export default FavoriteButton