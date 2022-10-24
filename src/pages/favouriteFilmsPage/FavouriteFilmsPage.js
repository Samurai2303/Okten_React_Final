import {useSelector} from "react-redux";

import {FavouritesList} from "../../components";
import css from './favouriteFilmsPage.module.css';

function FavouriteFilmsPage() {

    let {theme} = useSelector(state => state.switcherReducer);

    let favMovies = JSON.parse(localStorage.getItem('favorites'));

    return (
        <div className={css.wrap}>
            <div className={theme === 'light' ? `${css.title} ${css.titleColor}` : `${css.title} ${css.titleColorL}`}>
                Favorite movies:
            </div>
            {favMovies?.length ? <FavouritesList movies={favMovies}/> :
                <p className={theme === 'light' ? `${css.noMovies} ${css.noMoviesColor}` : `${css.noMovies} ${css.noMoviesColorL}`}>
                    Have no favorite movies...</p>}
        </div>
    );
}

export {FavouriteFilmsPage};
