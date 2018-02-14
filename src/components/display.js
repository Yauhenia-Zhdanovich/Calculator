import React from 'react';
import styled from "styled-components";

const StyledDisplay = styled.div`
  height:80px;
  background:#fff5ee;
  border-radius:10px;
  margin-bottom:1rem;
  color:#000;
  font-size:3rem;
  text-align:right;
  display:grid;
  justify-items:end;
  font-size:2.5rem;
`;
const MinusDisplay = styled.div`
  background:blue;
  grid-column:1/2;
  grid-row:1/4;
  border-radius:10px 0 0 10px; 
`;
const CurrentInputDisplay = styled.div`
  grid-column:2/6;
  grid-row:1/3;
  border-radius:0 10px 0 0; 
`;
const EquationDisplay = styled.div`
  grid-column:2/6;
  font-size:1.2rem;
`;
export default class Display extends React.Component{
    render(){
      let currentInput = '';
      this.props.current.join('');
      if(this.props.current.length === 0 && this.props.second.length === 0){
        currentInput = this.props.first
      }else if(this.props.second.length !== 0){
        currentInput = this.props.second
      }else {
        currentInput = this.props.current;
      }
      return(
        <StyledDisplay>
            <MinusDisplay></MinusDisplay>
            <CurrentInputDisplay>{currentInput}</CurrentInputDisplay>
            <EquationDisplay>{this.props.first}{this.props.operator}{this.props.second}</EquationDisplay>
          </StyledDisplay>
      )
    }
  }