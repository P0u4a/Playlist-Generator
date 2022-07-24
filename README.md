# Music Playlist Generator
Automatically create music playlists on your youtube account.
# How to run locally
1. Clone the repository and run ```npm install``` to install dependencies

2. Go to https://console.cloud.google.com/getting-started and enable
the Youtube data api v3

3. Configure your Oauth consent screen, making sure to set the scope
to ```https://www.googleapis.com/auth/youtube.force-ssl```

4. Under the credentials tab, click new credentials and choose new
Oauth client ID. Choose web app as the application type and set the
**Authorised Javascript Origins** to ```http://localhost:3000```
(assuming you are hosting on port 3000, otherwise set your own port).
Then, set the **Authorised redirect URI** to ```http://localhost:3000/api/auth/callback/google```.

5. Inside the app's root directory, create a ```.env``` file and add the following variables:
    * ```CLIENT_ID```
    * ```CLIENT_SECRET```
    * ```NEXTAUTH_URL```
    * ```NEXTAUTH_SECRET```
    
6. Set ```CLIENT_ID``` and ```CLIENT_SECRET``` to the values generated when you created your
Oauth credentials. ```NEXTAUTH_URL``` should be set to ```http://localhost:3000```. Lastly,
you should set ```NEXTAUTH_SECRET``` to a randomly generated value as it is used to encyrpt
the JWT during the Oauth flow.

7. Run ```npm run dev``` in the terminal and make the magic happen.
