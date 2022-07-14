import { google } from 'googleapis';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
// TODO: Get access token for authorised api call
const secret = process.env.NEXTAUTH_SECRET;

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
  // const token = await getToken({ req });
  // const accessToken = token.access_token;
  //console.log(accessToken);

  // Create new playlist on user account
  // const newPlaylist = await google.youtube('v3').playlists.insert({
  //   part: 'snippet',
  //   requestBody: {
  //     snippet: {
  //       title: 'Test',
  //       description: 'Created by YouTube Music Playlist Wizard'
  //     },

  //     status: {
  //       privacyStatus: 'private'
  //     }
  //   }
  // });

  //console.log(newPlaylist.data);

  // Get videos from youtube
  // const musicVideos = await google.youtub('v3').search.list({
  //   auth: process.env.API_KEY,
  //   part: 'snippet',
  //   maxResults: body.size,
  //   q: body.topic,
  //   type: 'video',
  //   topicId: '/m/04rlf', //Music
  //   videoCategoryId: 10 //Music  
  // });

  // service.search.list({
  //   part: 'snippet',
  //   maxResults: body.size,
  //   q: body.topic,
  //   type: 'video',
  //   topicId: '/m/04rlf', //Music
  //   videoCategoryId: 10 //Music
  // }).then((response) => {
  //   const { data } = response;
  //   data.items.forEach((item) => {
  //     console.log(item.id.videoId);
  //   })
  // }).catch((err) => console.log(err));

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