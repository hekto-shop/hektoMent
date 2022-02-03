import styles from "./PageContainer.module.scss";

const PageContainer = (props) => {
  return (
    <div className={`${styles["page-container"]} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default PageContainer;
