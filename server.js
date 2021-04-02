const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
	express.static()
	res.sendfile('index.html');
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})