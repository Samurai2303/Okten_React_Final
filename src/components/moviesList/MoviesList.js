import {useSelector} from "react-redux";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";

function MoviesList() {

    let {movies} = useSelector(state => state.moviesReducer);

    return (
        <div>
            {movies.length ? movies.map(value => <MoviesListCard movie={value} key={value.id}/>) :
                <p>No movies found...</p>}
        </div>
    );
}

export {MoviesList};
