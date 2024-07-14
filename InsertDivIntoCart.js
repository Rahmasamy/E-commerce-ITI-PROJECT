
// Function to convert rating to stars
function convertRatingToStars(rating) {
    const fullStars = Math.floor(rating);
    // 4.5, rating % 1 would be 0.5.
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    // 4.5, full = 4, half = 1 because 0.5 = 0.5 return 1
    const emptyStars = 5 - fullStars - halfStar;

    return '★'.repeat(fullStars) +  '☆'.repeat(halfStar) + '☆'.repeat(emptyStars);
}


document.addEventListener('DOMContentLoaded', (event) => {
    // Get the products from local storage
    const productsJson = localStorage.getItem('products');
    
    if (productsJson) {
        // Parse the JSON string into an array of products
        const products = JSON.parse(productsJson);
        
        // Get the container div
        let productsContainer = document.getElementById('singlediv-cartpage');
        
        // Loop through the products and create HTML elements for each
        products.forEach(product => {
            // Create a div for each product
            const productDiv = document.createElement('div');
            productDiv.classList.add('productCarTpage');
            
            // Create and append the product image
            const img = document.createElement('img');
            img.src = product.img;
            img.alt = product.title;
            productDiv.appendChild(img);
            
            // Create and append the product title
            const title = document.createElement('h3');
            title.textContent = product.title;
            productDiv.appendChild(title);
            
            
            const desc = document.createElement('p');
            desc.textContent = product.desc;
            productDiv.appendChild(desc);
            
         
            
           // Fetch rating and convert to stars
           const rating = document.createElement('p');
           const starRating = convertRatingToStars(product.rating);
           console.log(starRating);
           console.log(rating);
           rating.id = 'ratingReview';
           rating.innerHTML = starRating;
           
           
            
            // Create and append the product price
            const price = document.createElement('p');
            price.textContent = `$${product.price}`;
            productDiv.appendChild(price);


             // Create and append the product price
             const quanti = document.createElement('p');
             quanti.textContent = `${product.quant}X`;
             productDiv.appendChild(quanti);


            
            // Append the product div to the container
            productsContainer.appendChild(productDiv);
        });
    } else {
        console.error('No products found in local storage');
    }
});
const btnClear=document.getElementById('btn-clear');

// const btnSum=document.getElementById('btn-sum');

const clearPrice=document.getElementById('total-price');
const singledivCartPage=document.getElementById('singlediv-cartpage');
btnClear.addEventListener('click',() => {
    localStorage.clear();
    singledivCartPage.style.display='none';

})

const productsJson = localStorage.getItem('products');
if (productsJson) {
           
            const products = JSON.parse(productsJson);
            
           
            let totalPrice = 0;
            products.forEach(product => {
                totalPrice += product.price * product.quant;
            });
    
            const totalSum=document.getElementById('totalSum')
            console.log(`Total Price: $${totalPrice.toFixed(2)}`);
        
            const totalPriceDiv = document.createElement('div');
            totalPriceDiv.id = 'total-price';

            totalPriceDiv.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
            totalSum.appendChild(totalPriceDiv);
            btnClear.addEventListener('click',() =>{
                totalPriceDiv.innerHTML='';
            })
} else {
            console.error('No products found in local storage');
 }


