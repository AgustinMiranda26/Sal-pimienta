
// const about = require('../data/about');
// const listaPlatos = require('../data/platos');
const fs= require('fs');
const path= require('path');


const pathPlatos= (path.join(__dirname, ('../data/platos.json')));
const listaPlatosJSON= fs.readFileSync(pathPlatos, 'utf-8')
const listaPlatos= JSON.parse(listaPlatosJSON);

const pathAbout= (path.join(__dirname, ('../data/about.json')));
const about= JSON.parse(fs.readFileSync(pathAbout, 'utf-8'));


const controller={
    index: function(req,res){
        res.render('index.ejs', {listaPlatos, about})
    },
    crearPlato: function (req,res){
        res.render('crearPlato.ejs')
    },
    guardarPlato: function (req,res){
        const platoNuevo= {
            id: Date.now(),
            ...req.body,
            img: req.file.filename || 'default.png'
        }
       listaPlatos.push(platoNuevo)
        //convertir listaPLatos a JSON
        let listaPlatosJSON= JSON.stringify(listaPlatos, null, " ")
        // Escribir el JSON
        fs.writeFileSync(pathPlatos, listaPlatosJSON)
        //redireccion a home
        res.redirect('/')
    },
    editarPlato: function(req,res){
        const id=req.params.id
        const plato= listaPlatos.find(plato => plato.id == id)
        if(plato){
            res.render('actualizarPlato.ejs', {plato:plato})
        } 
        res.send('el producto que quieres editar no existe')
    },
    putPlato: (req,res) =>{
        const {id} =req.params
        const {nombre, descripcionCorta, descripcionDetallada,precio} =req.body
        const platoAEditar= listaPlatos.find(plato=> plato.id == id)
        platoAEditar.nombre = nombre || platoAEditar.nombre
        platoAEditar.descripcionCorta = descripcionCorta || platoAEditar.descripcionCorta
        platoAEditar.descripcionDetallada = descripcionDetallada || platoAEditar.descripcionDetallada
        platoAEditar.precio = precio || platoAEditar.precio
        platoAEditar.img = req.file.filename || platoAEditar.img
        

        fs.writeFileSync(pathPlatos, JSON.stringify(listaPlatos, null, ' '))
        res.redirect('/')
    }
    
}


module.exports=controller 
