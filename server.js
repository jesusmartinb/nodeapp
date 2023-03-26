let express = require('express')
let path = require('path')
let app = express()

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function () {
	console.log('Server levantado en el puerto 3000')
})