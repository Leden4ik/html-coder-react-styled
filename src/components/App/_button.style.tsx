import {rem} from 'polished'

import styled from "styled-components";
import mixin from './_vars.style'

const StyleButton = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50px;
  cursor: pointer;
  transition-timing-function: ${mixin.confDefault.easing};
  transition-duration: ${mixin.confDefault.speed};
  transition-property: background-color, color;
  will-change: background-color, color;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  border-radius: ${mixin.confDefault.radius};
  background-color: #4859F0;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, .25));
  font-size: ${mixin.fontDefault.fontSize};
  line-height: 100%;
  ${mixin.unselectable};
  @media ${mixin.device.touching} {
    max-width: 220px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 5px;
  }
  @media ${mixin.device.mobileUntil} {
    padding: 0 16px;
  }
  &:before {
    text-align: left;
    margin-right: 10px;
    font-size: ${rem('24px')};
    line-height: 1;
    @media ${mixin.device.mobile} {
      width: auto;
      margin-right: 4px;
      font-size: ${rem('18px')};
    }
  }

  &:after {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    content: "";
    transition: opacity .3s;
    will-change: opacity;
    opacity: 0;
    background-color: rgba(0, 0, 0, .1);
  }

  &:hover:after {
    opacity: 1;
  }
`

export default StyleButton