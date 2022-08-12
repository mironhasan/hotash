import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/elements/Button';
import Section from '../components/elements/Section';
import Search from '../components/header/Search';
import Profile from "../components/header/Profile";
import Icons from '../components/header/Icons';
import Box from '../components/elements/Box';
import header from "../data/header.json";

export default function Header({ onClick, toggle }) {

    const [scroll, setScroll] = React.useState("fixed");

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) setScroll("sticky");
        else setScroll("fixed");
    });

    return (
        <Section as="header" className={`mc-header ${ scroll }`}>
            <Logo 
                src = { header.logo.src }
                alt = { header.logo.alt }
                name = { header.logo.name }
                href = { header.logo.path } 
            />
            <Box className="mc-header-left">
                <Button 
                    icon = { header.search.icon } 
                    className = "mc-header-icon search" 
                />
                <Button 
                    icon = { toggle } 
                    onClick = { onClick } 
                    className = "mc-header-icon toggle" 
                />
                <Search 
                    icon = { header.search.icon }
                    type = { header.search.type } 
                    placeholder = { header.search.placeholder } 
                />
            </Box>
            <Box className="mc-header-right">
                <Icons data={ header.icons } />
                <Profile data={ header.profile } />
            </Box>
        </Section>
    );
}

