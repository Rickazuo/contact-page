import styles from "./header.module.css";
import Image from "next/image";

import add from "../../../../public/add.svg";
import deleteIcon from "../../../../public/deleteIcon.svg";
import edit from "../../../../public/edit.svg";
import search from "../../../../public/search.svg";

export default function Header({ setSearch }) {
  return (
    <div className={styles.container}>
      <div className={styles.headlineIcons}>
        <span className={styles.titleHeader}>Meus Contatos</span>
        <nav className={styles.navegation}>
          <Image
            className={styles.icon}
            src={add}
            alt="add icon"
            width={24}
            height={24}
          />
          <Image
            className={styles.icon}
            src={edit}
            alt="edit icon"
            width={24}
            height={24}
          />
          <Image
            className={styles.icon}
            src={deleteIcon}
            alt="deleteIcon icon"
            width={24}
            height={24}
          />
        </nav>
      </div>
      <div className={styles.searchContainer}>
        <Image
          className={styles.searchIcon}
          src={search}
          alt="search icon"
          width={16}
          height={16}
        />

        <input
          id="search"
          className={styles.searchContacts}
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Busque por nome ou por dados de contato..."
        />
      </div>
    </div>
  );
}
