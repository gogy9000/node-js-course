// console.log('start')
// fs.mkdir(path.resolve(__dirname,'dir'),
//     (err)=>{
//     if (err){
//         console.log(err)
//         return
//     }
//         console.log('folder create')
//     })
// console.log('end')


// fs.rmdir(path.join(__dirname,'dir'), (err)=>{
//     if (err){
//         console.log(err)
//         return
//     }
//         console.log('folder remove')
//     })


//
// fs.writeFile(path.join(__dirname,'test.txt'), 'azaza',(err)=>{
//     if(err){
//         throw err
//     }
//     console.log('file write')
// })

const fs = require('fs')
const path = require('path')
const stream = require("stream");


exports.asyncWriteFile = (localPath, data) => new Promise((res, rej) => {
    fs.writeFile(path.join(__dirname, localPath), data, (err) => {
        if (err) {
            rej(err.message)
        }
        res('file write')
    })
});
exports.asyncAppendFile = (localPath, data) => new Promise((res, rej) => {
    fs.appendFile(path.join(__dirname, localPath), data, (err) => {
        if (err) {
            rej(err.message)
        }
        res('file append')
    })
})
exports.asyncReadFile = (localPath,encoding) => new Promise((res, rej) => {
    fs.readFile(path.join(__dirname, localPath), {encoding}, (err,data) => {
        if (err) {
            rej(err.message)
        }
        res(data)
    })
})
exports.asyncRemoveFile = (localPath) => new Promise((res, rej) => {
    fs.rm(path.join(__dirname, localPath), (err) => {
        if (err) {
            rej(err.message)
        }
        res('file removed')
    })
})

const readStream=fs.createReadStream(path.join(__dirname,'test.txt'))
readStream.on('data', (chunk)=>{
    console.log(chunk)
})
//
//
//
// asyncWriteFile('test.txt', 'rar')
//     .then((res)=>asyncAppendFile('test.txt', 'azaz'))
//     .then((res)=>asyncAppendFile('test.txt', 'azaz'))
//     .then((res)=>asyncAppendFile('test.txt', 'azaz'))
//     .then((res)=>asyncAppendFile('test.txt', 'azaz'))
//     .then((res)=>asyncAppendFile('test.txt', '11113'))
//     .then((res)=>asyncReadFile('test.txt'))
//     .then(console.log)
//     .then(()=>asyncRemoveFile('test.txt'))
//     .then(console.log)
//     .catch(console.log)