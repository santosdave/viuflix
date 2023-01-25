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
            <br/>
            <span className={styles.read_span}>
            {isReadMore ? "Read Less" : "Read More"}
            </span>
          </button>
        </>
      )}
    </div>
  )
}

export default ReadMore