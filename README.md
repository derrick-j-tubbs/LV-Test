This project was built with Mongoose, Express, React, and Node.js better known as the MERN stack. It is a simple create, read, update, and delete application allowing you to create and modify a list of favorite video games.

To get the frontend running locally:

- Clone this repo and navigate to it
- `npm install` or `yarn install` to install all required dependencies
- `npm start` or `yarn start` to start the local server (this project uses create-react app)

The local webserver will use port 4000.

To get the backend running locally to make api calls:

- ensure you have MongoDB installed
    - On Mac run `brew install mongodb`
    - On Windows/Linux follow the instructions here: https://docs.mongodb.com/manual/administration/install-community/
- change directory to backend `cd backend`
- `npm install nodemon` or `yarn install nodemon`
- run `nodemon server` to start the backend server
