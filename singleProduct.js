const img = document.getElementById('image');
const title = document.getElementById('title');
const descrip = document.getElementById('description');
const rate = document.getElementById('rating');
const price = document.getElementById('price');

// fetch('https://dummyjson.com/products/`${product.id}`')
fetch('https://dummyjson.com/products/1')
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