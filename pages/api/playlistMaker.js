import { google } from 'googleapis';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

// Wrap this function in a try catch statement
export default async function handler(req, res) {

  // Check user is signed in to use the api
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ data: 'You must be signed in to use this service' });
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
  //const token = await getToken({ req });
  const accessToken = session.accessToken;
  // Create Oauth instance
  const auth = new google.auth.OAuth2({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  });
  auth.setCredentials({
    access_token: accessToken
  });

  // Create youtube api instance
  const service = google.youtube({
    version: 'v3',
    auth: auth
  });

  // Create new playlist on user account
  const newPlaylist = await service.playlists.insert({
    part: 'snippet',
    requestBody: {
      snippet: {
        title: `${body.topic} playlist`,
        description: 'Created by YouTube Music Playlist Wizard'
      }
    }
  });

  // Get videos from youtube
  service.search.list({
    part: 'snippet',
    maxResults: body.size,
    q: body.topic,
    type: 'video',
    topicId: '/m/04rlf', //Music
    videoCategoryId: 10 //Music
  }).then((response) => {
    const { data } = response;
    data.items.forEach((item) => {
      console.log(item.id.videoId);
    });
  }).catch((err) => console.log(err));

  // Add videos to playlist
  // for (let item = 0; item < body.size; item++) {
  //   google.youtube('v3').playlistItems.insert({
  //     part: 'snippet',
  //     resource: {
  //       snippet: {
  //         playlistId: newPlaylist.data.id,
  //         resourceId: {
  //           kind: 'youtube#video',
  //           videoId: musicVideos.data.item.id.videoId
  //         }
  //       }
  //     }
  //   });
  // }



  // Later update front-end to have a success pop-up with a confetti like animation
  res.status(200).json({ data: 'Your playlist has been successfully created. Check your YouTube account!'});
}