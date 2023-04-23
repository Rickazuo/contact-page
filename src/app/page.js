import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header/header'
import Results from './components/results/results'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Results />
    </main>
  )
}
