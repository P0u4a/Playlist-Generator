import { google } from "googleapis";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {

  //Check that user is signed in to use the api
  const session = await getSession(req);

  if (!session) {
    return res.status(401).json({ data: 'You must be signed in to use this service'});
  }

  // Get data submitted in request's body
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running
  console.log('body: ', body);

  // Guard clause checks for playlist topic and size,
  // and returns early if they are not found
  if (!body.topic || !body.size) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'playlist size and/or topic not found' });
  }
  // Get access token

  // Youtube api object
  const service = google.youtube({
    version: 'v3',
    auth: process.env.API_KEY
  });

  // Get videos from youtube
  function getVideos(query, size) {
    service.search.list({
      part: 'snippet',
      maxResults: size,
      q: query,
      type: 'video',
      topicId: '/m/04rlf', //Music
      videoCategoryId: 10 //Music
    }).then((response) => {
      const { data } = response;
      data.items.forEach((item) => {
       console.log(item.id.videoId);
      })
    }).catch((err) => console.log(err));
  }

  getVideos(body.topic, body.size);

  // Create user playlist using oauth token and playlist method
  //Access the list of urls here and add each item to the playlist 
  // Return a string stating 'Playlist Sucessfully Created!' for now
  // Later update front-end to have a success pop-up with a confetti like animation
  res.status(200).json({ data: 'Your playlist has been successfully created. Check your YouTube account!'});
}

export default handler;
