// const Emitter=require('events')
//
// const emitter=new Emitter()
// const callback=(data,data1)=>{
//     console.log('data: ' + data)
//     console.log('data1: ' + data1)
// }
// emitter.once('message',callback)
//
//
//
// const MESSAGE=process.env.message || ''
// if(MESSAGE){
//     emitter.emit('message', MESSAGE,123)
//     emitter.emit('message', MESSAGE,123)
//     emitter.emit('message', MESSAGE,123)
//     emitter.emit('message', MESSAGE,123)
// }else {
//     emitter.emit('message', 'not message',1)
// }
// emitter.removeListener('message',callback)
// emitter.removeAllListeners('message')