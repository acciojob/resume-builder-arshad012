import React from "react";
import styles from '../pages/css/buttons.module.css';

const PageChangingButton = ({onclickFunc}) => {
    return (
        <div className={styles.page_buttons}>
            <button id="previous" className={styles.link_btn}>BACK</button>
            <button id="next" className={styles.normal_btn}>NEXT</button>
            <button type="submit" className={styles.normal_btn} onClick={onclickFunc}>SAVE AND CONTINUE</button>
        </div>
    )
}

export default PageChangingButton;