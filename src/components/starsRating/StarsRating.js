import StarRatings from "react-star-ratings/build/star-ratings";
import css from './starsRating.module.css';

function StarsRating({rating, size}) {

    return (
        <div className={size === 'small'?`${css.wrapS}`:`${css.wrapB}`}>
            <StarRatings
                rating={rating}
                numberOfStars={10}
                starRatedColor={'cyan'}
                starEmptyColor={'#005E5EFF'}
                starDimension={size === 'small'?'16px':'30px'}
                starSpacing={size === 'small'?'2px':'5px'}
            />
        </div>
    );
}

export {StarsRating};
