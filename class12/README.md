Cat Names!
===

Sooo... I heard you want to learn about MongoDB, Mongoose and Express... 

This is a sample app that will display a list of cat names stored in MongoDB. To get everything set up, you have to create a database and collection called catdb and cats respectively...

* start mongodb (if it isn't already started) to get your database server running:
	* mongod
	* (you may have to create /data/db with sudo)
	* (but you should sudo chown -R yourusername:staff /data/db when it's created)
	* OR mongod --dbpath /path/to/some/directory
* use the commandline client to connect to the database server... then insert a bunch of cats!
	* db.cats.insert({name:'paw newman'})
	* db.cats.insert({name:'katy purry'})
	* db.cats.insert({name:'chairman meow'})

Once you have your database running, you can run the web app (which used express generator to bootstrap the project layout):

* in this directory (class12/catnames)... npm install . (to get all dependencies, like express, body-parser, etc.)
* use bin/www (when you're in the class12/catnames directory) to run (we used express generator to start this)
* point your browser to http://localhost:3000
