User Stories:
As a user, I want to view a list of posts so that I can see what other people have written.
As a user, I want to search for posts by location, date, or post text so that I can find specific posts easily.
As a user, I want to add a new post so that I can share my own experiences with others.
As a user, I want to edit or delete a post that I have written so that I can correct mistakes or remove outdated information.
As a user, I want to view a map with markers for each post so that I can see where the posts were written.
As a user, I want to view a modal window when I click on a post so that I can read the post in more detail without leaving the main page.

---

Instructions:

To get started with this code, you will need to install the dependencies by running npm install.

Once the dependencies are installed, you can run the app in development mode by running npm start. This will start a development server and open the app in a new browser window.

The app allows users to view a list of posts and search for posts by location, date, or post text. Users can also add, edit, and delete posts. The app also includes a map with markers for each post. When a user clicks on a post, a modal window will appear with more details about the post.

To build the app for production, run npm build. This will create a production-ready build of the app in the build directory.

Note: This app uses a remote API to store and retrieve data. You will need to provide your own API key to use the app.

---

The technologies used in this app include:

React: a JavaScript library for building user interfaces. The app is built using React components, which are used to define the structure and behavior of the user interface.
Axios: a JavaScript library for making HTTP requests. The app uses Axios to make API calls to retrieve and update data.
Bootstrap: a CSS framework for building responsive, mobile-first user interfaces. The app uses Bootstrap components such as buttons and modals to style the user interface.
Google Maps API: a JavaScript library for displaying maps and markers on a web page. The app uses the Google Maps API to display a map with markers for each post.
In addition, the app uses React hooks such as useState, useEffect, and useCallback to manage the state of the components and to perform side effects. The app also uses the useLoadScript hook to load the Google Maps API asynchronously.
