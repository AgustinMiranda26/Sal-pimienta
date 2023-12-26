const express = require('express');
const path = require('path');
const app = express()
const port = 3030;
const indexRouter=require('./routes/index')
const detailRouter=require('./routes/detail')

//CONFIGURACIONES
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//CONFIGURACION DE EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//RUTAS
app.use('/',indexRouter)
app.use('/detalle',detailRouter)


//CARPETA PUBLICA
app.use(express.static (path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`)
})









