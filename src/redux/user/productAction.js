export function addProduct (newProduct) {
    return {
        type: 'product/addProduct',
        payload: newProduct
    }
}

export function deleteProduct (productId) {
    return {
        type: 'product/deleteProduct',
        payload: productId
    }
}