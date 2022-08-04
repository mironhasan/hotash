import React from "react";

// data
import button from "../data/button.json";
import menu from "../data/menu.json";

// components
import Section from "../components/elements/Section";
import MultipleMenu from "../components/sidebar/MultipleMenu";
import Logout from "../components/sidebar/Logout";

export default function Sidebar({ drawer }) {
    return (
        <Section as="aside" className={`mc-sidebar ${ drawer }`}>
            <MultipleMenu data={ menu.sidebar }  />
            <Logout data={ button.logout } />
        </Section>
    )
}