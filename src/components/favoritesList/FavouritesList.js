import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import css from './favouritesList.module.css';

function FavouritesList({movies}) {

    return (
        <div className={css.wrap}>
            {movies.map(value => <MoviesListCard key={value.id} movie={value}/>)}
        </div>
    );
}

export {FavouritesList};
