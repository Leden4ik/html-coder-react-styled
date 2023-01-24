import {ListTop, MenuItem,MenuLinkTop} from "./style";

const ListTopMenu = () => (
    <ListTop>
        <MenuItem>
            <MenuLinkTop href='#' title='Request a Sample' icons=''>
                Request a Sample
            </MenuLinkTop>
        </MenuItem>
        <MenuItem>
            <MenuLinkTop href='#' title='Help' icons=''>
                Help
            </MenuLinkTop>
        </MenuItem>
        <MenuItem>
            <MenuLinkTop href='#' title='Contact' icons=''>
                Contact
            </MenuLinkTop>
        </MenuItem>
    </ListTop>
)
export default ListTopMenu
