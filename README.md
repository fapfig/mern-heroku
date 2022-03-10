# MERN example

My conclusions:

## Client

- When I used fetch with the "localhost:4000/user" it worked fine locally, i.e. in development mode. However, when I deployed to heroku it did not work. So, I used http-proxy-middleware to fix the problem.

## Server

- I used CORS at the backend to allow the frontend to access the API. Without this I've got the error "cors policy no 'access-control-allow-origin'"
