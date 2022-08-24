const {loadProducts , storeProducts} = require('../data/db_module');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		let products = loadProducts();
		return res.render('products' ,{
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req,res) => {
		const products = loadProducts();
		const product = products.find(product => product.id === +req.params.id);
		return res.render('detail', {
			product,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		return res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const {name,price,discount,description,category} = req.body;
		let products = loadProducts();
		
		const newProduct = {
			id : products[products.length -1].id + 1, // suma un numero al id
			...req.body,
			name : name.trim(),
			price : +price,
			discount : +discount,
			category,
			description : description.trim(),
			image : 'default-image.png'
			
		}

		productsModifay = [...products, newProduct]

		storeProducts(productsModifay);

		return res.redirect('/products')
	},

	// Update - Form to edit
	edit: (req, res) => {

		let productToEdit = loadProducts().find(product => product.id === +req.params.id);
		return res.render('product-edit-form', {
			productToEdit
		})
	},






	// Update - Method to update
	update : (req, res) => {
		const {name, price, discount, description, category} = req.body;
		let productsModify = loadProducts().map(product => {
			if(product.id === +req.params.id){
				return {
					id : product.id,
					name : name.trim(),
			price : +price,
			discount : +discount,
			category,
			description : description.trim(),
			image : product.image
			}
			}
			return product
		}); 
		storeProducts(productsModify);

		return res.redirect('/products/detail/' + req.params.id)
	
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {

		// trae todos los productos modificados y los filtra... muestra todos los productos menos el que coincide con el id
		let productsModify = loadProducts().filter(product => product.id !== +req.params.id);
		
		storeProducts(productsModify);

		return res.redirect('/products')
	}
};

module.exports = controller;