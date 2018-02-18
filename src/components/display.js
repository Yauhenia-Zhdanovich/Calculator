import React from 'react';
import styled from "styled-components";

const StyledDisplay = styled.div`
  height:80px;
  background:#fcf5ee;
  border-radius:10px;
  margin-bottom:1rem;
  color:#000;
  text-align:right;
  display:grid;
  justify-items:end;
  font-size:1.8rem;
  padding:0.2rem;
  border:3px solid rgb(230,147,16);
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
      let first = '';
      let second = '';
      let arr = this.props.first;
      if(arr.length >10){
        arr.length = 10;
      }
      first = arr.join('');
      if(this.props.first.length !== 0){
        second = this.props.current.join('');
      }
      if(this.props.flag || this.props.current.length === 0){
        currentInput = this.props.first.join('');
      }else{
        currentInput = this.props.current.join('');
      }

      return(
        <StyledDisplay>
            <CurrentInputDisplay>{currentInput}</CurrentInputDisplay>
            <EquationDisplay>{first}{this.props.operator}{second}</EquationDisplay>
          </StyledDisplay>
      )
    }
  }