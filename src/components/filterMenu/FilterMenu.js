import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresActions, moviesActions} from "../../redux";
import {useForm} from "react-hook-form";

function FilterMenu() {

    let {handleSubmit, register} = useForm();
    let dispatch = useDispatch();
    let {genres, genresError} = useSelector(state => state.genresReducer);
    let {moviesLoading} = useSelector(state => state.moviesReducer);

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

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <p>Search by genres</p>
                    {genresError && <p>Error(</p>}
                    {genres.length ? genres.map((value, index) => <label key={index}>
                        <input key={index} type={'checkbox'} {...register(`${value.name}`)}/> {value.name}
                    </label>) : false}
                </div>
                <label><input type='checkbox' {...register('adult')}/>Show adult films</label>
                <select onChange={(event) => change(event)}>
                    <option value={'popularity.asc'}>popularity.asc</option>
                    <option value={'popularity.desc'}>popularity.desc</option>
                    <option value={'release_date.asc'}>release_date.asc</option>
                    <option value={'release_date.desc'}>release_date.desc</option>
                    <option value={'revenue.asc'}>revenue.asc</option>
                    <option value={'revenue.desc'}>revenue.desc</option>
                    <option value={'primary_release_date.asc'}>primary_release_date.asc</option>
                    <option value={'primary_release_date.desc'}>primary_release_date.desc</option>
                    <option value={'original_title.asc'}>original_title.asc</option>
                    <option value={'original_title.desc'}>original_title.desc</option>
                    <option value={'vote_average.asc'}>vote_average.asc</option>
                    <option value={'vote_average.desc'}>vote_average.desc</option>
                    <option value={'vote_count.asc'}>vote_count.asc</option>
                    <option value={'vote_count.desc'}>vote_count.desc</option>
                </select>
                <button>Search</button>
            </form>
            {moviesLoading && <p>Loading...</p>}
        </div>
    );
}

export {FilterMenu};
