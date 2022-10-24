import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useForm} from "react-hook-form";

import {genresActions, moviesActions} from "../../redux";
import css from './filterMenu.module.css';

function FilterMenu() {

    let {handleSubmit, register} = useForm();
    let dispatch = useDispatch();
    let {theme} = useSelector(state => state.switcherReducer);
    let {genres, genresError} = useSelector(state => state.genresReducer);

    useEffect(() => {
        dispatch(genresActions.getAll());
    }, [dispatch]);

    async function submit(data) {
        let genresVariable = '';
        for (let genre of genres) {
            if (data[`${genre.name}`]) {
                genresVariable = genresVariable.concat(`,${genre.id}`);
            }
        }
        genresVariable = genresVariable.replace(',', '');
        dispatch(moviesActions.setQueryGenre(genresVariable));
        dispatch(moviesActions.setQueryAdult(data.adult));
        dispatch(moviesActions.resetPage());
        await dispatch(moviesActions.getMovies());
        dispatch(moviesActions.setFlag({type: 'discover', movieName: null}));
    }

    function change(event) {
        dispatch(moviesActions.setQuerySort(event.target.value));
    }

    function arrowClick() {
        document.getElementById('genresWrap').classList.toggle(css.opened);
    }

    return (
        <div className={theme === 'light'?`${css.wrap}`:`${css.wrapL}`}>
            <form onSubmit={handleSubmit(submit)}>
                <div className={theme==='light'?`${css.genresWrap}`:`${css.genresWrapL}`} id={'genresWrap'}>
                    <p className={theme==='light'?`${css.searchByGenres}`:`${css.searchByGenresL}`}>Search by genres <i
                        className={'fa-solid fa-arrow-down'}
                        onClick={() => arrowClick()}></i></p>
                    {genresError && <p>Error(</p>}
                    {genres.length ? genres.map((value, index) => <label key={index}>
                        <input key={index} type={'checkbox'} {...register(`${value.name}`)}/> {value.name}
                    </label>) : false}
                </div>
                <label className={theme==='light'?`${css.adult}`:`${css.adultL}`}><input type='checkbox' {...register('adult')}/>Show adult films</label>
                <select onChange={(event) => change(event)} className={theme==='light'?`${css.select}`:`${css.selectL}`}>
                    <option value={'popularity.asc'}>Popularity asc.</option>
                    <option value={'popularity.desc'}>Popularity desc.</option>
                    <option value={'release_date.asc'}>Release date asc.</option>
                    <option value={'release_date.desc'}>Release date desc.</option>
                    <option value={'revenue.asc'}>Revenue asc.</option>
                    <option value={'revenue.desc'}>Revenue desc.</option>
                    <option value={'primary_release_date.asc'}>Primary release date asc.</option>
                    <option value={'primary_release_date.desc'}>Primary release date desc.</option>
                    <option value={'original_title.asc'}>Original title asc.</option>
                    <option value={'original_title.desc'}>Original title desc.</option>
                    <option value={'vote_average.asc'}>Average vote asc.</option>
                    <option value={'vote_average.desc'}>Average vote desc.</option>
                    <option value={'vote_count.asc'}>Vote count asc.</option>
                    <option value={'vote_count.desc'}>Vote count desc.</option>
                </select>
                <button className={theme==='light'?`${css.searchBtn}`:`${css.searchBtnL}`}>Search</button>
            </form>
        </div>
    );
}

export {FilterMenu};
