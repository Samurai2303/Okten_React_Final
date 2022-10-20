import {MovieInfo} from "../../components";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useEffect} from "react";

function MovieInfoPage() {

    let {state: id} = useLocation();
    let dispatch = useDispatch();
    let {movie} = useSelector(state => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.getMovieInfo({id}));
    }, [id, dispatch]);

    return (
        <div>
            {movie ? <MovieInfo movie={movie}/> : false}
        </div>
    );
}

export {MovieInfoPage};
