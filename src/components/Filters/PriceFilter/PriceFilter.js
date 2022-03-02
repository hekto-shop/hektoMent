const PriceFilter = (props) => {
  const { styles, handlePrice } = props;

  return (
    <div className={styles["price-filter"]}>
      <h2>Price Filter</h2>
      <div className={styles["price-items"]}>
        <span>
          <input
            type="checkbox"
            id="price1"
            min="0"
            max="150"
            onChange={(e) => handlePrice(e)}
          />
          <label htmlFor="price1">$0.00 - $150.00</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="price2"
            min="150"
            max="350"
            onChange={(e) => handlePrice(e)}
          />
          <label htmlFor="price2">$150.00 - $350.00</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="price3"
            min="150"
            max="504"
            onChange={(e) => handlePrice(e)}
          />
          <label htmlFor="price3">$150.00 - $504.00</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="price4"
            min="450"
            onChange={(e) => handlePrice(e)}
          />
          <label htmlFor="price4">$450.00 +</label>
        </span>
        <input
          type="text"
          className={styles["price-input"]}
          placeholder="Price Range e.g 1 - 100"
          onChange={(e) => handlePrice(e)}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
