import css from './genreBadge.module.css';
import {useSelector} from "react-redux";

function GenreBadge({genres}) {

  let {theme} = useSelector(state => state.switcherReducer);

  return (
      <div className={theme==='light'?`${css.wrap} ${css.wrapColor}`:`${css.wrap} ${css.wrapColorL}`}>{genres}</div>
  );
}

export {GenreBadge};
