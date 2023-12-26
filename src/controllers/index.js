
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
        console.log(req.file);
    }
}

module.exports=controller 
