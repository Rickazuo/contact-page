"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import Results from "./components/results/results";
import photo1 from "../../public/photo1.svg";
import photo2 from "../../public/photo2.svg";
import photo3 from "../../public/photo3.svg";
import photo4 from "../../public/photo4.svg";
import photo5 from "../../public/photo5.svg";
import photo6 from "../../public/photo6.svg";

const defaultList = [
  {
    image: photo1,
    name: "Abraão Sena",
    phone: "(11) 90876-1234",
  },
  {
    image: photo2,
    name: "Beatriz Clasen",
    phone: "(48) 90876-1123",
  },
  {
    image: photo3,
    name: "Brenda Mendes",
    phone: "(21) 90876-8765",
  },
  {
    image: photo4,
    name: "Caio Vinícius",
    phone: "(21) 90876-8765",
  },
  {
    image: photo5,
    name: "Cleiton Souza",
    phone: "(21) 90876-8765",
  },
  {
    image: photo6,
    name: "Daniel Duarte",
    phone: "(21) 90876-8765",
  },

];

export default function Home() {
  const [contactList, setContactList] = useState(defaultList);
  const [search, setSearch] = useState("");

  function getLetterIndex() {
    let actualLetter = "a";
    const result = ['A'];
    for (let i = 0; i < contactList.length-1; i++) {
      if (
        actualLetter.toLowerCase() != contactList[i+1].name[0].toLowerCase() 
      ) {
        const letter = contactList[i+1].name[0].toUpperCase();
        actualLetter = letter;
        result.push(letter);
      } else {
        result.push(null);
      }
    }
    return result;
  }

  const letterContact = getLetterIndex();

  useEffect(() => {
    const filterTasks = () => {
      let match = false;
      const filteredTasks = [];

      for (let i = 0; i < defaultList.length; i++) {
        if (
          search &&
          defaultList[i].name.toLowerCase().includes(search.toLowerCase())
        )
          match = true;

        if (match) filteredTasks.push(defaultList[i]);
        match = false;
      }

      setContactList(filteredTasks);
    };

    if (search !== "") filterTasks();
    else setContactList(defaultList);
  }, [search]);

  return (
    <main className={styles.main}>
      <Header setSearch={setSearch} />
      <Results letterContact={letterContact} contactList={contactList} />
    </main>
  );
}
