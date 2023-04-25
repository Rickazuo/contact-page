import styles from "./contacts.module.css";
import Image from "next/image";

export default function Contacts({ contactList, letterContact }) {
  function backgroundColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className={styles.container}>
      {contactList.map(({ name, image, phone }, index) => (
        <div className={styles.contactStructure} key={name}>
          <div
            style={{
              background: backgroundColorGenerator(),
              visibility: letterContact[index] == null ? "hidden" : "visible",
            }}
            className={styles.contactIndexLetter}
          >
            {letterContact[index] !== null ? letterContact[index] : ""}
          </div>
          <div className={styles.contactBox}>
            <Image
              className={styles.photoPerson}
              src={image}
              alt="photo person"
              width={16}
              height={16}
            />
            <div className={styles.infoContact}>
              <div>{name}</div>
              <div>{phone}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
