//TODO: make the videId values accessible outside the function
// Collect Dependencies
const {google} = require('googleapis');
// Youtube api object
const service = google.youtube({
  version: "v3",
  auth: process.env.API_KEY
});

export default function handler(req, res) {
    // Get data submitted in request's body
    const body = req.body;

    // Optional logging to see the responses
    // in the command line where next.js app is running
    console.log('body: ', body);

    // Guard clause checks for playlist topic and size,
    // and returns early if they are not found
    if (!body.topic || !body.size) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Playlist topic or length not found' });
    }
    // Get videos from youtube
    service.search.list({
      part: 'snippet',
      maxResults: body.size,
      q: body.topic,
      type: 'video',
      topicId: '/m/04rlf', //Music
      videoCategoryId: 10 //Music
    }).then((response) => {
      const {data} = response;
      data.items.forEach((item) => {
        console.log(item.id.videoId);
      })
    }).catch((err) => console.log(err));

    // Create user playlist using oauth token and playlist method
    //Access the list of urls here and add each item to the playlist 
    // Return a string stating "Playlist Sucessfully Created!" for now
    // Later update front-end to have a success pop-up with a confetti like animation
    res.status(200).json({ data: 'Your playlist has been successfully created. Check your YouTube account!'});
}

