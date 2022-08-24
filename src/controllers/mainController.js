const {loadProducts} = require ('../data/db_module')

// coloca los puntos de miles (coloca un punto cada 3 digitos)
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let products = loadProducts(); //traigo todos los productos
		
		// FILTRO LOS PRODUCTOS ; todos aquellos productos que tengan categoria visited y por categoria de oferta
		let productVisited = products.filter(product => product.category === "visited");
		let productInSale = products.filter(product => product.category === "in-sale");

		// envio los dos bloques del producto, uno po categoria
		return res.render('index',{
			productVisited,
			productInSale,
			toThousand


		})
	},
	search: (req, res) => {
		let {keywords} = req.query;
		let products = loadProducts();
		let results = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()));
		return res.render('results',{
			results,
			toThousand,
			keywords
		})
	},
};

module.exports = controller;
