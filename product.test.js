const { 
    resetProducts, 
    addProduct, 
    removeProduct, 
    getProducts, 
    getProduct, 
    updateProduct
} = require('./product');


describe ('addProduct', () => {
    beforeEach(() => {
        resetProducts();
    });
    it('should add a product', () => {
        expect(() => addProduct('Product1', (100))).tobe( {
            id: 1,
            Nombre: 'Product1',
            Precio: 100
        });
    });

    // Si el producto existe, debe generar un error
    it('This product is repeated', () => {
        expect(() => addProduct()).toThrow('')
    })

    // Creamos error para que name sea requerido
    it('Should throw a new error if you do not add the name', () => {
        expect(() => addProduct('Product1', )).toThrow('You must add a name')
    })

    // Creamos error para que  price sea requerido
    it('Should throw a new error if you do not add the price', () => {
        expect(() => addProduct('', 100)).toThrow('You must add a price type number')
    })
});

