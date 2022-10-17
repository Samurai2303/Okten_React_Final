import {useForm} from "react-hook-form";
import css from './header.module.css';
import {UserInfo} from "../userInfo/UserInfo";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

function Header() {

    let {reset, register, handleSubmit, formState: {isValid}} = useForm();
    let dispatch = useDispatch();
    let {keywordsMovies, movie} = useSelector(state => state.moviesReducer);

    async function submit(data) {
        await dispatch(moviesActions.getKeywordsMovies({keyword: data.movieName}));
        await dispatch(moviesActions.clearMovies());
        for (let movieItem of keywordsMovies) {
            await dispatch(moviesActions.getMovieInfo({id: movieItem.id}));
            await dispatch(moviesActions.addMovie(movie));
        }
        reset();
    }

    return (
        <div className={css.wrap}>
            <p>Find Movie</p>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'Enter movie name'} {...register('movieName', {required: true})}/>
                <button disabled={!isValid}>Search</button>
            </form>
            <UserInfo/>
        </div>
    );
}

export {Header};
