import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import styles from '../styles/Home.module.css';

export default function LandingPage() {
  return (
    <Tabs
      defaultActiveKey='purpose'
      id='discolsures'
      className='mb-3'
    >
      <Tab eventKey='purpose' title='Purpose' className={styles.paragraph}>
        Creating playlists on YouTube can be time consuming, with Music Playlist Generator
        you can create music playlists on YouTube within seconds by simply choosing a topic
        to base your playlist on such as an artist or genre, and set a playlist size between
        1 and 50 songs.
      </Tab>

      <Tab eventKey='How User Data Is Used' title='How User Data Is Used' className={styles.paragraph}>
        To create your desired playlist, Music Playlist Generator makes API calls to the
        YouTube Data API V3. These API calls must be authorised by you, therefore when you sign in
        to this site, you grant us access to manage your YouTube account to be able to create
        playlists for you.
      </Tab>

    </Tabs>

  )
}