import css from './switcher.module.css';
import {useDispatch, useSelector} from "react-redux";
import {switcherActions} from "../../redux";

function Switcher() {

    let dispatch = useDispatch();
    let {theme} = useSelector(state => state.switcherReducer);

    function change() {
        dispatch(switcherActions.changeTheme());
        console.log(theme);
    }

    return (
        <div className={css.wrap}>
            <input type="checkbox" id={"switch"} className={css.input} onChange={() => change()}/>
            <label htmlFor={"switch"} className={css.label}></label>
        </div>
    );
}

export {Switcher};
