import css from './genreBadge.module.css';

function GenreBadge({genres}) {

  return (
      <div className={css.wrap}>{genres}</div>
  );
}

export {GenreBadge};
