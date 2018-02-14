import React from 'react';
import styled from "styled-components";
import Display from "./display";
import lengthTest from "./functions/lengthTest";
import isNumber from "./functions/isNumber";
import ButtonSection from "./buttonSection";
import calculateResult from "./functions/calculateResult";

const Main = styled.div`
  width:15rem;
  margin:0 auto;
  color:#fff;
  border:2px solid 	#740001;
  padding:1rem;
  border-radius:10px;
  background:#eeba30;
  margin-top:2rem;
`;

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      current: [],
      first : [],
      operator:'',
      second: []
    }
  }
  onCheckInput(value){
    let input = value;
    if(lengthTest(input)){
      return;
    }
    let arr = this.state.current;
    if(arr.length > 9){return;}
    switch(input){
      case '0': arr.push('0');this.setState({current:arr},()=>{console.log(this.state)});break;
      case '1': arr.push('1');this.setState({current:arr},()=>{console.log(this.state)});break;
      case '2':if(this.state.operator.length === 0){this.setState({first:[]},()=>{console.log(this.state,"after")})}; arr.push('2');this.setState({current:arr},()=>{console.log(this.state)});break;
      case '3':if(this.state.operator.length === 0){this.setState({first:[]},()=>{console.log(this.state,"after")})};arr.push('3');this.setState({current:arr},()=>{console.log(this.state)});break;
      case '4': arr.push('4');this.setState({current:arr},()=>{console.log(this.state)});break;
      case '5': arr.push('5');this.setState({current:arr},()=>{console.log(this.state)});break;
      case '6': arr.push('6');this.setState({current:arr},()=>{console.log(this.state)});break;
      case '7': arr.push('7');this.setState({current:arr},()=>{console.log(this.state)});break;
      case '8': arr.push('8');this.setState({current:arr},()=>{console.log(this.state)});break;
      case '9': arr.push('9');this.setState({current:arr},()=>{console.log(this.state)});break;
      case '.': if(arr.some((e)=>{return e ==='.'})){return;}arr.push('.');this.setState({current:arr},()=>{console.log(this.state)});break;
      case 'CE':arr.pop();this.setState({current:arr});break;
      case '-':
      if(this.state.first.length === 0){
        if(isNumber(arr[arr-1])){
          this.setState({operator:'-',first:arr,current:[]},
            ()=>{console.log(this.state)})
        };
      }else if(this.state.first.length!==0 && arr.length === 0){
          if(isNumber(arr[arr-1])){
            this.setState({operator:'-',second:arr,current:[]},
              ()=>{console.log(this.state)})
        };
      }else{
            this.setState({second:arr},()=>{
              let result = calculateResult(this.state.first,this.state.second,this.state.operator);
              console.log(result);
              this.setState({first:result,current:[],second:[],operator:'-'},()=>{console.log(this.state)})
          })
      };break;
      case '+':
      if(this.state.first.length === 0){
        if(isNumber(arr[arr-1])){
          this.setState({operator:'+',first:arr,current:[]},
            ()=>{console.log(this.state)})
        };
      }else if(this.state.first.length!==0 && arr.length === 0){
          if(isNumber(arr[arr-1])){
            this.setState({operator:'+',second:arr,current:[]},
              ()=>{console.log(this.state)})
        };
      }else{
        this.setState({second:arr},()=>{
          let result = calculateResult(this.state.first,this.state.second,'+');
          console.log(result);
          this.setState({first:result,current:[],second:[],operator:'+'},()=>{console.log(this.state)})
      })
      };break;
      case '*': if(this.state.first.length === 0){
        if(isNumber(arr[arr-1])){
          this.setState({operator:'*',first:arr,current:[]},
            ()=>{console.log(this.state)})
        };
      }else if(this.state.first.length!==0 && arr.length === 0){
          if(isNumber(arr[arr-1])){
            this.setState({operator:'*',second:arr,current:[]},
              ()=>{console.log(this.state)})
        };
      }else{
        this.setState({second:arr},()=>{
          let result = calculateResult(this.state.first,this.state.second,'*');
          console.log(result);
          this.setState({first:result,current:[],second:[],operator:'*'},()=>{console.log(this.state)})
      })
      };break;
      case '/':
      if(this.state.first.length === 0){
        if(isNumber(arr[arr-1])){
          this.setState({operator:'/',first:arr,current:[]},
            ()=>{console.log(this.state)})
        };
      }else if(this.state.first.length!==0 && arr.length === 0){
          if(isNumber(arr[arr-1])){
            this.setState({operator:'/',second:arr,current:[]},
              ()=>{console.log(this.state)})
        };
      }else{
        this.setState({second:arr},()=>{
          let result = calculateResult(this.state.first,this.state.second,'/');
          console.log(result);
          this.setState({first:result,current:[],second:[],operator:'/'},()=>{console.log(this.state)})
      })
      };break;
      case '=':
      if(this.state.first.length === 0){
        this.setState({first:arr,current:[]},()=>{
          console.log(this.state,'from ==')
        });
        return;
      }
        this.setState({second:arr},()=>{
            let result = calculateResult(this.state.first,this.state.second,this.state.operator);
            console.log(result);
            this.setState({first:result,current:[],second:[],operator:''},()=>{console.log(this.state)})
        })
          break;
      default:return;
    }
  }
  render(){
    return(
      <Main>
        <Display current={this.state.current} operator={this.state.operator} first={this.state.first} second={this.state.second}/>
        <ButtonSection onClickHandler={this.onCheckInput.bind(this)}/>
      </Main>)
  }
}
