# The Flash News App

This is a simple news app named 'FlashNews' that accesses the NY Times Most Popular Articles API. It displays a list of articles, and when you click on an item in the list, it shows the details page. From there, if you want to read more, you can click on the published site link provided to continue reading.

live URL of the website : https://theflashnews.netlify.app/

## About this Project

This is a React app built on vite with the following technologies and libraries:

- NY Times Developers for Articles API
- Axios
- Tailwind
- Material Tailwind
- React Router
- Luicide React
- Redux Toolkit

Please follow these instructions carefully to setup this project on your machine.

## Setting up NY Times Articles API for latest News

You need to signup for an API key at: https://developer.nytimes.com/get-started, then replace the ‘API_KEY’ in the '.env-sample' with the API key assigned to your account and 'API_URL' with 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=' and change the '.env-sample' file name to '.env'.

## Running the App

Now that you have set up NY Times Articles API and configured your environment variables, you can run the React app using the following commands:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

This will start the application on the default port of vite `http://localhost:5173`:
