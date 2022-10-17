import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {genresActions} from "../../redux";
import {useForm} from "react-hook-form";

function FilterMenu() {

    let {handleSubmit, register} = useForm({mode:"all"});
    let dispatch = useDispatch();
    let {genres, genresError} = useSelector(state => state.genresReducer);

    useEffect(() => {
        dispatch(genresActions.getAll());
    }, [dispatch]);

    console.log('Genres error', genresError);

    function submit(data) {
        console.log(data);
    }

    let input = useRef();

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                {genres.length ? genres.map((value, index) => <label key={index}><input key={index} type={'checkbox'}/>{value.name}</label>) : false}
                <button>save</button>
            </form>
        </div>
    );
}

export {FilterMenu};
