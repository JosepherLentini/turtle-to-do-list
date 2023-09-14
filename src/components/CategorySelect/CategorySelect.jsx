import styles from "./CategorySelect.module.scss";
import { categories } from "../../../categories";
const CategorySelect = ({
  categorySelect,
  setCategorySelect,
  toggleSelect,
  setToggleSelect,
}) => {
  const getCategoryName = (obj) => {
    setCategorySelect(obj.name);
    setToggleSelect(false);
  };

  const openCategoryList = () => {
    setToggleSelect(!toggleSelect);
  };
  return (
    <div
      className={styles.CategorySelect}
      onClick={() => openCategoryList()}
     
    >
      <p className={styles.categoryPlaceholder}>{categorySelect}</p>
      {toggleSelect && (
        <ul
          className={`${styles.categoryList} ${
            toggleSelect && styles.categoryList
          }`}
          
        >
          {categories.map((category) => (
            <li key={category.id} onClick={() => getCategoryName(category)}>
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategorySelect;
