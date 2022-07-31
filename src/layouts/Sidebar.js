import React from "react";

// data
import menu from "../data/menuData";
import button from "../data/buttonData";

// components
import Section from "../components/elements/Section";
import MultipleMenu from "../components/sidebar/MultipleMenu";
import Logout from "../components/sidebar/Logout";

export default function Sidebar({ drawerClass }) {
    return (
        <Section as="aside" className={`mc-sidebar ${ drawerClass }`}>
            <MultipleMenu data={ menu.sidebar }  />
            <Logout data={ button.logout } />
        </Section>
    )
}