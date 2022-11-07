
const PORT=process.env.PORT||5001
const router=require('./src/user-router')
const Application=require('./application')
const app=new Application()
const jsonParser=require('./jsonParser')
const urlParser=require('./urlParser')
app.use(urlParser('http://localHost:5001'))
app.use(jsonParser)

app.addRouter(router)


app.listen(PORT,()=>{
    console.log(`localhost started on ${PORT} port`)
})