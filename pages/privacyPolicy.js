import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function PrivacyPolicy() {

  return (
    <>
      <div className={styles.descriptionAlt}>
        Privacy Policy
      </div>
      <p className={styles.paragraphAlt}>
        This app uses OAuth2.0 to make authorised API calls to the YouTube Data API V3.
        The scope of access enables the app to see, edit, and permanently delete your
        YouTube videos, ratings, comments and captions. Furthermore, by signin in, you consent the app to associate you with your personal information on Google. 
        The app uses these scopes to create a YouTube playlist on your YouTube channel, search for videos on your YouTube account related to the prompt you entered on the app, and
        add the resulting videos to the created playlist. User data is contained within encrypted JSON Web Tokens stored in browser memory and the app&apos;s access to your
        YouTube account expires after some time. You can also revoke access at any time you wish through your Google account.
        Music Playlist Generator&apos;s use and transfer to any other
        app of infomration received from Google APIs will adhere to the Google API Services User Data Policy.
      </p>

      <div className={styles.title}>
        <Image src='/privacy.svg' alt='privacy image' width={300} height={300}/>
      </div>

    </>
  );
}