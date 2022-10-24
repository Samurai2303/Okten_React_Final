import {useDispatch, useSelector} from "react-redux";

import {switcherActions} from "../../redux";
import css from './switcher.module.css';

function Switcher() {

    let dispatch = useDispatch();
    let {theme} = useSelector(state => state.switcherReducer);

    function change() {
        dispatch(switcherActions.changeTheme());
    }

    return (
        <div className={theme==='light'?`${css.wrap} ${css.wrapColor}`:`${css.wrap} ${css.wrapColorL}`}>
            <input type="checkbox" id={"switch"} className={css.input} onChange={() => change()}/>
            <label htmlFor={"switch"} className={css.label}></label>
        </div>
    );
}

export {Switcher};
