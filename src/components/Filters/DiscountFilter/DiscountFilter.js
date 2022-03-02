import { Slider } from "@mui/material";
import { sliderMarks } from "../../../constants/sliderMarks";

const DiscountFilter = (props) => {
  const { styles, handleDiscount } = props;

  return (
    <div className={styles["discount-filter"]}>
      <h2>Discount Offer</h2>
      <div className={styles["discount-items"]}>
        <div className={styles["discount-items__slider"]}>
          <p>Active (Dragging)</p>
          <Slider
            size="small"
            defaultValue={0}
            ariaLabel="small"
            valueLabelDisplay="auto"
            marks={sliderMarks}
            onChange={(e) => handleDiscount(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountFilter;
