export async function fetchProduct(productId) {
    try {
       
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await response.json();
        
        return {
            id:product.id,
            img: product.thumbnail,
            title: product.title,
            description: product.description,
            rating: product.rating,
            price: product.price,
            images:product.images,
            quantity:1,
            reviews:product.reviews
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}