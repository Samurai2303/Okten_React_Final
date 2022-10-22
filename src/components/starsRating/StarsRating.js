import StarRatings from "react-star-ratings/build/star-ratings";
import css from './starsRating.module.css';
import {useSelector} from "react-redux";

function StarsRating({rating, size}) {

    let {theme} = useSelector(state => state.switcherReducer);

    return (
        <div
            className={size === 'small' ? theme === 'light' ? `${css.wrapS} ${css.wrapSColor}` : `${css.wrapS} ${css.wrapSColorL}` : theme === 'light' ? `${css.wrapB} ${css.wrapBColor}` : `${css.wrapB} ${css.wrapBColorL}`}>
            <StarRatings
                rating={rating}
                numberOfStars={10}
                starRatedColor={'cyan'}
                starEmptyColor={'#005E5EFF'}
                starDimension={size === 'small' ? '16px' : '30px'}
                starSpacing={size === 'small' ? '2px' : '5px'}
            />
        </div>
    );
}

export {StarsRating};
