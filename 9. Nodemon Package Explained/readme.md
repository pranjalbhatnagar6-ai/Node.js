Why do we need the nodemon package?

When you're working with a Node.js server, every time you make a change in your server file, you have to:

Manually stop the server.
Restart it to see the changes.
This process becomes annoying during development



Solution: nodemon
nodemon automatically watches your files.
It restarts the server automatically whenever you make changes.
Saves time and improves developer experience.


How to Install Nodemon
Open your terminal and run:

npm install nodemon


How to Use Nodemon
nodemon app.js
Now the server will restart automatically every time you make changes to app.js



Can we create more than one server?
Yes, we can run multiple servers in Node.js — just make sure they run on different ports.
