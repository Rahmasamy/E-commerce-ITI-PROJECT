// displayProduct.js
export function displayProduct(product) {
    const img = document.getElementById('image');
    const title = document.getElementById('title');
    const descrip = document.getElementById('description');
    const rate = document.getElementById('rating');
    const price = document.getElementById('price');
    const imgsClass = document.querySelector('.product-imgs');
    
   
    img.src = product.img;
    title.innerHTML = product.title;
    descrip.innerHTML = product.description;
    price.innerHTML = `$${product.price}`;
     // Fetch rating and convert to stars
     const starRating = convertRatingToStars(product.rating);
     rate.innerHTML = starRating;
    
    product.images.forEach((ele, idx) => {
        const createImg = document.createElement('img');
        createImg.src = ele;
        imgsClass.appendChild(createImg); // Use appendChild (note the capitalization)
        createImg.addEventListener('click',() => {
            img.src=createImg.src;
            img.style.width="300px";
            img.style.height="300px";
            
        })
    });


}
// Function to convert rating to stars
function convertRatingToStars(rating) {
    const fullStars = Math.floor(rating);
    // 4.5, rating % 1 would be 0.5.
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    // 4.5, full = 4, half = 1 because 0.5 = 0.5 return 1
    const emptyStars = 5 - fullStars - halfStar;

    return '★'.repeat(fullStars) +  '☆'.repeat(halfStar) + '☆'.repeat(emptyStars);
}
