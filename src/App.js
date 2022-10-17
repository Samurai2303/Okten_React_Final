import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'/movieInfo'} element={<MovieInfoPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
