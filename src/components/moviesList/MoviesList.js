import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";
import {ErrorComponent} from "../errorComponent/ErrorComponent";
import css from './moviesList.module.css';

function MoviesList() {

    let {theme} = useSelector(state => state.switcherReducer);
    let {movies, pagesAmount, queryPage, flag, moviesError} = useSelector(state => state.moviesReducer);
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
                    <p className={theme==='light'?`${css.noMoviesFound} ${css.noMoviesFoundColor}`:`${css.noMoviesFound} ${css.noMoviesFoundColorL}`}>No movies found...</p>}
            </div>
            <div className={movies.length? theme==='light'?`${css.navigationBtns} ${css.navigationBtnsColor}`:`${css.navigationBtns} ${css.navigationBtnsColorL}`: theme==='light'?`${css.navigationBtns} ${css.navigationBtnsColor} ${css.noMovies}`:`${css.navigationBtns} ${css.navigationBtnsColorL} ${css.noMovies}`}>
                <button disabled={queryPage === 1} onClick={() => prev()} className={theme==='light'?`${css.btnL} ${css.btnLColor}`:`${css.btnL} ${css.btnLColorL}`}>
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <button disabled={queryPage === pagesAmount} onClick={() => next()} className={theme==='light'?`${css.btnR} ${css.btnRColor}`:`${css.btnR} ${css.btnRColorL}`}>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </button>
            </div>
        </div>
    );
}

export {MoviesList};
