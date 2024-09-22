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

