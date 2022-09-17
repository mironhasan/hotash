import React from "react";
import { MultipleMenu, Logout } from "../components/sidebar";
import Section from "../components/elements/Section";
import data from "../data/mastery/sidebar.json";

export default function Sidebar({ drawer }) {
    return (
        <Section as="aside" className={`mc-sidebar ${ drawer }`}>
            <MultipleMenu data={ data.navs }  />
            <Logout data={ data.button } />
        </Section>
    )
}