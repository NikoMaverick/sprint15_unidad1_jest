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
// Creamos la función para eliminar un producto por su id
 function removeProduct(idRemove) {
        const deleteProduct = products.find(product => product.id === idRemove); // Buscamos el producto por su indice
        if (deleteProduct === -1) { 
            throw new Error('Product not found'); // Si no exixte el producto, lanza error
        }
        products.splice(deleteProduct, 1); // Con splice, eliminamos el producto del indice
        return product;
    }


module.exports = {
    resetProducts,
    getProducts,
    addProduct,
    removeProduct,
}


/* Ejercicio en clase

let products = []
let id = 0

const resetProducts = () => {
  products = []
  id = 0
}

const addProduct = (name, price) => {
  if(!name || !price) {
    throw new Error("Nombre y precio son requeridos")
  }
  if(products.find(product => product.name === name)) {
    throw new Error("Este producto ya existe")    
  } 
  const product = {name, price, id}
  id++
  products.push(product)
}

const getProducts = () => {
  return products
}

const removeProduct = (idProduct) => {
  const product = products.find(element => element.id === idProduct)
  if(!product) {
    throw new Error("El producto no existe");
  }
  products = products.filter(element => element.id !== idProduct)
  return products
}

module.exports = {
  resetProducts,
  addProduct,
  getProducts,
  removeProduct
}*/
