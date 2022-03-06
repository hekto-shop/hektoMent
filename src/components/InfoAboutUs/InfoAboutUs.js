import styles from "./InfoAboutUs.module.scss";

const InfoAboutUs = () => {
    return( 
        <div>
        <div className={styles["info-title"]}>Information About us</div>
        <div className={styles["info-text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Mattis neque ultrices mattis aliquam, malesuada diam est. 
                                            Malesuada sem tristique amet erat vitae eget dolor lobortis. 
                                            Accumsan faucibus vitae lobortis quis bibendum quam.</div>
        <span className={styles["dot"]} id={styles["purple"]}></span>
        <span className={styles["dot"]} id={styles["pink"]}></span>
        <span className={styles["dot"]} id={styles["blue"]}></span>
        </div>);
};

export default InfoAboutUs;