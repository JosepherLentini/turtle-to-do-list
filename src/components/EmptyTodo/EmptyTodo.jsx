import styles from "./EmptyTodo.module.scss";
import Image from "next/image";
import turtle from "./sleeturt.png"

const EmptyTodo = () => {
  return (
    <div className={styles.EmptyTodo}>
      <div className={styles.empty_message}>
        <div className={styles.message}>
          <h1>Nothing to do?</h1>
          <p className={styles.relax}>relax</p>
          <span>or</span>
          <p>write new to-do!</p>
        </div>
        <div className={styles.turtle}>
          <Image
            src={turtle}
            width={300}
            height={300}
            alt="Picture of the author"
            className={styles.turtle_image}
          />
        </div>
      </div>
    </div>
  );
};

export default EmptyTodo;


