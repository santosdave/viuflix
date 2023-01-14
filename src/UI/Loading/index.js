import React from 'react'

import styles from "./styles.module.scss";
import clsx from "clsx"

function Loading({ loading = true, children, isFull = false, style }) {
  return (
    <>
      {loading ? (
        <div
        className={clsx(styles.loader_wrapper)}
        style={style}
        >
          <div className={styles.loader}></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default Loading