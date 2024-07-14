// Function to convert rating to stars
function convertRatingToStars(rating) {
    const fullStars = Math.floor(rating);
    // 4.5, rating % 1 would be 0.5.
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    // 4.5, full = 4, half = 1 because 0.5 = 0.5 return 1
    const emptyStars = 5 - fullStars - halfStar;

    return '★'.repeat(fullStars) +  '☆'.repeat(halfStar) + '☆'.repeat(emptyStars);
}


export default function CreateReviews(product) {
    const reviewboxes = document.getElementById('boxes');
    console.log(product);
    for(var i = 0; i < product.reviews.length; i++){
        // reviewBox
        const reviewDiv = document.createElement('div');
        reviewDiv.id = 'box';
        reviewboxes.appendChild(reviewDiv);
        
        // rating
        const rating = document.createElement('p');
        rating.id = 'ratingReview';
        const starRatingReview = convertRatingToStars(product.reviews[i].rating);
        rating.textContent = `${starRatingReview}`;
        reviewDiv.appendChild(rating);

        // comment
        const comment = document.createElement('p');
        comment.id = 'comment';
        comment.textContent = `${product.reviews[i].comment}`;
        reviewDiv.appendChild(comment);

        // create date
        const date = document.createElement('h5');
        date.id = 'date';
        // [0]: return first element of the array after splitted
        const splittedDate = product.reviews[i].date.split("T")[0];
        // Split the date into components
        const [year, month, day] = splittedDate.split("-");
        // Format as DD-MM-YYYY
        const formattedDate = `${day}-${month}-${year}`;
        date.textContent = `${formattedDate}`;
        reviewDiv.appendChild(date);

        // reviewBox
        const info = document.createElement('div');
        info.id = 'info';
        reviewDiv.appendChild(info);
        
        // img
        const img = document.createElement('img');
        img.src = `avatar1.png`;
        img.alt = `profile`;
        info.appendChild(img);

        // reviewBox
        const reviewerInfo = document.createElement('div');
        reviewerInfo.id = 'reviewerInfo';
        info.appendChild(reviewerInfo);

        // create date
        const name = document.createElement('h');
        name.id = 'name';
        name.textContent = `${product.reviews[i].reviewerName}`;
        reviewerInfo.appendChild(name);

        // create date
        const email = document.createElement('h4');
        email.id = 'email';
        email.textContent = `${product.reviews[i].reviewerEmail}`;
        reviewerInfo.appendChild(email);
    }

}