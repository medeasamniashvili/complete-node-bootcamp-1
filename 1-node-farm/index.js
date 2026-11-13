// const fs = require('fs')
const http = require('http');
const url = require('url');

// const textInput = fs.readFileSync('./starter/txt/input.txt', 'utf-8')
// // console.log(textInput)

// const textOutput = `Updated:\n ${textInput}`
// fs.writeFileSync('./starter/txt/output.txt', textOutput)
// console.log('Output file created') 


const server = http.createServer((req, res) => {
	const pathname = req.url
	res.end('Hello from server')
})

server.listen(8000, '127.0.0.1', () => {
	console.log('listening to requests on port 8000:')
})