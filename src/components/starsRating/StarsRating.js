import StarRatings from "react-star-ratings/build/star-ratings";
import css from './starsRating.module.css';

function StarsRating({rating}) {

    return (
        <div className={css.wrap}>
            <StarRatings
                rating={rating}
                numberOfStars={10}
                starRatedColor={'cyan'}
                starEmptyColor={'#005E5EFF'}
                starDimension={'16px'}
                starSpacing={'2px'}
            />
        </div>
    );
}

export {StarsRating};
