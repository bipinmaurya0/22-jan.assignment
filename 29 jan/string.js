var count=0;
var c;
var i;
var ch =prompt("enter the string");
for(i=0;i<=ch.length;i++)
{
c=ch.charAt(i);
if(c=="a"||c=="A" ||c=="e"||c=="E" ||c=="i"||c=="I"||c=="o"||c=="O"||c=="u"||c=="U")
{
count++;
}
}
console.log(count);




