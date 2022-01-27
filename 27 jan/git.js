console.log("hi there");
var noOfValues = prompt("Enter No. of numbers you want to type") 
var arr=[]
for(var i=0 ; i < noOfValues ; i+=1 ){
    var x = prompt("Enter your value")
    arr.push(x)
}
var max = arr[0]
for(var i=0 ; i < noOfValues ; i+=1){
    if (max < arr[i] ){
        max=arr[i]
    }
}
console.log(max);