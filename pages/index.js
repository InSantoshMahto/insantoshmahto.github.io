import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>नमस्ते, I am Santosh Mahto from India</title>
      </Head>

      <main className={styles.main}>
        <code>Working on It</code>
      </main>

      <footer className={styles.footer}>
        View my work at&nbsp;
        <a
          href="https://github.com/InSantoshMahto"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
