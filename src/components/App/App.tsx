import * as React from 'react'

import ResetCSS from './_reset.style';
import GlobalStyles, {Main} from './_base.style';

import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import Categories from "../Categories";
import Content from "../Content";
import ContentList from "../ContentList";

function App() {
    return (
        <React.Fragment>
            <ResetCSS/>
            <GlobalStyles/>
            <Main>
                <Header/>
                <Slider/>
                <Categories/>
                <Content/>
                <ContentList/>
                <Footer/>
            </Main>
        </React.Fragment>
    );
}

export default App;
