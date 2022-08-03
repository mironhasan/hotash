import React from "react";
import Main from "./Mian";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function PageLayout({ children }) {

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const [drawerClass, setDrawerClass] = React.useState(`${mediaQuery.matches ? "hide" : "show"}`);
    const [drawerIcon, setDrawerIcon] = React.useState(`${mediaQuery.matches ? "menu" : "menu_open"}`);

    const handleDrawer = () => {
        if(drawerClass === "show") { 
            setDrawerClass("hide"); 
            setDrawerIcon("menu"); 
        }
        else { 
            setDrawerClass("show"); 
            setDrawerIcon("menu_open"); 
        }
    };

    return (
        <>
            <Header drawerIcon={ drawerIcon }  onClick={ handleDrawer } />
            <Sidebar drawerClass={ drawerClass } />
            <Main drawerClass={ drawerClass }>
                { children }
                <Footer />
            </Main>
        </>
    )
}