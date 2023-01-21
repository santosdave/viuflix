import React from 'react'
import { useAppContext } from '../../context';
import styles from "./styles.module.scss";
function Switch({colorOne, colorTwo }) {
    const { movieView, handleToggleSwitch } = useAppContext();
    return (
        <div className={styles.switch_container}>
            <input
                checked={movieView}
                onChange={handleToggleSwitch}
                type="checkbox"
                className={styles.switch_checkbox}
                id={`movie_switch`}
            />
            <label
            styles={{background: movieView ? colorOne: colorTwo}}
            className={styles.switch_label}
            htmlFor={`movie_switch`}
            >
                <span className={styles.switch_button}>
                    <span className={styles.switch_text}>
                    {movieView ? 'Series' : 'Movies'}
                    </span>
                </span>
            </label>
        </div>
    )
}

export default Switch