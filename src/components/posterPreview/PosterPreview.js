import {posterUrl} from "../../configs";
import css from './posterPrewiew.module.css';

function PosterPreview({path, width}) {

    return (
        <div className={width === 'small'? css.small: css.big}>
            {path ? <img src={`${posterUrl}${path}`} alt="Poster img"/> : <div className={css.noPoster}>No poster found...</div>}
        </div>
    );
}

export {PosterPreview};
