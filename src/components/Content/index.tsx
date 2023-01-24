import styled from "styled-components";
import {rem} from "polished";
import mixin from '../App/_vars.style'
import StyleButton from "../App/_button.style";

const ContentBlock = styled.section``
const Box = styled.div`
  border: 1px solid #E2E0DF;
  overflow: hidden;
  border-radius: ${rem('16px')};
`
const BorderBox = styled.div`
  background-color: #ffffff;
  @media ${mixin.device.desktop} {
    padding: ${rem('131px')} ${rem('75px')};
  }
  @media ${mixin.device.tabletOnly} {
    padding: ${rem('80px')} ${rem('60px')};
  }
  @media ${mixin.device.mobile} {
    padding: ${rem('50px')} ${rem('40px')};
  }
  display: flex;
  position: relative;
  &:after {
    background-image: url('/img/bg-block.jpg');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 100% 0;
    display: block;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    min-width: 682px;
    width: 54%;
    @media ${mixin.device.mobile} {
      opacity: 0.8;
    }
    ${mixin.undrag}
  }

  &:before {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    display: block;
    content: '';
    width: 54%;
    min-width: 682px;
    height: 100%;
    ${mixin.undrag}
    background: linear-gradient(90deg, #FFFFFF 7.65%, rgba(255, 255, 255, 0.92) 23.96%, rgba(255, 255, 255, 0) 73.83%);
    @media ${mixin.device.mobile} {
      width: 100%;
      min-width: 0;
      background: linear-gradient(90deg, #FFFFFF 7.65%, rgba(255, 255, 255, 1) 23.96%, rgba(255, 255, 255, 0.5) 73.83%);
    }
  }
`
const ContentBox = styled.div`
  max-width: 600px;
  flex-basis: 600px;
  position: relative;
  z-index: 1;
`
const Title = styled.div`
    font-weight: ${mixin.fontDefault.weightBold};
    font-size: ${rem('35px')};
    line-height: ${rem('42px')};
    color: #212121;
    padding-bottom: ${rem('40px')};
`
const Text = styled.div`
    font-weight: 400;
    font-size: ${rem('22px')};
    line-height: ${rem('27px')};
    padding-bottom: ${rem('40px')};
`
const Button = styled(StyleButton)`
  max-width: 320px;
`

const Content = () => {
    return (
        <ContentBlock>
            <Box>
                <BorderBox>
                    <ContentBox>
                        <Title>Large Inventory Of Power Tools &amp; Accessories</Title>
                        <Text>
                            Find the Aluminum and Stainless Steel items for your project in stock and ready to ship
                            today! Avoid project delays and long lead times in a challenging supply chain for specialty
                            metals
                            and non-ferrous items. We are well stocked and here to serve you with guided support.
                        </Text>
                        <Button>Shop Now</Button>
                    </ContentBox>
                </BorderBox>
            </Box>
        </ContentBlock>
    );
};
export default Content;