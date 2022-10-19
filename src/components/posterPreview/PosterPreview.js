import {posterUrl} from "../../configs";

function PosterPreview({path}) {

    return (
        <div>
            {path ? <img src={`${posterUrl}${path}`} alt="Poster img"/> : <div>No poster found...</div>}
        </div>
    );
}

export {PosterPreview};
