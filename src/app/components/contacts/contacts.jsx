import styles from "./contacts.module.css";
import Image from "next/image";

export default function Contacts({ contactList, letterContact }) {
  function backgroundColorGenerator() {
    let r, g, b;

    do {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
    } while (r + g + b < 383 || r + g + b > 700); // only accept colors with a total value between 383 and 700

    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.listBox}>
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
    </div>
  );
}
