// const path=require('path')
// const fs = require("fs");
//
//
//
// const writeStream=fs.createWriteStream(path.join(__dirname,'test.txt'))
//
// for (let i=0;i<20;i++){
//     writeStream.write(i+'\n')
// }
// writeStream.end()
//
//
// const readStream=fs.createReadStream(path.join(__dirname,'test.txt'),{encoding:'utf-8'})
// readStream.on('data', (chunk)=>{
//     console.log(chunk)
// })
// readStream.on('end',()=>{
//         console.log('read end')
//     }
// )
// readStream.on('open',()=>{
//         console.log('read start')
//     }
// )
// readStream.on('error',(e)=>{
//         console.log(e)
//     }
// )
//
// const http=require('http')
// http.createServer((req,res)=>{
//     // req -readable stream
//     // res - writable stream
//     // readStream.pipe(res)
// })









