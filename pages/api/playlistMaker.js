import { google } from "googleapis";
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(req, res) {

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

  // const service = google.youtube({
  //   version: 'v3',
  //   auth: process.env.API_KEY
  // });

  // Get access token
  const token = await getToken({ req, secret });
  const accessToken = token.access_token;

  // Create new playlist on user account
  // const newPlaylist = await google.youtube('v3').playlists.insert({
  //   auth: accessToken,
  //   part: 'snippet',
  //   requestBody: {
  //     snippet: {
  //       title: 'Test',
  //       description: 'This is a test playlist'
  //     },

  //     status: {
  //       privacyStatus: 'private'
  //     }
  //   }
  // });

  console.log(newPlaylist.data);

  // Get videos from youtube
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


  // Later update front-end to have a success pop-up with a confetti like animation
  res.status(200).json({ data: 'Your playlist has been successfully created. Check your YouTube account!'});
}