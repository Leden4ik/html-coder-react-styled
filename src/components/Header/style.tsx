import styled from "styled-components";
import mixin from "../App/_vars.style";
import {rem} from "polished";
import svg from "../App/_sprites.style";

export const Head = styled.header`
  position: relative;
`
export const Box = styled.div`
  @media ${mixin.device.desktop} {
    margin-top: ${rem('12px')};
    margin-bottom: ${rem('12px')};
  }
  @media ${mixin.device.touching} {
    margin-top: ${rem('8px')};
    margin-bottom: ${rem('8px')};
  }
`
export const Top = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: center;
  justify-content: space-between;
  width: 100%;

  @media ${mixin.device.touching} {
    flex-wrap: wrap;
  }
`
export const Logo = styled.div`
  @media ${mixin.device.touching} {
    padding-left: ${rem('46px')};
    flex-basis: 48%;
    max-width: 48%;
    order: 1;
  }
`
export const LogoLink = styled.a`
  font-weight:  ${mixin.fontDefault.weightBold};
  font-size: ${rem('37px')};
  line-height: ${rem('45px')};
  /* identical to box height */
  text-transform: uppercase;
  color: #212121;
  white-space: nowrap;
`
export const Search = styled.div`
  width: 100%;
  @media ${mixin.device.desktop} {
    margin-left: ${rem('58px')};
    flex-basis: 480px;
  }
  @media ${mixin.device.touching} {
    order: 3;
    margin-top: ${rem('8px')};
  }
`
export const Form = styled.div`
  background: #f5f5f5;
  border-radius: ${rem('8px')};
  display: flex;
  max-height: 45px;
`
export const Button = styled.button`
  ${svg.sprites.search}
`
export const Input = styled.input`
  width: 100%;
`
export const Burger = styled.label`
  ${mixin.hamburger}
  > span {
    transition-timing-function: ease-out;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    will-change: background-color, opacity, transform;
    transform-origin: center;
  }

  @media ${mixin.device.desktop} {
    display: none;
  }
  @media ${mixin.device.touching} {
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 1;
    transition-timing-function: ease-out;
    transition-duration: 86ms;
    transition-property: left;
    will-change: left;
  }
`
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${mixin.device.desktop} {
    flex-grow: 1;
  }
  @media ${mixin.device.touching} {
    flex-basis: 48%;
    max-width: 48%;
    order: 2;
  }
`
export const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
`
export const ListTop = styled(List)`
  @media ${mixin.device.desktop} {
    margin-bottom: ${rem('9px')};
  }
  @media ${mixin.device.touching} {
    display: none;
  }
`
export const MenuItem = styled.div`
  @media ${mixin.device.desktop} {
    padding: 0 ${rem('8px')};
  }
  @media ${mixin.device.touching} {
    padding: 0 ${rem('4px')};
  }
