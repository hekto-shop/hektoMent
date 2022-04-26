import React from 'react'

import styles from "./TextEditor.module.scss";

const TextEditor = () => {
  return (
    <div className={styles["main-container"]}>
        <div>
            <input className={styles["title"]} type="text" id="title" name="title" placeholder='Title'/>
           
        </div>
        <div>
            second
        </div>
    </div>
  )
}

export default TextEditor