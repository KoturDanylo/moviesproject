import {Header} from "../Components/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export {MainLayout};