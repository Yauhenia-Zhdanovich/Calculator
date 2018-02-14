let isNumber = (value)=>{
    switch(value){
      case "+":
      case "-":
      case "*":
      case "/":return false;
      default:return true;
    }
  }

  export default isNumber;