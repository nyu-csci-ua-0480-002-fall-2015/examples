deploying your project
====
* deploy on i6, nyu's undergrad project server <---- we'll look at this
* heroku 
* if you have your own server space... it'll look like deploying on nyu
	* linode
	* racksapce
	* ec2 on amazon


i6
=====
* you'll need username and password
* reset your password

ssh
====
commandline tool... allows login to remote server

ssh jjv222@i6.cims.nyu.edu

port numbers: 10000 20000
export PORT=yourassignedportnumber


forever
=====
daemonize your applications

* run in it the background
* restart it if it crashes

to start
-----
export PORT=10000; node_modules/.bin/forever start demo/bin/www

list processes, only show forever
-----
ps aux | grep forever

stop forever from serving your app
-----
./node_modules/.bin/forever stopall

stop process 32218
-----
kill -9 32218

mongod
----

todo:
----
ask its to add more space to user quota

1. run express as a daemon
2. run mongo as a daemon

uploading to i6
=====

scp
----
scp user@sourcehost:path/to/files user@remotehost:path/to/files
scp -r user@sourcehost:path/to/files user@remotehost:path/to/files

sftp
----
* use graphical client, filezilla, cyberduck, fetch
* commmandline client

git 
-----
* git clone
* git export? ... doesn't include .git directory

passwordless login
-----
take the contents of your .ssh/id_rsa.pub (public key)
put it in remote server .ssh/authorized_keys




2n + b

n starts at 0

2n + 2

2
4
6
8























