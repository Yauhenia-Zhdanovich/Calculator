import React from 'react';
import Footer from './footer';
import CalculatorSection from './calculatorSection';
import styled from 'styled-components';

const Div = styled.div`
    min-height: calc(100vh - 60px);
    box-sizing: border-box;
`;

let App = ()=>{
    return(
        <div>
            <Div>
                <CalculatorSection/>
            </Div>
            <Footer/>
        </div>
    )
}
export default App;