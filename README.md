# React.js-Node.js-Express-MongoDB-example
React.js + Node.js + Express + MongoDB example

Link: https://www.bezkoder.com/react-node-express-mongodb-mern-stack/


MERN Stack Architecture
– Node.js Express exports REST APIs & interacts with MongoDB Database using Mongoose ODM.
– React Client sends HTTP Requests and retrieves HTTP Responses using Axios, consumes data on the components. React Router is used for navigating to pages.


These are APIs that Node.js Express App will export:

Methods	Urls	Actions
GET	api/tutorials	get all Tutorials
GET	api/tutorials/:id	get Tutorial by id
POST	api/tutorials	add new Tutorial
PUT	api/tutorials/:id	update Tutorial by id
DELETE	api/tutorials/:id	remove Tutorial by id
DELETE	api/tutorials	remove all Tutorials
GET	api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'
