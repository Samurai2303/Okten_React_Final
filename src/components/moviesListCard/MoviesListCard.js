import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import {PosterPreview} from "../posterPreview/PosterPreview";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {AdultWarning} from "../adultWarning/AdultWarning";
import {StarsRating} from "../starsRating/StarsRating";
import {AddToFavourite} from "../addToFavourite/AddToFavourite";
import css from './movieListCard.module.css';

function MoviesListCard({movie}) {

    let navigate = useNavigate();
    let {genres: genresList} = useSelector(state => state.genresReducer);
    let {theme} = useSelector(state => state.switcherReducer);

    let genres = '';

    if (genresList.length) {
        for (let genreId of movie.genre_ids) {
            let genreItem = genresList.find(value => value.id === genreId);
            genres = genres.concat(`|${genreItem.name}`);
        }
        genres = genres.replace('|', '');
    }

    function click() {
        navigate('/movieInfo', {state: movie.id});
    }

    return (
        <div className={css.mainWrap}>
            <div onClick={() => click()}
                 className={theme === 'light' ? `${css.wrap} ${css.wrapColor}` : `${css.wrap} ${css.wrapColorL}`}>
                <PosterPreview path={movie.poster_path} width={'small'}/>
                <div className={css.titleAndA}>
                    <p className={theme === 'light' ? `${css.title} ${css.titleColor}` : `${css.title} ${css.titleColorL}`}>{movie.title}</p>
                    {movie.adult && <AdultWarning/>}
                </div>
                <GenreBadge genres={genres}/>
                <div
                    className={theme === 'light' ? `${css.description} ${css.descriptionColor}` : `${css.description} ${css.descriptionColorL}`}>
                    <b>Description:</b> {movie.overview}
                </div>
                <div className={css.starsAndF}>
                    <StarsRating size={'small'} rating={movie.vote_average}/>
                </div>
            </div>
            <div className={css.mainFavWrap}>
                <div className={theme === 'light' ? `${css.favWrap}` : `${css.favWrapL}`}>
                    <AddToFavourite movie={movie}/>
                </div>
            </div>
        </div>
    );
}

export {MoviesListCard};
