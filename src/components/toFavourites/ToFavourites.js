import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './toFavourites.module.css';

function ToFavourites() {

    let navigate = useNavigate();
    let {theme} = useSelector(state => state.switcherReducer);

    return (
        <div className={theme==='light'?`${css.wrap}`:`${css.wrapL}`} onClick={() => navigate('/favourites')}>
            <div className={theme==='light'?`${css.heart}`:`${css.heartL}`}>
                <i className="fa-solid fa-heart"></i>
            </div>
            <p className={theme==='light'?`${css.text}`:`${css.textL}`}>Favourites</p>

        </div>
    );
}

export {ToFavourites};
