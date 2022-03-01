var a=prompt("enter a number");
num=parseInt(a);
if(isNaN(num))
{
alert("please enter valid number");
}
else if(num%3==0 && num%5==0){
    document.write("bizzbuzz(foober)");
}
else if(num%3==0){
    document.write("fizz(foo)");
}
else if(num%5==0){
    document.write("buzz(bar)");
}
else{
    document.write(num);
}