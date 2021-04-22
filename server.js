const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const multer  = require("multer"); // для сохранения фалов
const upload = multer({ dest: 'uploads/' })

const bodyParser = require('body-parser'); // обработка форм
const urlencodedParser = bodyParser.urlencoded({extended: false}); // для обработки формы

const reduce = require('image-blob-reduce')();	// blob to canvas
const { createCanvas, Image} = require('canvas');	// canvas
const canvasf = createCanvas(300, 150);	//	canvas 1
const canvasb = createCanvas(300, 150);	//	canvas 2
const ctxf = canvasf.getContext('2d');	//	canvas
const ctxb = canvasb.getContext('2d');	//	canvas

const imagef = new Image();
const imageb = new Image();

app.use(express.static(path.join(__dirname, 'public')));	
app.use("/node_modules", express.static('./node_modules/'));

app.use("/upload", upload.any("filedata"));	// для сохранения используем пакет


app.get('/', (req, res) => {
	res.sendfile('index.html');
})

app.post("/test", upload.array('photo', 2), function (req, res) {
	
	console.log(req.files);
	
	imagef.src = req.files[0];
	imageb.src = req.files[1];
	
	imageb.onload = () =>{	
		imageb.drawImage(imagef, 0, 0, 150, 300);
	}
	console.log(imageb);
	res.send(imageb)
	
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

