import React from 'react';
import styled from "styled-components";
import Display from "./display";
import lengthTest from "./functions/lengthTest";
import ButtonSection from "./buttonSection";
import calculateResult from "./functions/calculateResult";
import confirmNegative from "./functions/confirmNegative";

const Main = styled.div`
  width:15rem;
  margin:0 auto;
  color:#fff;
  border:3px solid rgb(230,147,16);
  box-shadow:inset 0 2px 8px 0 rgba(0, 0, 0, 0.15),0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding:1rem;
  border-radius:10px;
  background:#eeba30;
  margin-top:3rem;
  font-family:Orbitron,san-serif;
`;
const Header = styled.div`
  font-size:0.87em;
  margin-bottom:0.4rem;
  margin-top:-0.5rem;
  color:#ae0001;
  font-weight:600;
`;
export default class CalculatorSection extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      current: ['0'],
      first : [],
      operator:'',
      second: [],
      flag:false
    }
  }
  onCheckInput(value){
    let input = value;
    let arr = this.state.current;
    let firstLength = this.state.first.length;

    switch(input){
      case '.': if(arr.some((e)=>{return e ==='.'})){return;}if(arr.length === 0){arr.push('0');arr.push('.');this.setState({current:arr,first:[],flag:false})}else{arr.push('.');this.setState({current:arr})};break;
      case 'C':arr.pop();this.setState({current:arr});break;
      case 'AC':this.setState({current:['0'],operator:'',first:[],second:[],flag:false});break;
      case '+':
      case '*':
      case '/':
      case '-':
        if(confirmNegative(firstLength,input,arr)){
          arr.length = 0;
          arr.push('-');
          this.setState({current:arr});
        }else  if(firstLength === 0){
            this.setState({operator:input,first:arr,current:[],flag:false})
          }else if(firstLength!==0 && arr.length === 0){
              this.setState({operator:input,second:arr,current:[],flag:false})
            }else{
           this.setState({second:arr},()=>{
            let result = calculateResult(this.state.first,this.state.second,this.state.operator);
            this.setState({first:result,current:[],second:[],operator:input,flag:true})
        })
      };break;
      case '=':
      if(firstLength === 0){
        this.setState({first:arr,current:[]});
        return;
      }
        this.setState({second:arr},()=>{
            let result = calculateResult(this.state.first,this.state.second,this.state.operator);
            this.setState({first:result,current:[],second:[],operator:''})
        })
          break;
      default:
        if(lengthTest(input) || arr.length > 9){
          return;
        }
        if(this.state.operator.length === 0){
          this.setState({first:[]})
        };
        if(arr[0] === '0' && arr[1]!=='.'){
          arr.length = 0;
        }
        arr.push(input);
        this.setState({current:arr,flag:false});
      return;
    }
  }
  render(){
    return(
      <Main>
        <Header>ELECTRONIC CALCULATOR</Header>
        <Display current={this.state.current} operator={this.state.operator} first={this.state.first} second={this.state.second} flag={this.state.flag}/>
        <ButtonSection onClickHandler={this.onCheckInput.bind(this)}/>
      </Main>)
  }
}
