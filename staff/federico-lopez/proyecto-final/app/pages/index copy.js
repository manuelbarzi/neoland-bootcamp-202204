import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello
        </h1>
        <Link href="/chords-test"><a>Chords Test</a></Link>
      </ main>

    </div>
  )
}
