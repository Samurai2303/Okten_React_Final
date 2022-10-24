import {useSelector} from "react-redux";

import {posterUrl} from "../../configs";
import css from './posterPrewiew.module.css';

function PosterPreview({path, width}) {

    let {theme} = useSelector(state => state.switcherReducer);

    return (
        <div
            className={width === 'small' ? theme === 'light' ? `${css.small} ${css.smallColor}` : `${css.small} ${css.smallColorL}` : theme === 'light' ? `${css.big} ${css.bigColor}` : `${css.big} ${css.bigColorL}`}>
            {path ? <img src={`${posterUrl}${path}`} alt="Poster img"/> :
                <div
                    className={theme === 'light' ? `${css.noPoster} ${css.noPosterColor}` : `${css.noPoster} ${css.noPosterColorL}`}>
                    No poster found...</div>}
        </div>
    );
}

export {PosterPreview};
