import {useSelector} from "react-redux";

import css from './addToFavourite.module.css';

function AddToFavourite({movie}) {

    let {theme} = useSelector(state => state.switcherReducer);

    let favMovies = JSON.parse(localStorage.getItem('favorites'));

    let findIndex = -10;
    if (favMovies?.length) {
        findIndex = favMovies.findIndex(value => value.id === movie.id);
    }

    console.log(findIndex);

    function click() {

        if (favMovies?.length) {
            if (findIndex >= 0) {
                favMovies.splice(findIndex, 1);
                localStorage.setItem('favorites', JSON.stringify(favMovies));
            } else {
                localStorage.setItem('favorites', JSON.stringify([...favMovies, movie]));
            }
        }

    }

    return (
        <div onClick={() => click()} className={theme === 'light' ? `${css.wrap}` : `${css.wrapL}`}>
            {findIndex >= 0 ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
        </div>
    );
}

export {AddToFavourite};
