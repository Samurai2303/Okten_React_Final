import {Header, Switcher} from "../../components";
import {Outlet} from "react-router-dom";

function MainLayout() {

    return (
        <div>
            <Header/>
            <Switcher/>
            <Outlet/>
        </div>
    );
}

export {MainLayout};
