import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  text-align:center;
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  grid-auto-rows:minmax(50px, auto);
  grid-gap:0.3rem;
  justify-items:stretch;
  align-items:stretch;
`;
const Button = styled.div`
  cursor:pointer;
  background:#ae0001;
  padding:1rem;
  border-radius:8px;
`;
const ZeroButton = Button.extend`
  grid-column:1/3;
`;
const EqualButton = Button.extend`
  grid-column:4/4;
  grid-row:4/6;
`;

export default class ButtonSection extends React.Component{
    onClickHandle(e){
        this.props.onClickHandler(e.target.innerHTML)
    }
    render(){
        return(
            <Wrapper onClick={this.onClickHandle.bind(this)}>
                <Button>C</Button>
                <Button>CE</Button>
                <Button>/</Button>
                <Button>*</Button>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>-</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>+</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <ZeroButton>0</ZeroButton>
                <Button>.</Button>
                <EqualButton>=</EqualButton>
        </Wrapper>
        )
    }
}