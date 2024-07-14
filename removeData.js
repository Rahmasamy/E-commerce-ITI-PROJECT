

// removeData.js

export function removeData(productId) {
      
        // Retrieve cart data from local storage
        const cart = JSON.parse(localStorage.getItem('products')) || [];
      
        const productIndex = cart.findIndex(item => item.id === Number(productId));     
        if (productIndex !== -1) {
           
            cart.splice(productIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            const productElement = document.querySelector('.cart .img-single-content');
            console.log(productElement);
           
            if (productElement) {
                productElement.remove();
            }
        }
   
}
