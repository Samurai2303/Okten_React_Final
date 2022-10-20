import {useForm} from "react-hook-form";
import css from './header.module.css';
import {UserInfo} from "../userInfo/UserInfo";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useNavigate} from "react-router-dom";

function Header() {

    let navigate = useNavigate();
    let {reset, register, handleSubmit, formState: {isValid}} = useForm({mode: "all"});
    let dispatch = useDispatch();
    let {moviesLoading} = useSelector(state => state.moviesReducer);

    async function submit(data) {
        dispatch(moviesActions.resetPage());
        navigate('/');
        await dispatch(moviesActions.searchMovies({movieName: data.movieName}));
        dispatch(moviesActions.setFlag({type: 'search', movieName: data.movieName}));
        reset();
    }

    return (
        <div className={css.wrap}>
            <div className={css.historyBtn}>
                <button className={css.btnL}><i className="fa-solid fa-arrow-left"></i></button>
                <button className={css.btnR}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <p className={css.siteName}>Find Movie</p>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'Enter movie name'} {...register('movieName', {required: true})}/>
                <button disabled={!isValid}>Search</button>
            </form>
            {moviesLoading && <p>Loading...</p>}
            <UserInfo/>
        </div>
    );
}

export {Header};
