const { 
    resetProducts, 
    addProduct, 
    removeProduct, 
    getProducts, 
    getProduct, 
    updateProduct
} = require('./product');

// Test para añadir producto
describe ('addProduct', () => {
    beforeEach(() => {
        resetProducts();
    });

    // Añadimos el producto
    it('should add a product', () => {
        expect(addProduct('Product1', 100)).toEqual({
            id: 1,
            Producto: 'Product1',
            Precio: 100
        });
    });


    // Si el producto existe, debe generar un error
    it('This product is repeated', () => {
        expect(() => addProduct('Product1', )).toThrow('')
    })


    // Creamos error para que name sea requerido
    it('Should throw a new error if you do not add the name', () => {
        expect(() => addProduct('Product1', )).toThrow('You must add a price')
    })


    // Creamos error para que  price sea requerido
    it('Should throw a new error if you do not add the price', () => {
        expect(() => addProduct('', 100)).toThrow('You must add a name')
    })
});


// Test para eliminar un producto
describe ('removeProduct', () => {
    beforeEach(() => {
        resetProducts();
        addProduct('Product', 100)
    });

    // Eliminación del producto según el id
    it('Should remove the product based on the id',() => {
        removeProduct(1);
        const products = getProduct();
        expect(products.length).toEqual(0);
    });

    // Genera un nuevo error si no encuentra el producto
    it('Should throw an error if it not contain the product',()=>{
        removeProduct(1)
        expect(() => removeProduct(1)).toThrow('Product not found');
    });
});


/* Ejercicio de clase

//, getProducts, getProduct, updateProduct
const { resetProducts, addProduct, getProducts, removeProduct} = require('./product');

beforeEach(() => {
  resetProducts();
});

describe('add products', () => {
  it('Should add a products', () => {
    expect(() => addProduct('producto1', 100)).not.toThrow()
    expect(getProducts()).toHaveLength(1)
    expect(getProducts()).toEqual([{id: 0, name: 'producto1', price: 100}])    
  })
  it('Should throw an error if the name or price is not defined', () => {
    expect(() => addProduct()).toThrow()
  })
  it('Product exist', () => {
    addProduct('producto1', 100)
    expect(() => addProduct('producto1', 100)).toThrow()
  })
})

describe('removing products', () => {
  it('should return error', () => {
    addProduct('producto1', 100)
    expect(getProducts()).toHaveLength(1)
    expect(() => removeProduct(5)).toThrow("El producto no existe")
  })
})

*/