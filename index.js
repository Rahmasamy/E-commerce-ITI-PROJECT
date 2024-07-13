const allProducts = document.getElementById('products');

fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                const products = data.products.slice(0, 3);

                console.log(products)

                products.forEach(product => {
                    // create productBox
                    const productDiv = document.createElement('div');
                    productDiv.className = 'product shadow-div';
                    productDiv.id = `product-${product.id}`;
                    allProducts.appendChild(productDiv);

                    // create image
                    const img = document.createElement('img');
                    img.src = product.thumbnail;
                    img.alt = product.title;
                    productDiv.appendChild(img);

                    // create title
                    const title = document.createElement('h3');
                    title.className = 'title';
                    title.textContent = product.title;
                    productDiv.appendChild(title);

                    // create price
                    const price = document.createElement('p');
                    price.className = 'price';
                    price.textContent = `$${product.price}`;
                    productDiv.appendChild(price);

                    a = productDiv.value
                });
                // productDiv.addEventListener('click', () => {
                //         window.location.href = "singleProduct.html";
                //         console.log(productDiv.id)
                //         console.log("productDiv.id")
                // }
                    
            })
            .catch(error => console.error('Error fetching data:', error));
function showSidebar(){
    const Sidebar =document.querySelector('.sidebar');
    Sidebar.style.display='flex'
}
function hideSidebar(){
    const Sidebar =document.querySelector('.sidebar');
    Sidebar.style.display='none'
}

const liB = document.querySelector('.cbeauty');
liB.addEventListener('click', function() {
    window.location.href = 'allProducts.html';
});



