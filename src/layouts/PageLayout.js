import React from "react";
import Main from "./Mian";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function PageLayout({ children }) {

    const mediaQuery = window.matchMedia("(max-width: 991px)");
    const [drawer, setDrawer] = React.useState( mediaQuery.matches ? false : true );

    return (
        <>
            <Header toggle={drawer ? "menu_open" : "menu"}  onClick={()=> setDrawer(!drawer)} />
            <Sidebar drawer={drawer ? "active" : ""} />
            <Main drawer={drawer ? "active" : ""}>
                { children }
                <Footer />
            </Main>
        </>
    )
}