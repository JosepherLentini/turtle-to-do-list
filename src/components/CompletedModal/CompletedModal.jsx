import styles from "./CompletedModal.module.scss"
import Image from "next/image"
import complete from "../../../public/dubTurtle.png"

const CompletedModal = () => {
    return (
      <div className={styles.CompletedModal}>
        <div className={styles.completed}>
          <h1>Completed!!</h1>
        </div>
        <Image
          src={complete}
          width={250}
          height={250}
          alt="Picture of the author"
          className={styles.turtle_image}
        />
        <div className={styles.message}>
          <h1>You weren't twiddling your thumbs</h1>
        </div>
      </div>
    );
}
export default CompletedModal;