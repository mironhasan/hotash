import React from 'react';

// data
import logo from '../data/logo.json';
import user from '../data/user.json';
import icon from '../data/icon.json';
import menu from "../data/menu.json";
import field from '../data/field.json';

// components
import Logo from '../components/Logo';
import Button from '../components/elements/Button';
import Section from '../components/elements/Section';
import Search from '../components/header/Search';
import Profile from "../components/header/Profile";
import Icons from '../components/header/Icons';
import Group from '../components/structure/Group';


export default function Header({ onClick, toggle }) {

    const [scroll, setScroll] = React.useState("fixed");

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) setScroll("sticky");
        else setScroll("fixed");
    });

    return (
        <Section as="header" className={`mc-header ${ scroll }`}>
            <Logo 
                src = { logo.src }
                alt = { logo.alt }
                name = { logo.name }
                href = { logo.href } 
            />
            <Group className="mc-header-left">
                <Button icon="search" className="mc-header-icon search" />
                <Button icon={ toggle } onClick={ onClick } className="mc-header-icon toggle" />
                <Search data={ field.header.search } />
            </Group>
            <Group className="mc-header-right">
                <Icons data={ icon.header } />
                <Profile data={{ user, menu:menu.profile }} />
            </Group>
        </Section>
    );
}

