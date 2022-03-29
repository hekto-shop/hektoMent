import styles from './CategoryBar.module.scss'

const CategoryBar = (props) => {
  const { category } = props;

  return <div className={styles['single-category']}>
      <div className={styles['category-description']}>
          <h2 className={styles['category-description__name']}>{category.category}</h2>
          <p className={styles['category-description__spent']}>$ {category.price}</p>
      </div>
  </div>;
};

export default CategoryBar;
