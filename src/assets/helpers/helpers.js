//function for AvarageRating

export function averageRatingCalc(item) {
    const reviewsRat = item.reviews.map(reviews => (
        reviews.reviewer_rating
    ));
    const sum = reviewsRat.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const averageRating = sum / reviewsRat.length;
    return averageRating;
}