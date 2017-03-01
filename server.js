if (!process.env.xAuthEmail || !process.env.xAuthKey) {
	throw new Error("secrets undefined; make sure to run `./run.sh` instead of `node server` directly")
}

const express = require('express');
const request = require('request');

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
	
	const options = {
	  url: path,
	  headers: {
	    'Content-Type': 'application/json',
	    'X-Auth-Email': process.env.xAuthEmail,
	    'X-Auth-Key': process.env.xAuthKey,
	  }
	};

	function callback(error, response, body) {
		console.log(`Cloudflare API responded with ${response.statusCode}`)
	  res.setHeader('Content-Type', 'application/json');
		res.statusCode = response.statusCode;
	  res.send(body);
	}
	
	request(options, callback);

})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
});
