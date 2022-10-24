import {useSelector} from "react-redux";

import StarRatings from "react-star-ratings/build/star-ratings";
import css from './starsRating.module.css';

function StarsRating({rating, size}) {

    let {theme} = useSelector(state => state.switcherReducer);

    return (
        <div
            className={size === 'small' ? theme === 'light' ? `${css.wrapS} ${css.wrapSColor}` : `${css.wrapS} ${css.wrapSColorL}` : theme === 'light' ? `${css.wrapB} ${css.wrapBColor}` : `${css.wrapB} ${css.wrapBColorL}`}>
            <StarRatings
                rating={rating}
                numberOfStars={10}
                starRatedColor={theme === 'light' ? 'cyan' : '#0f1724'}
                starEmptyColor={theme === 'light' ? '#005E5EFF' : '#6aa3c5'}
                starDimension={size === 'small' ? '16px' : '30px'}
                starSpacing={size === 'small' ? '2px' : '5px'}
            />
        </div>
    );
}

export {StarsRating};
