import PlaylistForm from "../components/form";
import styles from '../styles/Home.module.css';

export default function PlaylistDetails() {

  // Handle the submit event on form submit
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page
    event.preventDefault();

    // Get data from the form.
    const data = {
      topic: event.target.topic.value,
      size: event.target.size.value,
    }

    const JSONdata = JSON.stringify(data);

    // Send the form data to our API and get a response
    const response = await fetch('/api/playlistMaker', {
      // Oauth credentials included while fetching
      credentials: 'include',
      // Body of the request is the JSON data created above
      body: JSONdata,

      //Sending JSON data to server
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    // Get the response data from server as JSON
    const result = await response.json();
    alert(`${result.data}`);
  }

  return (
    <main>
      <h1 className={styles.title}>
      Playlist Creator
      </h1>
      <br/>
      <PlaylistForm/>
    </main>


    // <>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor='topic'>Enter playlist topic (e.g. Eminem)</label>
    //     <input type='text' id='topic' name='topic' required />
    //     <label htmlFor='size'>Enter playlist size</label>
    //     <input type='text' id='size' name='size' required />
    //     <button type='submit'>Create</button>
    //   </form>      
    // </>
  );
}