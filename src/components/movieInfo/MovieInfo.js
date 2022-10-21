import {PosterPreview} from "../posterPreview/PosterPreview";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {AdultWarning} from "../adultWarning/AdultWarning";
import {StarsRating} from "../starsRating/StarsRating";
import css from './movieInfo.module.css';

function MovieInfo({movie}) {

    console.log(movie);

    let genres = '';
    for (let genre of movie.genres) {
        genres = genres.concat(`|${genre.name}`);
    }
    genres = genres.replace('|', '');

    return (
        <div>
            {movie ? <div className={css.wrap}>
                <PosterPreview width={'big'} path={movie.poster_path}/>
                <div className={css.info}>
                    <div className={css.titlesAndRating}>
                        <div className={css.titles}>
                            <p className={css.title}>Title: {movie.title}</p>
                            <p>Original title: {movie.original_title}</p>
                        </div>
                        <div>
                            {movie.adult && <AdultWarning/>}
                            <div>
                                <StarsRating size={'big'} rating={movie.vote_average}/>
                                <p className={css.votes}>Votes: {movie.vote_count}</p>
                            </div>
                        </div>
                    </div>
                    <GenreBadge genres={genres}/>
                    <p className={css.description}>Description: {movie.overview}</p>
                    <p className={css.releaseDate}>Release date: {movie.release_date}</p>
                    <div className={css.companies}>Production companies: {movie.production_companies.map(value => <p
                        key={value.id}>{value.name}</p>)}</div>
                    <p className={css.budget}>Budget: {movie.budget}</p>
                    <p className={css.revenue}>Revenue: {movie.revenue}</p>
                </div>
            </div> : false}
        </div>
    );
}

export {MovieInfo};
