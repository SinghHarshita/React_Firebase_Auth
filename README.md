# Firebase in React
This project is for learning purposes. It incorporates basic firebase authentication and authorization along with firebase realtime database in react.
Live demo of the project can be see [here](https://react-auth-with-firebase.web.app/).

### Understanding the code
The entire project was developed by following an [online tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial). To get a better understanding of the project, please visit the site and read the documentation.

### Running the project on local machine
1. Clone the repository or download the zip file.
2. In the main directory, run the command : <br />
####              `npm install`
3. After that, you will have to create a .env file in the main directory. The contents of the `.env` file are <br />
####                   `
                   REACT_APP_API_KEY=YOUR_API_KEY
                   REACT_APP_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
                   REACT_APP_DATABASE_URL=YOUR_DB_URL
                   REACT_APP_PROJECT_ID=PROJECT_ID
                   REACT_APP_STORAGE_BUCKET=STORAGE_BUCKET
                   REACT_APP_MESSAGING_SENDER_ID=SENDER_ID
                   REACT_APP_APPID=YOUR_APP_ID`
               
    These details can be taken from the firebase console of your firebase project app.
 4. After this you are ready to run the project with <br />
####               `npm start`
