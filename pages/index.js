import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>नमस्ते, I am Santosh Mahto from India</title>
      </Head>

      <main className={styles.main}>
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="HORIZONTAL"
          data-vanity="insantoshmahto"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://in.linkedin.com/in/insantoshmahto?trk=profile-badge"
          >
            {/* Santosh Mahto */}
          </a>
        </div>
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>
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
