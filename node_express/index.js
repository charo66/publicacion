const express = require ('express')
const path = require ('path')
const app = express ()

const port = 3000
const public ='public'


app.use ((req, res, next)=> {
    console.log(`recibida la petición : ${req.url}`); 
    next(); 

})

app.use(express.static(
    path.join(__dirname,public)
))


/* app.get ('/', (req,res)=> {
    res.send(res.send('<h1>El servidor Express de Alejandro dice "Hola Mundo"</h1>') )


}) */

/* app.get ('/charo', (req,res)=> {
    res.send(res.send('<h1>"Hola Charo"</h1>') )


})
 */

app.listen(port, () => {
console.log ('Server ejecutandose en http://localhost:' +port)})