`
export const MenuLink = styled.a<{ icons: string }>`
  ${props => (props.icons === 'list' ? `${svg.sprites.list}` : props.icons === 'account' ? `${svg.sprites.account}` : props.icons === 'order' ? `${svg.sprites.order}` : props.icons === 'cart' ? `${svg.sprites.cart}` : ``)}
  &:before {
    @media ${mixin.device.desktop} {
      width: 40px;
      height: 39px;
    }
  }
  @media ${mixin.device.desktop} {
    &:hover,
    &:focus {
      mask-image: linear-gradient(-75deg, rgba(0, 0, 0, 0.6) 30%, #000 50%, rgba(0, 0, 0, 0.6) 70%);
      mask-size: 200%;
      animation: shine 1s infinite;
    }
  }
`
export const MenuLinkTop = styled(MenuLink)`
  color: #4859f0;
  border-bottom: 1px solid rgba(72, 89, 240, 0.3);
`
export const MenuCart = styled(MenuLink)`
  &[data-cart-qut] {
    position: relative;
    &:after {
      content: attr(data-cart-qut);
      display: block;
      color: #ffffff;
      background-color: #4a5bf1;
      border: 2px solid #dadefc;
      border-radius: ${rem('10px')};
      font-size: ${rem('12px')};
      position: absolute;
      height: 21px;
      text-align: center;

      @media ${mixin.device.desktop} {
        left: 23px;
      }
      padding: ${rem('4px')};
      top: 0;
      width: auto;
      white-space: nowrap;
      @media ${mixin.device.touching} {
        right: -2px;
      }
    }
  }

  &[data-cart-qut="0"] {
    &:after {
      display: none !important;
    }
  }
`
export const MenuText = styled.div`
  @media ${mixin.device.desktop} {
    white-space: nowrap;
  }
  @media ${mixin.device.touching} {
    display: none;
  }
`
export const Nav = styled.div`
  @media ${mixin.device.desktop} {
    padding-top: 10px;
  }
  @media ${mixin.device.touching} {
    width: calc(100% - 3.25rem);

    border-bottom-right-radius: 16px;
    position: absolute;
    left: -100%;
    transition-timing-function: ease-out;
    transition-duration: 86ms;
    transition-property: left;
    will-change: left;
    top: 0;
    background-color: #ffffff;
    z-index: 100;
  }
`
export const NavList = styled.div`
  display: flex;
  @media ${mixin.device.desktop} {
    align-items: center;
    align-content: center;
  }
  @media ${mixin.device.touching} {
    flex-direction: column;
  }
`
export const NavItem = styled.div`
  @media ${mixin.device.desktop} {
    &:not(:nth-child(1)) {
      padding-left: 10px;
    }

    &:not(:nth-last-child(1)) {
      padding-right: 10px;
    }
  }
`
export const NavLink = styled.a`
  @media ${mixin.device.desktop} {
    font-size: 22px;
    border-bottom: 1px solid rgba(155, 149, 145, 0.5);
    &:hover,
    &:focus {
      mask-image: linear-gradient(-75deg, rgba(0, 0, 0, 0.6) 30%, #000 50%, rgba(0, 0, 0, 0.6) 70%);
      mask-size: 200%;
      animation: shine 1s infinite;
    }
  }
  @media ${mixin.device.touching} {
    align-items: center;
    background-color: #f2f2f2;
    border-bottom: 0.0625rem solid #e0e0e0;
    display: flex;
    line-height: 2rem;
    padding: 6px 20px;
    font-size: 18px;
  ;
  }
  color: #212121;
  font-weight:  ${mixin.fontDefault.weightNormal};
`
export const NavText = styled.div`
  @media ${mixin.device.desktop} {
    border-bottom: 1px solid rgba(72, 89, 240, 0.3);
  }
`
export const NavIcon = styled.div`
  ${svg.sprites.phone}
`
export const NavPhone = styled(NavItem)`
  display: flex;
  @media ${mixin.device.desktop} {
    justify-content: flex-end;
    flex-grow: 1;
    display: flex;
  }
`
export const NavLinkPhone = styled(NavLink)`
  display: flex;
  border: none;
  align-items: center;
  @media ${mixin.device.desktop} {
    font-size: 22px;
  }
  @media ${mixin.device.touching} {
    background-color: #ffffff;
  }
  color: #4859f0;
`

export const InputMenuMobile = styled.input`
  display: none;
  &:checked {
    + ${Box} {
      ${Burger} {
        left: calc(100% - 48px);
        background-color: #ffffff;
        width: 48px;

        span {
          &:nth-child(1) {
            transform: translateX(4px) translateY(7px) rotate(45deg);
          }
          &:nth-child(2) {
            transform: translateX(-4px) translateY(7px) rotate(-45deg);
          }
          &:nth-child(3) {
            opacity: 0;
          }
          &:nth-child(4) {
            opacity: 0;
          }
          &:nth-child(5) {
            opacity: 0;
          }
          &:nth-child(6) {
            opacity: 0;
          }
          &:nth-child(7) {
            transform: translateX(4px) translateY(-7px) rotate(-45deg);
          }
          &:nth-child(8) {
            transform: translateX(-4px) translateY(-7px) rotate(45deg);
          }
        }
      }
      ${Nav} {
        left: 0;
      }
    }
  }
`