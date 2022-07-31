import React from "react";
import Main from "./Mian";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function PageLayout({ children }) {

    const [drawerClass, setDrawerClass] = React.useState("show");
    const [drawerIcon, setDrawerIcon] = React.useState("menu_open");

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