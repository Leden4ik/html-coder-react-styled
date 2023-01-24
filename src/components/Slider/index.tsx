import React, {useState} from "react";
import {slide} from "../../data";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';
// import "./style.scss"
// import required modules
import {Autoplay, EffectFade, Pagination} from 'swiper';

import styled from "styled-components";
import mixin from '../App/_vars.style';
import StyleButton from "../App/_button.style";
import {rem} from "polished";

const Title = styled.div`
  font-weight: ${mixin.fontDefault.weightBold};
  color: #ffffff;
  @media ${mixin.device.desktop} {
    padding-bottom: ${rem('120px')};
    font-size: ${rem('46px')};
    line-height: ${rem('56px')};
  }
  @media ${mixin.device.tabletOnly} {
    padding-bottom: ${rem('60px')};
    font-size: ${rem('36px')};
    line-height: ${rem('46px')}
  }
  @media ${mixin.device.mobile} {
    padding-bottom: ${rem('40px')};
    font-size: ${rem('28px')};
    line-height: ${rem('36px')};
  }
`
const Button = styled(StyleButton)`
  max-width: 320px;
`
const SliderItem = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${mixin.device.desktop} {
    max-width: 50%;
    padding: 120px 60px 40px;
  }
  @media ${mixin.device.touching} {
    max-width: 582px;
    padding: 40px 60px;
  }
`
const Section = styled.section`
  .swiper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    will-change: transform;
    box-sizing: content-box;

    .swiper-slide {
      @media ${mixin.device.desktop} {
        height: 675px;
      }
      @media ${mixin.device.touching} {
        height: 475px;
      }
      position: relative;
      display: flex;
      align-items: flex-start;
      overflow: hidden;
      @media ${mixin.device.desktop} {
        border-radius: 16px;
      }
      @media ${mixin.device.touching} {
        border-radius: 0;
      }
      &:after, &:before {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        ${mixin.undrag}
      }
      &:after {
        background-image: url("/img/slider/bg-slide.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        content: "";
        width: 100%;
      }
      &:before {
        z-index: 1;
        content: "";
        width: 80%;
        background: linear-gradient(90.36deg, #1f2670 29.82%, rgba(39, 48, 139, 0) 99.68%);
      }
    }

    .swiper-pagination {
      text-align: right;
      padding-right: 20px;

      & .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        display: inline-block;
        background: #ffffff;
        opacity: 0.2;
        margin: 0 5px;
        border-radius: 20px;
        transition: opacity 0.5s, background-color 0.5s, width 0.5s;
        will-change: opacity, background-color, width;
        transition-delay: 0.5s, 0.5s, 0s;
      }

      & .swiper-pagination-bullet-active {
        opacity: 1;
        background: #ffffff;
        width: 26px;
        transition-delay: 0s;
      }
    }
  }
`
const Slider = () => {
    const [slItem] = useState(slide);
    const slider = slItem.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <SliderItem>
                    <Title>
                        {item.title}
                        <br/>
                        {item.info}
                    </Title>
                    <Button>
                        {item.button}
                    </Button>
                </SliderItem>
            </SwiperSlide>
        );
    });
    return (
        <Section>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
            >
                {slider}
            </Swiper>
        </Section>
    )
}
export default Slider;