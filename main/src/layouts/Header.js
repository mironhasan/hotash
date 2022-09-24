import React, { useContext, useState, useRef } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Logo, DropdownMenu, RoundAvatar, DuelText } from '../components';
import { Button, Section, Box, Icon, Anchor, Input, Text, Image } from "../components/elements";
import { DrawerContext } from '../context/Drawer';
import { ThemeContext } from '../context/Themes';
import data from "../data/master/header.json";

export default function Header() {

    const { drawer, toggleDrawer } = useContext(DrawerContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const searchRef = useRef();
    const [scroll, setScroll] = useState("fixed");
    const [search, setSearch] = useState("");

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) setScroll("sticky");
        else setScroll("fixed");
    });

    document.addEventListener('mousedown', (event) => {
        if (!searchRef.current.contains(event.target)) {
            setSearch("");
        }
    })

    return (
        <Section as="header" className={`mc-header ${ scroll }`}>
            <Logo 
                src = { data?.logo.src }
                alt = { data?.logo.alt }
                name = { data?.logo.name }
                href = { data?.logo.path } 
            />
            <Box className="mc-header-group">
                <Box className="mc-header-left">
                    <Button 
                        icon={ data?.search.icon } 
                        className="mc-header-icon search" 
                        onClick={()=> setSearch("show")}
                    />
                    <Button 
                        icon={ drawer ? "menu_open" : "menu" } 
                        className="mc-header-icon toggle" 
                        onClick={ toggleDrawer } 
                    />
                    <Box className={`mc-header-search-group ${ search }`}>
                        <form className="mc-header-search" ref={ searchRef }>
                            <Button className="material-icons">{ data?.search.icon }</Button>
                            <Input type="search" placeholder={ data?.search.placeholder } />
                        </form>
                    </Box>
                </Box>
                <Box className="mc-header-right">
                    {data?.widgets.map((widget, index) => (
                        widget.dropdown ?
                            <Dropdown key={ index }>
                                <Dropdown.Toggle className={`mc-dropdown-toggle mc-header-icon ${ widget.addClass }`}>
                                    <Icon type="language" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="mc-dropdown-paper">
                                    {widget.dropdown.map((item, index) => (
                                        <Button key={ index } className={`mc-header-language ${ item.check ? item.check  : "" }`}>
                                            <Image src={ item.flag } alt="flag" />
                                            <Text as="span">{ item.name }</Text>
                                        </Button>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        : widget.theme ?
                            <Button 
                                key={ index } 
                                icon={ theme }
                                title={ widget.title }
                                onClick={ toggleTheme }
                                className={`mc-header-icon ${ widget.addClass }`}
                            />
                        :
                            <Anchor 
                                key={ index }
                                href={ widget.path } 
                                icon={ widget.icon }
                                title={ widget.title }
                                badge={ widget.badge }
                                className={`mc-header-icon ${ widget.addClass }`}
                            />
                    ))}
                    <Dropdown className="mc-header-user">
                        <Dropdown.Toggle className="mc-dropdown-toggle">
                            <RoundAvatar src={ data?.profile.src } alt={ data?.profile.alt } size="xs" />
                            <DuelText title={ data?.profile.name } descrip={ data?.profile.username } size="xs" />
                        </Dropdown.Toggle>
                        <DropdownMenu dropdown={ data?.profile.dropdown } />
                    </Dropdown>
                </Box>
            </Box>
        </Section>
    );
}

