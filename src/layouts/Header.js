import React from 'react';

// data
import logo from '../data/logoData';
import user from '../data/userData';
import menu from '../data/menuData';
import icon from '../data/iconData';
import field from '../data/fieldData';

// components
import Logo from '../components/Logo';
import Button from '../components/elements/Button';
import Section from '../components/elements/Section';
import Search from '../components/header/Search';
import Profile from "../components/header/Profile";
import Icons from '../components/header/Icons';
import Group from '../components/structure/Group';


export default function Header({ onClick, drawerIcon }) {

    const [scroll, setScroll] = React.useState("fixed");

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) setScroll("sticky");
        else setScroll("fixed");
    });

    return (
        <Section as="header" className={`mc-header ${ scroll }`}>
            <Group className="mc-header-left">
                <Logo data={ logo } />
                <Button icon={ drawerIcon } onClick={ onClick } className="mc-header-action" />
                <Search data={ field.header.search } />
            </Group>
            <Group className="mc-header-right">
                <Icons data={ icon.header } />
                <Profile data={{ user, menu:menu.user }} />
            </Group>
        </Section>
    );
}

