import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {MovieInfo} from "../../components";
import css from './movieInfoPage.module.css';

function MovieInfoPage() {

    let {state: id} = useLocation();
    let dispatch = useDispatch();
    let {movie} = useSelector(state => state.moviesReducer);
    let {theme} = useSelector(state => state.switcherReducer);

    useEffect(() => {
        dispatch(moviesActions.getMovieInfo({id}));
    }, [id, dispatch]);

    return (
        <div className={theme==='light'?`${css.wrap}`:`${css.wrapL}`}>
            {movie ? <MovieInfo movie={movie}/> : false}
        </div>
    );
}

export {MovieInfoPage};
