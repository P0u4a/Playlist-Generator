import styles from '../styles/Home.module.css';

export default function LandingPage() {
  return (
    <div className={styles.grid}>
      
      <h1 className={styles.headings}>Purpose</h1>
      <p className={styles.paragraph}>
        Creating playlists on YouTube can be time consuming, with Music Playlist Generator
        you can create music playlists on YouTube within seconds by simply choosing a topic
        to base your playlist on such as an artist or genre, and set a playlist size between
        1 and 50 songs. 
      </p>

      <h1 className={styles.headings}>How user data is used</h1>
      <p className={styles.paragraph}>
        To create your desired playlist, Music Playlist Generator makes API calls to the
        YouTube Data API V3. These API calls must be authorised by you, therefore when you sign in
        to this site, you grant us access to manage your YouTube account to be able to create
        playlists for you.
      </p>

    </div>
  );
}