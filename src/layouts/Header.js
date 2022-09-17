import React from 'react';
import { Icons, Search, Profile } from "../components/header";
import { Button, Section, Box } from "../components/elements";
// import Languages from '../components/header/Languages';
import Logo from '../components/Logo';
import data from "../data/mastery/header.json";

export default function Header({ onClick, toggle }) {

    const [scroll, setScroll] = React.useState("fixed");

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) setScroll("sticky");
        else setScroll("fixed");
    });

    return (
        <Section as="header" className={`mc-header ${ scroll }`}>
            <Logo 
                src = { data.logo.src }
                alt = { data.logo.alt }
                name = { data.logo.name }
                href = { data.logo.path } 
            />
            <Box className="mc-header-left">
                <Button 
                    icon = { data.search.icon } 
                    className = "mc-header-icon search" 
                />
                <Button 
                    icon = { toggle } 
                    onClick = { onClick } 
                    className = "mc-header-icon toggle" 
                />
                <Search 
                    icon = { data.search.icon }
                    type = { data.search.type } 
                    placeholder = { data.search.placeholder } 
                />
            </Box>
            <Box className="mc-header-right">
                <Icons data={ data.icons } />
                {/* <Languages /> */}
                {/* <Dropdown className="mc-dropdown">
                    <Dropdown.Toggle className="mc-header-icon mc-dropdown-toggle">
                        <Icon type="language" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end" className="mc-dropdown-paper">

                    </Dropdown.Menu>
                </Dropdown> */}
                <Profile data={ data.profile } />
            </Box>
        </Section>
    );
}

