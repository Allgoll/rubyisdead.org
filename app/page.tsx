import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        {' '}Definitely DEAD
      </h1>

      <div className={styles.description}>
        Remove ruby
        <pre>
          <code>
            rm -Rf ~/.rubies/*
          </code>
        </pre>
        Save humanity
      </div>

      <div className={styles.description}>
        <a target="_blank" className={styles.link} href="https://nodejs.org/en">Start using modern languages NOW</a>
      </div>
    </main>
  )
}
