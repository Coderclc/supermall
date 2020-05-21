function clc (num1,num2){
  num1||(num2=num2+2)
  return num2
}
const why = clc(0,2)
console.log(why);
