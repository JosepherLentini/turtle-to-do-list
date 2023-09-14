//style
import styles from "./Categories.module.scss";
//components
import { categories } from "../../../categories";
//hooks
import { useState } from "react";
//router
import { useRouter } from "next/router";
const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(false);

  const router = useRouter();
  const getCategory = (elem) => {
    const objList = JSON.parse(localStorage.getItem("todoText"));
    const ctgry = elem?.name;

    if (elem) router.push(`/category/${ctgry}`);
    else router.push(`/`);
  };

  return (
    <>
      <div className={styles.Categories}>
        <div className={styles.itemAll} onClick={() => getCategory()}>
          All
        </div>
        <div className={styles.categoryWrapper}>
          {categories
            .filter((el) => el.id !== 0)
            .map((category) => (
              <div
                key={category.id}
                className={`${styles.item} ${
                  activeCategory && styles.activeCategory
                }`}
                onClick={() => getCategory(category)}
              >
                {category.name}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
