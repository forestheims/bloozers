import styles from './Music.css';

export default function Music() {
  return (
    <main className={styles.Music}>
      <p className={styles.Para}>
        Check out some of our music in the links below
      </p>
      <p className={styles.Para}>
        <a href="https://www.dropbox.com/s/ntt0jsa0xslbhe1/Bloozers%20mix.mp3?dl=0">
          Bloozers Mix MP3 - Dropbox
        </a>
      </p>
    </main>
  );
}
