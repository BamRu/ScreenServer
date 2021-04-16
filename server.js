const express = require('express');
const bodyParser = require('body-parser');
const { createCanvas } = require('canvas')
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));
//app.use("/node_modules", express.static('./node_modules/'));

app.use('/test', bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
	res.sendfile('index.html');
})

app.post('/test', (req,res) => {
	console.log('Uploaded: ', req.body.photoF);
	// Homework: Upload file to S3
	var imgf = new Buffer(req.body.photoF, 'base64');
	var imgb = new Buffer(req.body.photoB, 'base64');
	
})	

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

