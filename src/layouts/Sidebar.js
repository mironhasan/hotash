import React from "react";
import Section from "../components/elements/Section";
import MultipleMenu from "../components/sidebar/MultipleMenu";
import Logout from "../components/sidebar/Logout";
import sidebar from "../data/sidebar.json";

export default function Sidebar({ drawer }) {
    return (
        <Section as="aside" className={`mc-sidebar ${ drawer }`}>
            <MultipleMenu data={ sidebar.navs }  />
            <Logout data={ sidebar.button } />
        </Section>
    )
}