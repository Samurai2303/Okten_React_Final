import StarRatings from "react-star-ratings/build/star-ratings";

function StarsRating({rating}) {

    return (
        <div>
            <StarRatings
                rating={rating}
                numberOfStars={10}
                starRatedColor={'darkred'}
                starEmptyColor={'silver'}
                starDimension={'15px'}
                starSpacing={'4px'}
            />
        </div>
    );
}

export {StarsRating};
