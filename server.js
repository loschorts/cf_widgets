const express = require('express')  
const request = require('request')

const app = express()  
const port = 3000

const logger = (req, res, next) => {
	console.log("request received for ", req.path)
	next();
}

app.use(express.static('client/dist'))
app.use(logger)

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/client/index.html')
});

app.get('/api/*', (req, res) => {
	
	const path = "https://api.cloudflare.com/v4/" + req.path.slice(5);
	console.log("requesting " + path);
	const options = {
	  url: path,
	  headers: {
	    'Content-Type': 'application/json',
	    'X-Auth-Email': req.headers['x-auth-email'],
	    'X-Auth-Key': req.headers['x-auth-key'],
	  }
	};

	function callback(error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	console.log("request suceeded")
	    res.send(body);
	  } else {
	  	console.console.log("something went wrong with the request", error)
	  	res.send(error);
	  }
	}
	request(options, callback);

})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
