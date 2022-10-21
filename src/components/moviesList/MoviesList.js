import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import {moviesActions} from "../../redux";
import css from './moviesList.module.css';
import {LoadingComponent} from "../loadingComponent/LoadingComponent";
import {ErrorComponent} from "../errorComponent/ErrorComponent";

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
        <div className={css.mainWrap}>
            <div className={css.wrap}>
                {moviesError && <ErrorComponent/>}
                {movies.length ? movies.map(value => <MoviesListCard movie={value} key={value.id}/>) :
                    <p className={css.noMoviesFound}>No movies found...</p>}
            </div>
            <div className={movies.length?`${css.navigationBtns}`:`${css.navigationBtns} ${css.noMovies}`}>
                <button disabled={queryPage === 1} onClick={() => prev()} className={css.btnL}>
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <button disabled={queryPage === pagesAmount} onClick={() => next()} className={css.btnR}>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </button>
            </div>
        </div>
    );
}

export {MoviesList};
