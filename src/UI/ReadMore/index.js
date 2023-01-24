import React, { useState } from 'react'
import styles from "./styles.module.scss";

function ReadMore({ text, limit }) {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <div className={styles.text}>
      {text?.length <= limit ? (
        text
      ) : (
        <>
          {isReadMore ? text : `${text?.substring(0, limit)}...`}
          <button
            className={styles.button}
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "Read Less" : "Read More"}
          </button>
        </>
      )}
    </div>
  )
}

export default ReadMore