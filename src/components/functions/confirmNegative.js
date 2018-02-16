let confirmNegative = (firstLength,input,arr)=>{
    if(firstLength === 0 && input === '-' && (arr[0] === '0' || arr.length === 0)){
        return true;
    }else{return false}
}
export default confirmNegative;