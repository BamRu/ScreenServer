const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const multer  = require("multer"); // для сохранения фалов
var upload = multer({ dest: 'uploads/' })

const bodyParser = require('body-parser'); // обработка форм
const urlencodedParser = bodyParser.urlencoded({extended: false}); // для обработки формы

const reduce = require('image-blob-reduce')();	// blob to canvas
const { createCanvas, Image} = require('canvas');	// canvas
const canvasf = createCanvas(300, 150);	//	canvas 1
const canvasb = createCanvas(300, 150);	//	canvas 2
const ctxf = canvasf.getContext('2d');	//	canvas
const ctxb = canvasb.getContext('2d');	//	canvas

app.use(express.static(path.join(__dirname, 'public')));	
//app.use("/node_modules", express.static('./node_modules/'));

app.use("/upload", multer({dest:"uploads"}).any("filedata"));	// для сохранения используем пакет


app.get('/', (req, res) => {
	res.sendfile('index.html');
})

app.post("/test",upload.single('photof'), function (req, res) {
	
	console.log(req.file);
	//reduce.toCanvas(req.file.,1);
		//console.log(req);
	//let photo = req.body;
	//console.log(photo);
	
//	console.log(req.body.photof);
	
	//canvasf=reduce.toCanvas(req.body,1);
	//console.log('Uploaded: ', req.body.photoF);
	//console.log(typeof(req.body));
	//var formData = req.body;
	//console.log(req);
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

