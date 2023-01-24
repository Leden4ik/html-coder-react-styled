import svg from '../App/_sprites.style';
import mixin from '../App/_vars.style';
import styled from "styled-components";
import StyleButton from "../App/_button.style";
import {rem} from "polished";

const FooterBox = styled.div`
  background-color: #212121;
  border-radius: 16px 16px 0 0;
  color: #ffffff;
  display: flex;
  padding: 27px 23px 13px;
  flex-wrap: wrap;
  @media ${mixin.device.tabletOnly} {
    flex-direction: column;
  }
`
const Menu = styled.div`
  display: flex;
  @media ${mixin.device.desktop} {
    max-width: 70%;
    width: 100%;
    flex-basis: 70%;
  }
  @media ${mixin.device.tabletOnly} {
    justify-content: space-around;
  }
  @media ${mixin.device.mobile} {
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }
  @media ${mixin.device.mobileUntil} {
    justify-content: flex-start;
  }
`
const Box = styled.div`
  @media ${mixin.device.mobile} {
    margin-left: ${rem('20px')};
    margin-right: ${rem('20px')};
    padding-bottom: ${rem('10px')};
  }
  @media ${mixin.device.tabletOnly} {
    margin-right: 20px;
  }
  @media ${mixin.device.desktop} {
    flex-basis: 33.3333333%;
    max-width: 33.3333333%;
    width: 100%;
  }
`
const Title = styled.div`
  font-size: ${rem('20px')};
  line-height: ${rem('24px')};
  font-weight: ${mixin.fontDefault.weightBold};
  color: #6f6f6f;
  padding-bottom: ${rem('23px')};
`
const ItemLink = styled.div`
  padding-top: ${rem('3px')};
  padding-bottom: ${rem('5px')};
`
const FooterLink = styled.a`
  &:hover,
  &:focus {
    mask-image: linear-gradient(-75deg, rgba(0, 0, 0, 0.6) 30%, #000 50%, rgba(0, 0, 0, 0.6) 70%);
    mask-size: 200%;
    animation: ${mixin.shine} 1s infinite;
  }
`
const Phone = styled.span`
  ${svg.sprites.phoneFooter}
`
const Sub = styled.div`
  @media ${mixin.device.touching} {
    margin-top: ${rem('40px')};
  }
  @media ${mixin.device.desktop} {
    max-width: 30%;
    width: 100%;
    flex-basis: 30%;
  }
  display: flex;
  flex-direction: column;
`
const SubBox = styled.div`
  flex-grow: 1;
`
const SubTitle = styled.div`
  font-size: ${rem('16px')};
  color: #6f6f6f;
  padding-bottom: ${rem('21px')};
  font-weight: ${mixin.fontDefault.weightBold};
`
const Label = styled.label`
  display: flex;
  flex-wrap: nowrap;
  background-color: #1b1b1b;
  border-top-left-radius: ${rem('11px')};
  border-bottom-left-radius: ${rem('11px')};
  padding: ${rem('3px')};
`
const Form = styled.form``
const Input = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border-top-left-radius: ${rem('11px')};
  border-bottom-left-radius: ${rem('11px')};
`
const Button = styled(StyleButton)``
const Coppyriter = styled.form`
  flex-grow: 1;
  flex-basis: 100%;
  color: #9b9591;
  text-align: center;
  margin-top: ${rem('28px')};
`
const Img = styled.img`
  @media ${mixin.device.touching} {
      margin-left: auto;
      margin-right: auto;
      margin-top: ${rem('40px')};
    }
`

const Footer = () => (
    <footer>
        <FooterBox>
            <Menu>
                <Box>
                    <Title>Helpful Links</Title>
                    <div>
                        <ItemLink>
                            <FooterLink>
                                Buyer’s Guides
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Calculators'>
                                Calculators
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='All Brands'>
                                All Brands
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Catalg Updates'>
                                Catalg Updates
                            </FooterLink>
                        </ItemLink>
                    </div>
                </Box>
                <Box>
                    <Title>Customer Services</Title>
                    <div>
                        <ItemLink>
                            <FooterLink href='#' title='Express Delivery'>
                                Express Delivery
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Privacy Statement'>
                                Privacy Statement
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Terms of Use'>
                                Terms of Use
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Pricing Policy'>
                                Pricing Policy
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Returns and Refunds'>
                                Returns and Refunds
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Help and FAQ'>
                                Help and FAQ
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Return Points'>
                                Return Points
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Returns and Orders'>
                                Returns and Orders
                            </FooterLink>
                        </ItemLink>
                    </div>
                </Box>
                <Box>
                    <Title>Support</Title>
                    <div>
                        <ItemLink>
                            <FooterLink href='#' title='Contact Us'>
                                Contact Us
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='FAQ'>
                                FAQ
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Feedback'>
                                Feedback
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='Live Chat'>
                                Live Chat
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink href='#' title='My Account'>
                                My Account
                            </FooterLink>
                        </ItemLink>
                        <ItemLink>
                            <FooterLink>
                                <Phone>+(844) 434-672</Phone>
                            </FooterLink>

                        </ItemLink>
                    </div>
                </Box>
            </Menu>
            <Sub>
                <SubBox>
                    <SubTitle>Subscribe to our mailing list to receive exclusive
                        offers and the latest product updates
                    </SubTitle>
                    <Form>
                        <Label>
                            <Input placeholder='Your E-mail' type='text'/>
                            <Button>Subscribe</Button>
                        </Label>
                    </Form>
                </SubBox>
                <picture>
                    <source srcSet='img/footer-pay.avif' type='image/avif'/>
                    <source srcSet='img/footer-pay.webp' type='image/webp'/>
                    <Img alt='Pay' src='img/footer-pay.png'/>
                </picture>
            </Sub>
            <Coppyriter>© «Brand» 2022, All Rights Reserved</Coppyriter>
        </FooterBox>
    </footer>
)
export default Footer;