//-OK- resetProducts(): reinicia la lista de productos y el id.
//-OK- addProduct(name, price): agrega un producto a la lista de productos.
//- removeProduct(id): elimina un producto de la lista de productos.
//- getProducts(): devuelve todos los productos.
//- resetProducts(): reinicia la lista de productos.
//- getProduct(id): devuelve un producto por su id.
//- updateProduct(id, name, price): actualiza un producto por su id.
//-OK- products: array de productos. Por defecto, estará vacío.
//-OK- id: id del producto. Por defecto, será 0. Cada vez que se añada un producto, se incrementará en 1.

// resetProducts() / addProduct(name, price) / removeProduct(id) / getProducts() / resetProducts() / getProduct(id) 
// updateProduct(id, name, price) / products: / id:

let product = []; // Creamops variable product vacía
let id = 0; // Declaramos variable id con valor 0

const resetProducts = () => {
    products = [];
    id = 0;
};

const getProducts = () => {
    return products;
}

// Creamos la función para añadir un producto (name) con su precio (price).
function addProduct (name, price) {
    if (!name) {
        throw new Error ('You must add a name') // Creamos error para que name sea requerido
    } 
    if (!price) {
        throw new Error ('You must add a price') // Creamos error para que el precio sea requerido
    }

    const productHeight = products.some(product => product.name === name);
    if(productHeight) {
        throw new Error ('This product is repeated'); // Si el producto existe, lanza un mensaje de error.
    }

    const newProduct = { 
        id: ++id,
        Producto: name,
        Precio: price
    }
    products.push(newProduct);
    return newProduct;
}

module.exports = {
    resetProducts,
    getProducts,
    addProduct,
}

