const express = require('express');
const multer  = require("multer");
const bodyParser = require('body-parser');
const { Image } = require('canvas');
const { createCanvas } = require('canvas');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));
//app.use("/node_modules", express.static('./node_modules/'));

app.use("/upload", multer({dest:"uploads"}).any("filedata"));
const urlencodedParser = bodyParser.urlencoded({extended: true});

app.get('/', (req, res) => {
	res.sendfile('index.html');
})

app.post("/test", urlencodedParser, function (req, res) {
	//console.log('Uploaded: ', req.body.photoF);
	//console.log(typeof(req.body));
	//var formData = req.body;
	//console.log(req);
	console.log(req.body);
	const Image = createCanvas(300, 150); 
	//req.on('readable', function(){
    //console.log(req.read());
	//});
	
})	


app.post("/upload", function (req, res) {
   
    let filedata = req.body;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

