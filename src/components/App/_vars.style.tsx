import {keyframes} from 'styled-components'

const fontDefault = {
    fontSize: `16px`,
    size1: `3rem`,
    size2: `2.5rem`,
    size3: `2rem`,
    size4: `1.5rem`,
    size5: `1.25rem`,
    size6: `1rem`,
    size7: `0.75rem`,
    weightLight: `300`,
    weightNormal: `400`,
    weightMedium: `500`,
    weightSemibold: `600`,
    weightBold: `700`,
}

const confDefault = {
    // Spacing
    blockSpacing: `1.5rem`,
    // Miscellaneous
    easing: `ease-out`,
    radiusSmall: `2px`,
    radius: `8px`,
    radiusLarge: `6px`,
    radiusRounded: `290486px`,
    speed: `86ms`,
    sizeSmall: `${fontDefault.size7}`,
    sizeNormal: `${fontDefault.size6}`,
    $sizeMedium: `${fontDefault.size5}`,
    sizeLarge: `${fontDefault.size4}`,
}

const shine = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const gap = {
    sizeGap: 32,
}

const undrag = `
    user-drag: none;
    -webkit-user-drag: none;
`

const unselectable = `
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
`

const size = {
    mobile: 576,
    tablet: 769,
    desktop: `${960 + (2 * gap.sizeGap)}`,
    widescreen: `${1152 + (2 * gap.sizeGap)}`,
    fullHD: `${1344 + (2 * gap.sizeGap)}`,
}

const device = {
    mobileUntil: `screen and (max-width:${size.mobile - 1}px)`,
    mobileMin: `screen and (min-width: ${size.mobile}px) `,
    mobile: `screen and (max-width: ${size.tablet - 1}px)`,
    tablet: `screen and (min-width: ${size.tablet}px), print`,
    tabletOnly: `screen and (min-width: ${size.tablet}) and (max-width: ${Number(size.fullHD) - 1}px)`,
    touching: `screen and (max-width: ${Number(size.desktop) - 1}px)`,
    desktop: `screen and (min-width: ${size.desktop}px)`,
    desktopOnly: `screen and (min-width: ${size.desktop}) and (max-width: ${Number(size.widescreen) - 1}px)`,
    widescreenUntil: `screen and (max-width: ${Number(size.widescreen) - 1}px)`,
    widescreen: `screen and (min-width: ${size.widescreen}px)`,
    widescreenOnly: `screen and (min-width: ${size.widescreen}) and (max-width: ${Number(size.fullHD) - 1}px) `,
    fullHDUntil: `screen and (max-width: ${Number(size.fullHD) - 1}px)`,
    fullHD: `screen and (min-width: ${size.fullHD})`,
};

const hamburger = `
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    cursor: pointer;
    span {
        position: absolute;
        width: 10px;
        height: 1px;
        transition-timing-function: $easing;
        transition-duration: $speed;
        transition-property: background-color, opacity, transform;
        transform-origin: center;
         will-change: background-color, opacity, transform;
        background-color: currentColor;

    &:nth-child(1) {
            left: calc(50% - 12px);
            top: calc(50% - 10px);
        }

    &:nth-child(3) {
            left: calc(50% - 12px);
            top: calc(50% - 3px);
        }

    &:nth-child(5) {
            left: calc(50% - 12px);
            top: calc(50% + 3px);
        }

    &:nth-child(7) {
            left: calc(50% - 12px);
            top: calc(50% + 10px);
        }

    &:nth-child(2) {
            left: calc(50% + 2px);
            top: calc(50% - 10px);
        }

    &:nth-child(4) {
            left: calc(50% + 2px);
            top: calc(50% - 3px);
        }

    &:nth-child(6) {
            left: calc(50% + 2px);
            top: calc(50% + 3px);
        }

    &:nth-child(8) {
            left: calc(50% + 2px);
            top: calc(50% + 10px);
        }
    }
`
export default {size, device, shine, confDefault, fontDefault, undrag, unselectable, hamburger}