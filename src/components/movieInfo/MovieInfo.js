import {PosterPreview} from "../posterPreview/PosterPreview";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {AdultWarning} from "../adultWarning/AdultWarning";
import {StarsRating} from "../starsRating/StarsRating";

function MovieInfo({movie}) {

    console.log(movie);

    let genres = '';
    for (let genre of movie.genres) {
        genres = genres.concat(`|${genre.name}`);
    }
    genres = genres.replace('|', '');

    return (
        <div>
            {movie ? <div>
                <PosterPreview path={movie.backdrop_path ? movie.backdrop_path : movie.poster_path}/>
                <div>
                    <div>
                        <p>Title: {movie.title}</p>
                        <p>Original title: {movie.original_title}</p>
                    </div>
                    <div>
                        {movie.adult && <AdultWarning/>}
                        <div>
                            <StarsRating rating={movie.vote_average}/>
                            <p>Votes: {movie.vote_count}</p>
                        </div>
                    </div>
                </div>
                <GenreBadge genres={genres}/>
                <p>Description: {movie.overview}</p>
                <p>Release date: {movie.release_date}</p>
                <div>Production companies: {movie.production_companies.map(value => <p
                    key={value.id}>{value.name}</p>)}</div>
                <p>Budget: {movie.budget}</p>
                <p>Revenue: {movie.revenue}</p>
            </div> : false}
        </div>
    );
}

export {MovieInfo};
