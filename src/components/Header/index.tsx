import ListNavigation from "./ListNavigation";
import ListTopMenu from "./ListTop";
import {
    Box,
    Burger, Button, Form,
    Head, Input,
    InputMenuMobile,
    Logo,
    LogoLink,
    Menu,
    Search,
    Top,
    Nav, NavList, NavText, NavItem, NavLink, NavPhone, NavLinkPhone, NavIcon
} from "./style";

const Header = () => {
    return (
        <Head>
            <InputMenuMobile type='checkbox' id='MenuMobile'/>
            <Box>
                <Burger htmlFor='MenuMobile'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </Burger>
                <Top>
                    <Logo>
                        <LogoLink href='/' title='LOGO'>
                            LOGO
                        </LogoLink>
                    </Logo>
                    <Search>
                        <div>
                            <Form>
                                <Button/>
                                <Input placeholder='Product SKU, Name…'
                                       type='text'/>
                            </Form>
                        </div>
                    </Search>
                    <Menu>
                        <ListTopMenu/>
                        <ListNavigation/>
                    </Menu>
                </Top>
                <Nav>
                    <NavList>
                        <NavItem>
                            <NavLink href='#' title='Products'>
                                Products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' title='Resources'>
                                Resources
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' title='Services'>
                                Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' title='Locations'>
                                Locations
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' title='Careers'>
                                Careers
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' title='Support'>
                                Support
                            </NavLink>
                        </NavItem>
                        <NavPhone>
                            <NavLinkPhone href='tel:+(844) 434-672'>
                                <NavIcon/>
                                <NavText>+(844) 434-672</NavText>
                            </NavLinkPhone>
                        </NavPhone>
                    </NavList>
                </Nav>
            </Box>
        </Head>
    );
};
export default Header;