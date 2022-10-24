import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {Header, Switcher} from "../../components";
import css from './mainLayout.module.css'

function MainLayout() {

    let {theme} = useSelector(state => state.switcherReducer);

    return (
        <div className={theme==='light'?`${css.wrap}`:`${css.wrapL}`}>
            <Header/>
            <Switcher/>
            <Outlet/>
        </div>
    );
}

export {MainLayout};
