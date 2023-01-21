import React from 'react'
import styles from "./styles.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAppContext } from '../../context'

function FavoriteButton({ movie }) {
  const { favorites, handleToggleFavorite } = useAppContext();
  return (
    <span onClick={() => handleToggleFavorite(movie)} className={styles.icon}>
      {favorites.find((favMovie) => favMovie.id === movie.id) ? (
        <AiFillHeart />
      ) : (
        <AiOutlineHeart />
      )}
    </span>
  )
}

export default FavoriteButton