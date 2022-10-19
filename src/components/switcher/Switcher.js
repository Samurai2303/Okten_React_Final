import css from './switcher.module.css';
import {useDispatch} from "react-redux";
import {switcherActions} from "../../redux";

function Switcher() {

    let dispatch = useDispatch();

    function change() {
        dispatch(switcherActions.changeTheme());
    }

    return (
        <div>
            <input type="checkbox" id={"switch"} className={css.input} onChange={() => change()}/>
            <label htmlFor={"switch"} className={css.label}></label>
        </div>
    );
}

export {Switcher};
