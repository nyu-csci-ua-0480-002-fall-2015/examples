* start mongod db
* create a database and collection called catdb and cats respectively...
* simply start mongodb (if it isn't already started) to get your database server running
	* mongod
	* (you may have to create /data/db with sudo)
	* (but you should sudo chown -R yourusername:staff /data/db when it's created)
	* OR mongod --dbpath /path/to/some/directory
* use the commandline client to connect to the database server... then insert a bunch of cats!
	* db.cats.insert({name:'paw newman'})
	* db.cats.insert({name:'katy purry'})
	* db.cats.insert({name:'chairman meow'})
* use bin/www (when you're in the class12/catnames directory) to run (we used express generator to start this)
