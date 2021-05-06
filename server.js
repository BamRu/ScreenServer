const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');

const multer  = require("multer"); // для сохранения фалов
const upload = multer({ dest: 'uploads/' });

const reduce = require('image-blob-reduce')();	// blob to canvas

const img = new Image;	

app.use(express.static(path.join(__dirname, 'public')));	
app.use("/node_modules", express.static('./node_modules/'));

app.use("/upload", upload.any("filedata"));	// для сохранения используем пакет


app.get('/', (req, res) => {
	res.sendfile('index.html');
})

// app.post("/test", fucntion (req, res){
//app.post("/test", urlencodedParser, function (req, res){
app.post("/test", upload.any(), function (req, res) {
	


mergeImages(["./image/2.png", "./image/1.png"], {
  Canvas: Canvas,
  Image: Image
})
 .then(b64 => {img.src = b64});

	// console.log(req.files[0]);
	console.log(img.src);
	
	res.send(img.src);
	})	


// app.post("/upload", function (req, res) {
   
//     let filedata = req.body;
//     console.log(filedata);
//     if(!filedata)
//         res.send("Ошибка при загрузке файла");
//     else
//         res.send("Файл загружен");
// })

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

