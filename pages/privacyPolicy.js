import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function PrivacyPolicy() {

  return (
    <>
      <div className={styles.descriptionAlt}>
        Privacy Policy
      </div>
      <p className={styles.paragraphAlt}>
        This app uses Oauth2.0 to make authorised API calls to the YouTube Data API V3.
        The scope of access enables the app to see, edit, and permanently delete your
        YouTube videos, ratings, comments and captions. However, the app only uses this scope to
        create a playlist on your account, search for videos on YouTube related to your input, and
        add such videos to your playlist. User data is stored in encrypted JSON Web Tokens and the app&apos;s access to your
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