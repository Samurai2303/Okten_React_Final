import {PosterPreview} from "../posterPreview/PosterPreview";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {AdultWarning} from "../adultWarning/AdultWarning";
import {StarsRating} from "../starsRating/StarsRating";
import {AddToFavourite} from "../addToFavourite/AddToFavourite";
import {useSelector} from "react-redux";

function MoviesListCard({movie}) {

    let {genres:genresList} = useSelector(state => state.genresReducer);

    let genres = '';

    if (movie.genres) {
        for (let genre of movie.genres) {
            genres = genres.concat(`|${genre.name}`);
        }
        genres = genres.replace('|');
    }else{
        for (let genreId of movie.genre_ids) {
            let genreItem = genresList.find(value => value.id === genreId);
            genres = genres.concat(`|${genreItem.name}`);
        }
        genres = genres.replace('|', '');
    }

    return (
        <div>
            <PosterPreview path={movie.poster_path?movie.poster_path:movie.backdrop_path}/>
            <div>
                <p>{movie.title}</p>
                {movie.adult && <AdultWarning/>}
            </div>
            <GenreBadge genres={genres}/>
            <div>
                <StarsRating rating={movie.vote_average}/>
                <AddToFavourite/>
            </div>
        </div>
    );
}

export {MoviesListCard};
