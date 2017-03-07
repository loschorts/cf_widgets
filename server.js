// The purpose of this server is to wrap API requests from the client to the
// Cloudflare API in order to avoid cross-origin problems.

if (!process.env.xAuthEmail || !process.env.xAuthKey) {
	console.error("WARNING: auth headers undefined -- have you run `./start.sh` ?")
}

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

const logger = (req, res, next) => {
	console.log(`${req.method} ${req.path}`)
	next();
}

app.use(express.static('public'));
app.use(logger);
app.use(bodyParser.json());

// Routes

// Index Route
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/client/index.html')
});

// API wrapper routes

// API GET Request Route
app.get('/api/*', (req, res) => {

	const path = "https://api.cloudflare.com/v4/" + req.path.slice(5);
	console.log("requesting GET " + path + " from cloudflare");
	
	const options = {
	  url: path,
	  headers: {
	    'Content-Type': 'application/json',
	    'X-Auth-Email': process.env.xAuthEmail,
	    'X-Auth-Key': process.env.xAuthKey,
	  }
	};

	function callback(error, response, body) {
		if (response) {
			res.statusCode = response.statusCode;
			console.log(`Cloudflare API responded with ${response.statusCode}`)
		} else {
			res.statusCode = 404;
			console.log("Could not connect to Cloudflare API");
		}
	  res.setHeader('Content-Type', 'application/json');
	  res.send(body);
	}
	
	request(options, callback);
})

// API PATCH Request Route
app.patch("/api/*", (req,res) =>{
	const path = "https://api.cloudflare.com/v4/" + req.path.slice(5);
	console.log("Requesting PATCH " + path + " from cloudflare");
	
	const options = {
	  url: path,
	  method: "PATCH",
	  headers: {
	    'Content-Type': 'application/json',
	    'X-Auth-Email': process.env.xAuthEmail,
	    'X-Auth-Key': process.env.xAuthKey,
	  },
	  json: true,
	  body: req.body
	};

	function callback(error, response, body) {
		if (response) {
			res.statusCode = response.statusCode;
			console.log(`Cloudflare API responded with ${response.statusCode}`)
		} else {
			res.statusCode = 404;
			console.log("Could not connect to Cloudflare API");
		}
		
	  res.setHeader('Content-Type', 'application/json');
	  debugger;
	  res.send(body);
	}
	
	request(options, callback);
})

// Start listening

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on port ${port}`)
});
