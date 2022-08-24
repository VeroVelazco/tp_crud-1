const fs = require('fs');
const path = require('path');


const loadProducts = ( ) => {

    // parsea la lista JSON  

    return JSON.parse(
        fs.readFileSync(path.join(__dirname, './productsDataBase.json'), 'utf-8')
    );

};


// guarda los producos en la lista JSON
const storeProducts = (products) => {

    fs.writeFileSync(path.join(__dirname, './productsDataBase.json'),JSON.stringify(products), 'utf-8')
};



module.exports = {
    loadProducts,
    storeProducts
}