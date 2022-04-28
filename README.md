# MultiVendorShop
Setup: \
Server: 
  1. Run ```npm install``` in root folder to install dependencies.
  2. Install and setup MongoDB, save connect url and enter it to .env in root folder.
  3. Change variables in .env file with your values and [Cloudinary.com](Cloudinary) api keys.
  4. To start server run ```node server.js``` 

Client:
  1. Run ```npm install``` in client folder to install dependencies.
  2. Change ```REACT_APP_BASE_URL``` variable in .env(client folder) file with your server url and port(PORT variable in root folder .env) \
  eg: ```http://127.0.0.1:8000``` if running in localhost.
  3. Run ```npm run build``` to generate build folder in client folder.

Access REACT_APP_BASE_URL to see the website.
