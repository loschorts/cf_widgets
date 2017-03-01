const express = require('express');
const request = require('request');
const secrets = require('./secrets');

const app = express();
const port = 3000;

const logger = (req, res, next) => {
	console.log("request received for ", req.path)
	next();
}

app.use(express.static('public'));
app.use(logger);

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/client/index.html')
});

app.get('/api/*', (req, res) => {
	
	const path = "https://api.cloudflare.com/v4/" + req.path.slice(5);
	console.log("requesting " + path + " from cloudflare");
	console.log(req.headers)
	const options = {
	  url: path,
	  headers: {
	    'Content-Type': 'application/json',
	    'X-Auth-Email': secrets.myEmail,
	    'X-Auth-Key': secrets.myKey,
	  }
	};

	function callback(error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	console.log("SUCCESS: cf api request suceeded")
	    res.send(body);
	  } else {
	  	console.log("ERROR: something went wrong with the cf api request", error)
	  	res.send({error});
	  }
	}
	
	request(options, callback);

})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
  console.log(`don't run me on the internet i pass your cloudflare auth key around like candy`)
});
