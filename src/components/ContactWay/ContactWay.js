import styles from "./ContactWay.module.scss";

const ContactWay = () => {
    return(
        <div> 
            <div className={styles["contact-way-title"]}>Contact Way</div>
            <div className={styles["dot-container"]}> 
                <div> 
                    <span className={styles["contact-dot"]} id={styles["purple"]}></span>
                    <span>
                        <div className={styles["dot-text"]}>Tel: 877-67-88-99</div>
                        <div className={styles["dot-text"]}>E-Mail: shop@store.com</div>
                    </span>
                </div>
                <div> 
                    <span className={styles["contact-dot"]} id={styles["pink"]}></span>
                    <span>
                        <div className={styles["dot-text"]}>Support Forum</div>
                        <div className={styles["dot-text"]}>For over 24hr</div>
                    </span>
                </div>
                <div> 
                    <span className={styles["contact-dot"]} id={styles["orange"]}></span>
                    <span>
                        <div className={styles["dot-text"]}>20 Margaret st, London</div>
                        <div className={styles["dot-text"]}>Great britain, 3NM98-LK</div>
                    </span>
                </div>
                <div> 
                    <span className={styles["contact-dot"]} id={styles["green"]}></span>
                    <span >
                        <div className={styles["dot-text"]} >Free standard shipping</div>
                        <div className={styles["dot-text"]}>on all orders.</div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContactWay;