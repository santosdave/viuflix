import React from 'react'


import styles from "./styles.module.scss";

function EmptyMessage({msg, isHalf}) {
  return (
    <div className={`${styles.empty_message} ${isHalf ? styles.half_height : ''} fade_in`}>
      {msg}
    </div>
  )
}

export default EmptyMessage