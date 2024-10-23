let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    alert(`${productName} has been added to the cart!`);
    document.querySelector('nav ul li a[href="#"]').innerHTML = `Cart (${cartCount})`;
}
