
const listaPlatos = require('../data/platos');



const controller = {
    detail: function (req, res) {
        const id = req.params.id;
        const getProduct = listaPlatos.find(listaPlatos => listaPlatos.id == id);
        if (getProduct) {
            res.render('detalleMenu.ejs', { getProduct })
        }
        res.send(' El plato que esta buscando no existe')
    }
}

module.exports = controller 
