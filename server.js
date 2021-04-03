const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use('/image', express.static(path.join(__dirname,'..','image')));

app.get('/', (req, res) => {
	res.sendfile('index.html');
})

app.get('/test', (req,res) => {
	res.sendfile('image/1.png');
})	

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

