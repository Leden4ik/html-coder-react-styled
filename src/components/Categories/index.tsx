import React, {useState} from "react";
import {catitem} from "../../data";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import svg from '../App/_sprites.style';

// import required modules
import {Navigation} from "swiper";

import styled from "styled-components";
import mixin from '../App/_vars.style';
import StyleButton from "../App/_button.style";
import {rem} from "polished";

const Box = styled.div`
  position: relative;
  overflow: hidden;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Top = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  @media ${mixin.device.mobile} {
    flex-direction: column;
  }
`
const Name = styled.div`
  font-weight: ${mixin.fontDefault.weightBold};
  color: #212121;
  margin-top: ${rem('14px')};
  padding-bottom: ${rem('10px')};
`
const Title = styled.div`
  font-weight: ${mixin.fontDefault.weightBold};
  @media ${mixin.device.desktop} {
    font-size:${rem('25px')};
    line-height: ${rem('30px')};
  }
  @media ${mixin.device.touching} {
    font-size: ${rem('25px')};
    line-height: ${rem('26px')};
  }
`
const Left = styled.div`
  display: flex;
  align-items: center;
  align-content: center;

  @media ${mixin.device.mobile} {
    order: 2;
    width: 100%;
    justify-content: space-between;
  }
`
const Right = styled.div`
  @media ${mixin.device.mobile} {
    order: 1;
  }
  padding-bottom: ${rem('20px')};
`
const Controls = styled.div`
  display: flex;
  margin-left: ${rem('20px')};
`
const ControlsItem = styled.div`
  width: 46px;
  height: 46px;
  background-color: #f5f5f5;
  border-radius: ${mixin.confDefault.radiusRounded};
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 0 ${rem('5px')};

  &.swiper-button-disabled {
    opacity: 0.5;
  }

  &:not(.swiper-button-disabled) {
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition-duration: 0.3s;
    transition-property: transform, box-shadow;
    transition-timing-function: cubic-bezier(0.84, -0.11, 0.49, 1.7);
    will-change: transform, box-shadow;
    &:hover {
      box-shadow: 0 6px 6px -4px rgb(0 0 0 / 55%);
      transform: scale(1.1);
    }
  }`
const Prev = styled(ControlsItem)``
const Next = styled(ControlsItem)``

const IconButton = styled.div`
  ${svg.sprites.livechat}
  margin-left: ${rem('10px')};
`
const Icon = styled.div`
  ${svg.sprites.control}
`
const IconPrev = styled(Icon)`
  transform: rotate(180deg);`
const IconNext = styled(Icon)``
const Button = styled(StyleButton)`
  font-weight: ${mixin.fontDefault.weightBold};
  border-radius: ${rem('25px')};
  &:after {
    border-radius: ${rem('25px')};
  }
  padding-left: ${rem('24px')};
  padding-right: ${rem('24px')};
`
const Pictrue = styled.picture`
  ${mixin.unselectable}
`
const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Categories = () => {
    const [catItem] = useState(catitem);

    const slideItem = catItem.map((item, index) => {
        return (
            <SwiperSlide key={index}>
                <Pictrue>
                    <source srcSet={`img/categories/${item.img}.avif`} type="image/avif"/>
                    <source srcSet={`img/categories/${item.img}.webp`} type="image/webp"/>
                    <Img alt={item.name} src={`img/categories/${item.img}.jpg`}/>
                </Pictrue>
                <Name>{item.name}</Name>
            </SwiperSlide>
        );
    });

    return (
        <section>
            <Box>
                <Top>
                    <Left>
                        <Title>Categories</Title>
                        <Controls>
                            <Prev>
                                <IconPrev/>
                            </Prev>
                            <Next>
                                <IconNext/>
                            </Next>
                        </Controls>
                    </Left>
                    <Right>
                        <Button>
                            Live Chat <IconButton/>
                        </Button>
                    </Right>
                </Top>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: `${Prev}`,
                        nextEl: `${Next}`,
                    }}
                >
                    {slideItem}
                </Swiper>
            </Box>
        </section>
    );
};
export default Categories;
