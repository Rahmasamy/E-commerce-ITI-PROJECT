const all = document.getElementById('all-productss');
const searchinput=document.getElementById('searching');
let output=[]
searchinput.addEventListener("input",(event)=>{
    const value =event.target.value.toLowerCase()
    output.forEach(matches =>{
        const isVisible = matches.product_name.toLowerCase().includes(value)
        matches.Element.classList.toggle("hide",!isVisible)
    })
})

fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                const allproductss = data.products;

                output=allproductss.map(product => {
                    // create productBox
                    const allproductDiv = document.createElement('div');
                    allproductDiv.className = 'productBox';
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

                    // Display the mini cart for a single product.
                    allproductDiv.addEventListener('click',() => {
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
                            setXicon.innerHTML = `see more  <i class="fa-solid fa-arrow-right rightArrow"></i>`
                            setXicon.className = "seeMore"
                            popUpElement.appendChild(setXicon);

                            setXicon.addEventListener('click',() => {
                                // const productId = 1; // Replace with the actual product ID
                                window.location.href = `singleProduct.html?id=${data.id}`;
                            })

                            document.body.appendChild(popUpElementContainer);

                        });
                    })
                    return {product_img :product.thumbnail,product_name:product.title,product_price:`$${product.price}`,Element:allproductDiv}

                });
            })
            .catch(error => console.error('Error fetching data:', error));