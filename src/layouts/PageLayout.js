import React from "react";
import Main from "./Mian";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

export default function PageLayout({ children }) {

    const location = useLocation();
    const mediaQuery = window.matchMedia("(max-width: 991px)");
    const [drawer, setDrawer] = React.useState( mediaQuery.matches ? false : true );

    return (
        <>
            <Header toggle={drawer ? "menu_open" : "menu"}  onClick={()=> setDrawer(!drawer)} />
            <Sidebar drawer={drawer ? "active" : ""} />
            <Main drawer={drawer ? "active" : ""}>
                <>
                    { children }
                    {location.pathname !== "/message" ? <Footer /> : ""}
                </>
            </Main>
        </>
    )
}