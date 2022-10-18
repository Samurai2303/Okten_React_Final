import {posterUrl} from "../../configs";

function PosterPreview({path}) {

  return (
      <img src={`${posterUrl}${path}`} alt="Poster img"/>
  );
}

export {PosterPreview};
