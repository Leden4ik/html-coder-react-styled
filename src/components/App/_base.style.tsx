import styled, {createGlobalStyle} from 'styled-components'
import {rem} from 'polished'
import mixin from "./_vars.style";

const GlobalStyles = createGlobalStyle`
 :root {
    font-size: 16px;
  }
  html,
  body {
   min-width: 320px;
    background-color: #ffffff;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 1;
  }

`
 export const Main = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    section,
    header,
    footer {
      width: 100%;
      @media ${mixin.device.mobileUntil} {
        padding-left: ${rem('8px')};
        padding-right: ${rem('8px')};

      }
      @media ${mixin.device.tabletOnly} {
        padding-left: ${rem('12px')};
        padding-right: ${rem('12px')};

      }
      @media ${mixin.device.desktop} {
        padding-left: ${rem('24px')};
        padding-right: ${rem('24px')};
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;

      }
    }

    section {
      @media ${mixin.device.mobile} {

        padding-bottom: 30px;
        padding-left: 0;
        padding-right: 0;
      }
      @media ${mixin.device.desktop} {

        padding-bottom: 80px;
      }
      @media ${mixin.device.tabletOnly} {

        padding-bottom: 50px;
      }
    }
`

export default GlobalStyles