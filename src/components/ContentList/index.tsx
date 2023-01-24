
import styled from "styled-components";
import {rem} from "polished";
import mixin from "../App/_vars.style";
import svg from '../App/_sprites.style';

export const BoxList = styled.div`
  display: flex;
  max-width: 1008px;
  margin-left: auto;
  margin-right: auto;
  @media ${mixin.device.desktop} {
    justify-content: space-around;
  }
  @media ${mixin.device.touching} {
    flex-wrap: wrap;
    justify-content: center;
  }
}`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media ${mixin.device.tabletOnly} {
    max-width: 48%;
    flex-basis: 48%;
  }
  @media ${mixin.device.mobile} {
    padding: ${rem('20px')} 0;
  }
  @media ${mixin.device.desktop} {
    height: 130px;
  }
`
export const Name = styled.div`
  font-weight: ${mixin.fontDefault.weightBold};
  @media ${mixin.device.desktop} {
    font-size: ${rem('25px')};
  }
  @media ${mixin.device.touching} {
    font-size: ${rem('20px')};
    text-align: center;
  }
  color: #212121;
`
export const Icon = styled.div<{icons: string}>`
  ${props =>(props.icons  === 'catalog' ?  `${svg.sprites.catalog}`: props.icons  === 'support'?  `${svg.sprites.support}`: `${svg.sprites.ideas}`)}
`
const ContentList = () => (
     <section>
         <div>
             <BoxList>
                 <Item>
                     <Icon icons="catalog"/>
                     <Name>Products Catalog</Name>
                 </Item>
                 <Item>
                     <Icon icons="support"/>
                     <Name>24/7 Customer Support</Name>
                 </Item>
                 <Item>
                     <Icon icons="ideas"/>
                     <Name>Product Ideas</Name>
                 </Item>
             </BoxList>
         </div>
     </section>
 );
export default ContentList;