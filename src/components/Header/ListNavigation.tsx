import {List, MenuItem, MenuLink, MenuText, MenuCart} from "./style";

const ListNavigation = () => (
    <List>
        <MenuItem>
            <MenuLink icons="list" href='#' title='Lists'>
                <MenuText>Lists</MenuText>
            </MenuLink>
        </MenuItem>
        <MenuItem>
            <MenuLink icons="account" href='#' title='Account'>
                <MenuText>Account</MenuText>
            </MenuLink>
        </MenuItem>
        <MenuItem>
            <MenuLink icons="order" href='#' title='Quick Order'>
                <MenuText>Quick Order</MenuText>
            </MenuLink>
        </MenuItem>
        <MenuItem>
            <MenuCart icons="cart" href='#' title='Cart' data-cart-qut={34}>
                <MenuText>Cart</MenuText>
            </MenuCart>
        </MenuItem>
    </List>
)
export default ListNavigation