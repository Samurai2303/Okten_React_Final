import css from './notFoundPage.module.css';
import {useSelector} from "react-redux";

function NotFoundPage() {

    let {theme} = useSelector(state => state.switcherReducer);

    return (
        <div className={theme==='light'?`${css.wrap}`:`${css.wrapL}`}>
            Page not found...
        </div>
    );
}

export {NotFoundPage};
