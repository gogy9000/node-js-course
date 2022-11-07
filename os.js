// const os=require('os')
// const cluster=require('cluster')
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus())
// console.log(cluster.is)
// const cpus=os.cpus()
// if(cluster.isPrimary){
//     for (let i=0; i<cpus.length-2;i++){
//        cluster.fork()
//     }
//     cluster.on('exit',(worker)=>{
//         console.log(`worker pid= ${process.pid} dead`)
//         cluster.fork()
//     })
// }else {
//     setInterval(()=>{
//         console.log(`worker pid= ${process.pid} started`)
//     },5000)
//
// }