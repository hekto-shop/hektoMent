import { Rating } from "@mui/material";

const RaitingFilter = (props) => {
  const { styles, handleRaiting } = props;

  const raitingArr = [];

  for (let i = 5; i >= 1; i--) {
    const raiting = (
      <span>
        <input type="checkbox" value={i} onChange={(e) => handleRaiting(e)} />
        <Rating defaultValue={i} size="small" readOnly />
      </span>
    );

    raitingArr.push(raiting);
  }

  return (
    <div className={styles["raiting-filter"]}>
      <h2>Rating Item</h2>
      <div className={styles["raiting-items"]}>{raitingArr}</div>
    </div>
  );
};

export default RaitingFilter;
