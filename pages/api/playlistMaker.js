// Collect Dependencies
const { google } = require('googleapis');

// Turn this into an async await function
export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body;

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body);

    // Guard clause checks for playlist topic and size,
    // and returns early if they are not found
    if (!body.topic || !body.size) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Playlist topic or length not found' });
    }
    // Found playlist topic and size.
    // Get videos from youtube
    google.youtube('v3').search.list({
      key: process.env.API_KEY,
      part: 'snippet',
      maxResults: body.size,
      q: body.topic,
      type: 'video',
      topicId: '/m/04rlf', //Music
      videoCategoryId: 10 //Music
    }).then((response) => {
      const { data } = response;
      data.items.forEach((item) => {
        // Display urls on terminal for now
        console.log(`https://www.youtube.com/watch?v=${item.id.videoId}\n`);
      });
    }).catch((err) => console.log(err));
    
    res.status(200).json({ data: `${body.topic} ${body.size}`});
}