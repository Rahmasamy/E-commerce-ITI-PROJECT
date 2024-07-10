const img = document.getElementById('image');
const title = document.getElementById('title');
const descrip = document.getElementById('description');
const rate = document.getElementById('rating');
const price = document.getElementById('price');

document.addEventListener('DOMContentLoaded', (event) => {
     // Check if we are on the singleProduct.html page
    if (window.location.pathname.includes('singleProduct.html')) {
        // Extract product ID from the query string
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        console.log(urlParams);
        
        if (productId) {
            console.log(productId);

            // Display the single product that was clicked.
            fetch(`https://dummyjson.com/products/${productId}`)
                .then(res => res.json())
                .then(data => {
                    const product = data;
                
                    img.src = `${product.thumbnail}`
                    title.innerHTML = `${product.title}`
                    descrip.innerHTML = `${product.description}`
                    rate.innerHTML = `rating: ${product.rating}`
                    price.innerHTML = `$${product.price}`
                
                })
                .catch(error => console.error('Error fetching data:', error));
        }else{
            console.error('Product ID not found in the URL');
        }
    }
})
