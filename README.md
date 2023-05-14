Welcome to Docker Coffee-Shop:

In order to run this app you would need Docker desktop and a terminal to run the app.

All the configurations are in the Dockerfile this app comes with and in order to run the app

run docker build -t coffee-shop .
  this lets docker know to build the image based on the instructions given and the react component
  
After you the run the build command run
docker run -p 3000:3000 coffee-shop which runs the app itself on you local host in port 3000.
