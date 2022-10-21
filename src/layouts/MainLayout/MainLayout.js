import {Header, Switcher} from "../../components";
import {Outlet} from "react-router-dom";
import css from './mainLayout.module.css'
import {useSelector} from "react-redux";

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
