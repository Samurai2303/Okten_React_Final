import {useSelector} from "react-redux";

import css from './notFoundPage.module.css';

function NotFoundPage() {

    let {theme} = useSelector(state => state.switcherReducer);

    return (
        <div className={css.wrap}>
            <p className={theme === 'light' ? `${css.lineUp}`:`${css.lineUpL}` }></p>
            <p className={theme === 'light' ? `${css.text} ${css.textColor}` : `${css.text} ${css.textColorL}`}>Page not found...</p>
            <p className={theme === 'light' ? `${css.lineDown}`: `${css.lineDownL}`}></p>
        </div>
    );
}

export {NotFoundPage};
