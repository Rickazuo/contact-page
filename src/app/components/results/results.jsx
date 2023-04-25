import Contacts from "../contacts/contacts";
import styles from "./resultes.module.css";

export default function Results({ contactList, letterContact }) {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <Contacts letterContact={letterContact} contactList={contactList} />
        </div>
      </div>
    </div>
  );
}
