import {css} from "styled-components";

const bgS = css`
  &:before {
    background-image: url('/img/svg/sprite.view.svg');
    background-repeat: no-repeat;
  }
`
const iconS = css`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: left;
  align-content: center;
  &:before {
    content: "";
    display: block;
  }
`
const sprites = {
    account: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 65.17412935323384% 53.403141361256544%;
        width: 52px;
        height: 52px;
    }
    `,
    cart: `
   
    ${iconS}
    ${bgS}
    &:before {
        background-position: 99.50980392156863% 25.77319587628866%;
        width: 49px;
        height: 49px;
    }
    `,
    catalog: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 67.94871794871794% 0;
        width: 97px;
        height: 94px;
    }
    `,
    control: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 51.339285714285715% 74.03846153846153%;
        width: 29px;
        height: 35px;
    }
    `,
    ideas: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 0 69.38775510204081%;
        width: 77px;
        height: 96px;
    }
    `,
    list: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 97.59615384615384% 51.03092783505155%;
        width: 45px;
        height: 49px;
    }
    `,
    livechat: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 38.69346733668342% 53.403141361256544%;
        width: 54px;
        height: 52px;
    }
    `,
    order: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 94.4186046511628% 75.51020408163265%;
        width: 38px;
        height: 47px;
    }
    `,
    phone: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 0 100%;
        width: 40px;
        height: 40px;
    }
    `,
    phoneFooter: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 35.81395348837209% 75.1219512195122%;
        width: 38px;
        height: 38px;
    }
    `,
    search: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 100% 0;
        width: 50px;
        height: 50px;
    }
    `,
    support: `
    ${iconS}
    ${bgS}
    &:before {
        background-position: 0 0;
        width: 106px;
        height: 102px;
    }
    `,
};

export default {sprites}