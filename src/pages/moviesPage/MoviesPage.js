import {FilterMenu, MoviesList} from "../../components";
import css from './moviesPage.module.css';

function MoviesPage() {

  return (
      <div className={css.wrap}>
          <FilterMenu/>
          <MoviesList/>
      </div>
  );
}

export {MoviesPage};
