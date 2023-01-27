const prompt=require("prompt-sync")();
var weight=prompt("Enter your weight");//taking user input
var height=prompt("enter your height");
function BMI(w,h)
{
    var cal=w/(h*h);
    return cal;
}
var ans=BMI(weight,height);
console.log("Your BMI is "+ans);