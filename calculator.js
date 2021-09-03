const result = document.getElementById('results')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')
const zero = document.getElementById('0')
const sign = document.getElementById('sign')
const clear = document.getElementById('clr')
const percent = document.getElementById('percent')
const dvsn = document.getElementById('division')
const addition = document.getElementById('add')
const pnt = document.getElementById('point')
const del = document.getElementById('del')
const equa = document.getElementById('equal')
const multi = document.getElementById('multiply')
const dash = document.getElementById('dash')


function dis(val){
    result.value+=val;
    if (result.value.includes('%')){
        size=result.value.length;
        n=Number(result.value.substring(0, size-1));
        result.value=n/100;
       
    }   
}
function solve(){
    value=result.value
    let y = eval(value)
    result.value = y;
    result.value=(`${value} = ${y}`);
    
}
function clr(){
    result.value=""
}
function remove(){
    result.value=result.value.substring(0, result.value.length-1)

}



