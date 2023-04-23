import Contacts from "../contacts/contacts";
import styles from "./resultes.module.css";

export default function Results() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <Contacts />
        </div>
      </div>
    </div>
  );
}
