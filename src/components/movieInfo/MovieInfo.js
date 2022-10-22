import {PosterPreview} from "../posterPreview/PosterPreview";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {AdultWarning} from "../adultWarning/AdultWarning";
import {StarsRating} from "../starsRating/StarsRating";
import css from './movieInfo.module.css';
import {useSelector} from "react-redux";

function MovieInfo({movie}) {

    let {theme} = useSelector(state => state.switcherReducer);

    let genres = '';
    for (let genre of movie.genres) {
        genres = genres.concat(`|${genre.name}`);
    }
    genres = genres.replace('|', '');

    return (
        <div>
            {movie ? <div className={css.wrap}>
                <PosterPreview width={'big'} path={movie.poster_path}/>
                <div className={theme==='light'?`${css.info} ${css.infoColor}`:`${css.info} ${css.infoColorL}`}>
                    <div className={css.titlesAndRating}>
                        <div className={theme==='light'?`${css.titles} ${css.titlesColor}`:`${css.titles} ${css.titlesColorL}`}>
                            <p className={theme==='light'?`${css.title} ${css.titleColor}`:`${css.title} ${css.titleColorL}`}>Title: {movie.title}</p>
                            <p>Original title: {movie.original_title}</p>
                        </div>
                        <div>
                            {movie.adult && <AdultWarning/>}
                            <div>
                                <StarsRating size={'big'} rating={movie.vote_average}/>
                                <p className={theme==='light'?`${css.votes} ${css.votesColor}`:`${css.votes} ${css.votesColorL}`}>Votes: {movie.vote_count}</p>
                            </div>
                        </div>
                    </div>
                    <GenreBadge genres={genres}/>
                    <p className={theme==='light'?`${css.description} ${css.descriptionColor}`:`${css.description} ${css.descriptionColorL}`}>Description: {movie.overview}</p>
                    <p className={theme==='light'?`${css.releaseDate} ${css.releaseDateColor}`:`${css.releaseDate} ${css.releaseDateColorL}`}>Release date: {movie.release_date}</p>
                    <div className={css.companies}>Production companies: {movie.production_companies.map(value => <p
                        key={value.id}>{value.name}</p>)}</div>
                    <p className={theme==='light'?`${css.budget} ${css.budgetColor}`:`${css.budget} ${css.budgetColorL}`}>Budget: {movie.budget}</p>
                    <p className={theme==='light'?`${css.revenue} ${css.revenueColor}`:`${css.revenue} ${css.revenueColorL}`}>Revenue: {movie.revenue}</p>
                </div>
            </div> : false}
        </div>
    );
}

export {MovieInfo};
