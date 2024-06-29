// Add event listeners to add to cart buttons
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Add product to cart
            const productId = button.dataset.productId;
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(productId);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Product added to cart!");
        });
    });

    // Remove from cart functionality
    const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
    removeFromCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const productId = button.dataset.productId;
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const index = cart.indexOf(productId);
            if (index > -1) {
                cart.splice(index, 1);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Product removed from cart!");
        });
    });
});