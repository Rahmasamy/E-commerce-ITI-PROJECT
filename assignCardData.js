import CardOperations from './CardOperations.js';
export function assignCardData(product) {
   
    const cardOps = CardOperations();
    const img = document.getElementById('imagecart');
    const title = document.getElementById('titlecart');
    const descrip = document.getElementById('descriptioncart');
    const rate = document.getElementById('ratingcart');
    const price = document.getElementById('pricecart');
   
    img.src = product.img;
    title.innerHTML = product.title;
    descrip.innerHTML = product.description;
    rate.innerHTML = `rating: ${product.rating}`;
    price.innerHTML = `$${product.price}`;
    

    const obj = {
        id:product.id,
        img:product.img,
        title:product.title,
        desc:product.description,
        rating:product.rating,
        price:product.price,
        quant:cardOps.getFinalNum(),
        reviews:product.reviews
    }

      let products = JSON.parse(localStorage.getItem('products')) || [];     
      products.push(obj);
      localStorage.setItem('products', JSON.stringify(products));
      

}

