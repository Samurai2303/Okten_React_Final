import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import {moviesActions} from "../../redux";
import css from './moviesList.module.css';
import {LoadingComponent} from "../loadingComponent/LoadingComponent";

function MoviesList() {

    let {movies, pagesAmount, queryPage, flag, moviesLoading, moviesError} = useSelector(state => state.moviesReducer);
    let dispatch = useDispatch();

    function prev() {
        dispatch(moviesActions.setPage(queryPage - 1));
        flag.type === 'search' ? dispatch(moviesActions.searchMovies({movieName: flag.movieName})) :
            dispatch(moviesActions.getMovies());
    }

    function next() {
        dispatch(moviesActions.setPage(queryPage + 1));
        flag.type === 'search' ? dispatch(moviesActions.searchMovies({movieName: flag.movieName})) :
            dispatch(moviesActions.getMovies());
    }

    return (
        <div className={css.wrap}>
            {moviesLoading && <LoadingComponent/>}
            {moviesError && <p>Error(</p>}
            {movies.length ? movies.map(value => <MoviesListCard movie={value} key={value.id}/>) :
                <p>No movies found...</p>}
            <div>
                <button disabled={queryPage === 1} onClick={() => prev()}>Prev</button>
                <button disabled={queryPage === pagesAmount} onClick={() => next()}>Next</button>
            </div>
        </div>
    );
}

export {MoviesList};
