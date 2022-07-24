# Music Playlist Generator 

Automatically create music playlists on your youtube account.

Simply enter the artist, band, or genre you would like your playlist to be based on, and use the slider to set the playlist's length. 

<img src='https://user-images.githubusercontent.com/66873325/180650652-60437fc3-037a-4a55-927b-2564d38cd70f.svg' alt='logo' width='100' height='100'/>

This project was built with Nextjs, Nextauth for authentication and react-bootstrap for the UI. 

Demo <sup>*</sup> Link here

*_You must be added as a test user to be able to access the api in the demo app as the project has not been verified by google as of yet. Instructions on how to
do this can be found on the website by interacting with the ```CLICK ME FIRST!``` button._ 

# How to run locally

## Installation
Clone the repository with ```git clone https://github.com/P0u4a/youtube-music-playlist-wizard.git``` 

Run ```npm install``` to install dependencies
## Oauth Credentials
Go to https://console.cloud.google.com/getting-started and enable
the Youtube data api v3

Configure your Oauth consent screen, making sure to set the scope
to ```https://www.googleapis.com/auth/youtube.force-ssl```

Under the credentials tab, click new credentials and choose **new
Oauth client ID**. Choose web app as the application type and set the
**Authorised Javascript Origins** to ```http://localhost:3000```
(assuming you are hosting on port 3000, otherwise set your own port).
Then, set the **Authorised redirect URI** to ```http://localhost:3000/api/auth/callback/google```.
## Enviornment Variables
Inside the app's root directory, create a ```.env``` file and add the following variables:
 * ```CLIENT_ID```
 * ```CLIENT_SECRET```
 * ```NEXTAUTH_SECRET```

Set ```CLIENT_ID``` and ```CLIENT_SECRET``` to the values generated when you created your
Oauth credentials. Lastly, you should set ```NEXTAUTH_SECRET``` to a randomly generated value as it 
is used to encyrpt the JSON web tokens generated during the Oauth flow.
## Running the app
Run ```npm run dev``` in the terminal and make the magic happen.
