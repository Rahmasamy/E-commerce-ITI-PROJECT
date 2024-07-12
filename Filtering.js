function BeautyCat(){
    fetch('https://dummyjson.com/products/category/beauty')
            .then(res => res.json())
            .then(data => {
                const allproductss = data.products;

                output=allproductss.map(product => {
                    // create productBox
                    const allproductDiv = document.createElement('div');
                    allproductDiv.className = 'product';
                    all.appendChild(allproductDiv);

                    // create image
                    const allimg = document.createElement('img');
                    allimg.src = product.thumbnail;
                    allimg.alt = product.title;
                    allproductDiv.appendChild(allimg);

                    // create title
                    const alltitle = document.createElement('h3');
                    alltitle.className = 'title';
                    alltitle.textContent = product.title;
                    allproductDiv.appendChild(alltitle);

                    // price
                    const allprice = document.createElement('p');
                    allprice.className = 'price';
                    allprice.textContent = `$${product.price}`;
                    allproductDiv.appendChild(allprice);
                    return {product_img :product.thumbnail,product_name:product.title,product_price:`$${product.price}`,Element:allproductDiv}
                });
            })
            .catch(error => console.error('Error fetching data:', error));

}
function FragranceCat(){
    fetch('https://dummyjson.com/products/category/fragrances')
.then(res => res.json())
.then(console.log);

}
function FurnitureCat(){
    fetch('https://dummyjson.com/products/category/furtinure')
.then(res => res.json())
.then(console.log);

}
function GroceriesCat(){
    fetch('https://dummyjson.com/products/category/groceries')
.then(res => res.json())
.then(console.log);

}