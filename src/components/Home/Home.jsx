import styles from './Home.css';

export default function Home() {
  return (
    <main className={styles.Home}>
      <img className={styles.Img} src="./images/bloozers-bg.png"></img>
      <p className={styles.Para}>
        The Bloozers are a blues group with roots in folk music and a tinge of
        country. The band is composed of an eclectic mix of musicians who often
        invite others to jam with them. You'll hear blues hits dating back to
        the 1940s, as well as some Johnny Cash and a fair amount of Dylan. We
        also touch on Leonard Cohen, Tom Waits, and a cadre of musical greats.
        Sometimes we just jam.
      </p>
      <p className={styles.Para}>
        The Bloozers have played at numerous venues, including Cactus Jacks, an
        Octoberfest event in Cathedral Park, an anniversary dinner, weddings, a
        high school reunion, and a street party. We have also played for local
        charity groups and auctions, including Lift Urban Portland, Community
        Warehouse, and Congregation on Beth Israel. We even played in a
        fund-raiser for Frank Palleta's "Journey to Memphis."
      </p>
    </main>
  );
}
