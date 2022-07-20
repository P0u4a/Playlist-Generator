import { google } from 'googleapis';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

// Wrap this function in a try catch statement
// NOTE: currently access token is being exposed client side which is
//       unsafe so we should see if its possible to only use getToken
//       to not have to expose the access token (for security)
// For greater style consider splitting this into smaller components inside the api folder
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
  const playlistResponse = await service.playlists.insert({
    part: 'snippet',
    requestBody: {
      snippet: {
        title: `${body.topic} playlist`,
        description: 'Created by YouTube Music Playlist Wizard'
      }
    }
  });
  // Collect playlist id from api response
  const newPlaylistId = playlistResponse.data.id;

  // Get videos from youtube
  const videos = await service.search.list({
    part: 'snippet',
    maxResults: body.size,
    q: body.topic,
    type: 'video',
    topicId: '/m/04rlf', //Music
    videoCategoryId: 10 //Music
  });
  // Save list of video objects
  const videoObj = videos.data.items;
  // Initialise empty array of links to be filled
  const videoLinks = [];
  // Save every video id in the list
  for (let i=0; i < body.size; i++) {
    videoLinks.push(videoObj[i].id.videoId);
  }

  // Add videos to playlist
  for (let item = 0; item < body.size; item++) {
    const temp = await service.playlistItems.insert({
      part: 'snippet',
      requestBody: {
        snippet: {
          playlistId: newPlaylistId,
          position: item,
          resourceId: {
            kind: 'youtube#video',
            videoId: videoLinks[item]
          }
        }
      }
    });
  }

  // Later update front-end to have a success pop-up with a confetti like animation
  res.status(200).json({ data: 'Your playlist has been successfully created. Check your YouTube account!'});
}