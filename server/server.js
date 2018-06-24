// let http = require('http');

// const server = http.createServer((req,res)=>{
	// res.statusCode = 200;
	// res.setHeader('Content-Type', 'text/plain');
	// res.end(`666 ok ${port}`);
// })

// server.listen(3000,()=>{
	// console.log(`ok~`)
// })

const router =require('koa-router')()

const index = require('./index')
const login = require('./login')
