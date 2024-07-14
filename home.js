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

                    // Display the mini cart for a single product.
                    productDiv.addEventListener('click',() => {
                        fetch(`https://dummyjson.com/products/${product.id}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            // create div containeer(parent)
                            const popUpElementContainer = document.createElement('div');
                            popUpElementContainer.classList.add('popUpElementContainerStyle');

                            // create div containeer(child)
                            const popUpElement = document.createElement('div');
                            popUpElement.classList.add('popElementStyle');
                            popUpElementContainer.appendChild(popUpElement);
                            
                            // create div singleProduct
                            const singleProductImgContainer = document.createElement('div');
                            singleProductImgContainer.classList.add('single-product-container')
                            
                            // create img
                            const singleProductImg = document.createElement('img');
                            singleProductImg.setAttribute("src", `${data.images[0]}`);
                            singleProductImgContainer.appendChild(singleProductImg);

                            // create div to data of image
                            const singleProductDetailsContainer = document.createElement('div');
                            
                            // create h2 price
                            const singleProductPrice = document.createElement('h2');
                            singleProductPrice.className = "price"
                            singleProductPrice.innerHTML =`$${data.price}`;

                            singleProductDetailsContainer.appendChild(singleProductPrice);
                            
                            popUpElement.appendChild(singleProductImgContainer);
                            popUpElement.appendChild(singleProductDetailsContainer);

                            // create h1 see more
                            const setXicon = document.createElement('h1');
                            setXicon.innerHTML = `see more  <i class="fa-solid fa-arrow-right rightArrow gray-things"></i>`
                            setXicon.className = "seeMore"
                            popUpElement.appendChild(setXicon);

                            setXicon.addEventListener('click',() => {
                                // const productId = 1; // Replace with the actual product ID
                                window.location.href = `singleProduct.html?id=${data.id}`;
                            })

                            document.body.appendChild(popUpElementContainer);

                        });
                    })
                });
                    
            })
            .catch(error => console.error('Error fetching data:', error));

