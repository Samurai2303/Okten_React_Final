import {useSelector} from "react-redux";

import css from './userInfo.module.css';

function UserInfo() {

    let {theme} = useSelector(state => state.switcherReducer);

    return (
        <div>
            <div className={theme === 'light' ? `${css.wrap} ${css.wrapColor}` : `${css.wrap} ${css.wrapColorL}`}></div>
            <p className={theme === 'light' ? `${css.p} ${css.pColor}` : `${css.p} ${css.pColorL}`}>User</p>
        </div>
    );
}

export {UserInfo};
