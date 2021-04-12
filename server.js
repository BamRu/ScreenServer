const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
	res.sendfile('index.html');
})

app.post('/test', (req,res) => {
	console.log('Uploaded: ', req.file)
	// Homework: Upload file to S3
})	

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

