import { fetchProduct } from './fetchProduct.js';

import {assignCardData } from './assignCardData.js'
const addProductBtn = document.getElementById('addCart');
const cart = document.getElementById('cart');
const img = document.querySelector('.cart .image');
const singleContent = document.querySelector('.cart .img-single-content .singleContent');
const closeIcon = document.createElement('i');
closeIcon.classList.add('fas', 'fa-times');

closeIcon.classList.add('close-icon');
closeIcon.style.cursor = 'pointer';

addProductBtn.addEventListener('click', async() => {
        if (window.location.pathname.includes('singleProduct.html')) {
            // Extract product ID from the query string
            const urlParams = new URLSearchParams(window.location.search);
            const productId = urlParams.get('id');

            
            if (productId) {
                // Display the single product that was clicked.
                const product = await fetchProduct(productId);

                if (product) {
                    assignCardData(product);
                    cart.style.display="flex";
                    console.log(img)
                    img.classList.add('show');

                    closeIcon.style.color='white';
                    closeIcon.fontSize='19px';
                    cart.appendChild(closeIcon);
                    closeIcon.addEventListener('click',() => {
                        const cart=document.querySelector('.cart');
                        cart.style.display='none'
                    })
                    singleContent.innerHTML+=`<div class="containerOfTrash">
                        <i class="fas fa-trash"></i>
                    </div>`;

                    const trashIcon = document.querySelector('.fas.fa-trash');
                    trashIcon.addEventListener('click', () => {
                        
                        cart.remove();
                    });


                }
            } else {
                console.error('Product ID not found in the URL');
            }
        }
    });

