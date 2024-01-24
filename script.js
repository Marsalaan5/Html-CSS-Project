const cart = {};

// Function to add a product to the cart
function addToCart(product1) {
    if (cart[product1]) {
        cart[product1]++;
    } else {
        cart[product1] = 1;
    }

    alert(`Product added to cart!\n\nCart contents:\n${JSON.stringify(cart, null, 2)}`);
}