import styles from "./GetInTouch.module.scss";
import { useState } from "react";

const GetInTouch = () => { 
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.name);
    }

    return(
    <div>
        <div className={styles["get-in-touch-title"]}>Get In Touch</div>
        <div className={styles["get-in-touch-text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</div>
        <form onSubmit={handleSubmit}>
            <div>
                <span >
                    <input 
                        className={styles["form"]}
                        id={styles["form-name"]}
                        type="text" 
                        name="name"
                        value={inputs.name}
                        placeholder="Your Name*"
                        onChange={handleChange}
                        required
                    />
                </span>
                <span>
                    <input 
                        className={styles["form"]}
                        id={styles["form-email"]}
                        type="text" 
                        name="email"
                        value={inputs.email}
                        placeholder="Your Email"
                        onChange={handleChange}
                    />
                </span>
            </div>
            <div>
                <input 
                    className={styles["form"]}
                    id={styles["form-subject"]}
                    type="text" 
                    name="Subject"
                    value={inputs.subject}
                    placeholder="Subject*"
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <textarea 
                    className={styles["form"]}
                    id={styles["form-message"]}
                    type="text" 
                    name="Message"
                    value={inputs.message}
                    placeholder="Type Your Message*"
                    onChange={handleChange}
                    required
                />
            </div>
            <input className={styles["form-submit"]} type="submit" value="Send Mail" />
        </form>
    </div>)
};

export default GetInTouch;