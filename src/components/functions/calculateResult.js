import {Decimal} from 'decimal.js';
let calculateResult = (firstOperand,secondOperand,operator)=>{
    let first = new Decimal(firstOperand.join(''));
    let second = new Decimal(secondOperand.join(''));
    let result = [];
        switch(operator){
            case "+":result = Decimal.add(first, second).toString().split('');break;
            case "-":result = first.minus(second).toString().split('');break;
            case "*":result = Decimal.mul(first, second).toString().split('');break;
            case "/":result = Decimal.div(first, second).toString().split('');break;
            default:return;
        }
    if(result.join('') === 'Infinity'){
        return 'error';
    }
    return result;
}
export default calculateResult;