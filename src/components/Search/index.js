import React from 'react'
import clsx from "clsx"

import styles from "./styles.module.scss"

function Search() {
  return (
    <div className={clsx(styles.search)}>
      <form className={clsx(styles.form)}>
          <input
          type='text'
          placeholder='Search'
          />
      </form>
    </div>
  )
}

export default Search