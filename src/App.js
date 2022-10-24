import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {FavouriteFilmsPage, MovieInfoPage, MoviesPage, NotFoundPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'/movieInfo'} element={<MovieInfoPage/>}/>
                    <Route path={'/favourites'} element={<FavouriteFilmsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
