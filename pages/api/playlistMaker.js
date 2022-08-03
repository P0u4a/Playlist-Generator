import { google } from 'googleapis';
import { getToken } from 'next-auth/jwt';

export default async function handler(req, res) {
  // Get data submitted in request's body
  const body = req.body;

  // Guard clause checks for playlist topic and size,
  // and returns early if they are not found
  if (!body.topic || !body.size) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'playlist topic and/or size not found' });
  }

  // Get access token
  const token = await getToken({ req });
  const accessToken = token.accessToken;
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

  try {
    // Create new playlist on user account
    const playlistResponse = await service.playlists.insert({
      part: 'snippet',
      requestBody: {
        snippet: {
          title: `${body.topic} playlist`,
          description: 'Created by Music Playlist Generator'
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
    for (let i = 0; i < body.size; i++) {
      videoLinks.push(videoObj[i].id.videoId);
    }

    // Add videos to playlist
    for (let index = 0; index < body.size; index++) {
      // Track the video position in the playlist
      let videoPosition = 0;
      // Track current video to be added
      let videoLink = videoLinks[index];
      await service.playlistItems.insert({
        part: 'snippet',
        requestBody: {
          snippet: {
            playlistId: newPlaylistId,
            position: videoPosition,
            resourceId: {
              kind: 'youtube#video',
              videoId: videoLink
            }
          }
        }
      });
      // Increment when previous video is successfully added
      videoPosition++;
    }

  } catch (err) {
    return res.status(401).json({ data: 'Something went wrong 😬...\nDo you have a YouTube channel?' });
  }
  
  // Success
  return res.status(200).json({ data: 'Your playlist has been successfully created 🎉\nCheck your YouTube account!' });
}
