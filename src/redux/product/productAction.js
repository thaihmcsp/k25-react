export function addProductAction (newProduct) {
    return {
        type: 'product/addProduct',
        payload: newProduct
    }
}

export function deleteProductAction (productId) {
    return {
        type: 'product/deleteProduct',
        payload: productId
    }
}