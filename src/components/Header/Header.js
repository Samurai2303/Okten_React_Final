import {useForm} from "react-hook-form";
import css from './header.module.css';
import {UserInfo} from "../userInfo/UserInfo";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import {LoadingComponent} from "../loadingComponent/LoadingComponent";

function Header() {

    let navigate = useNavigate();
    let {reset, register, handleSubmit, formState: {isValid}} = useForm({mode: "all"});
    let dispatch = useDispatch();
    let {moviesLoading} = useSelector(state => state.moviesReducer);
    let {theme} = useSelector(state => state.switcherReducer);

    async function submit(data) {
        dispatch(moviesActions.resetPage());
        navigate('/');
        await dispatch(moviesActions.searchMovies({movieName: data.movieName}));
        dispatch(moviesActions.setFlag({type: 'search', movieName: data.movieName}));
        reset();
    }

    return (
        <div className={theme==='light'?`${css.wrap} ${css.wrapShadow}`:`${css.wrap} ${css.wrapShadowL}`}>
            <p className={theme==='light'?`${css.siteName} ${css.siteNameColor}`:`${css.siteName} ${css.siteNameColorL}`}>Find Movie</p>
            <form className={css.form} onSubmit={handleSubmit(submit)}>
                <input className={css.input} type="text" placeholder={'Enter movie name'} {...register('movieName', {required: true})}/>
                <button className={theme==='light'?`${css.searchBtn} ${css.searchBtnColor}`:`${css.searchBtn} ${css.searchBtnColorL}`} disabled={!isValid}><i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <div className={css.loadingBox}>
                {moviesLoading && <LoadingComponent/>}
            </div>
            <UserInfo/>
        </div>
    );
}

export {Header};
