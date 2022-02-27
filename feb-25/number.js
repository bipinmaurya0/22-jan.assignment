        var num=prompt("enter a number")
        a=parseInt(num);
        var originalNo=a;
        reverse=0;
        while(a!=0){
            reverse=(reverse*10)+(a%10);
            a=parseInt(a/10);
        }
        if(originalNo == reverse){
            console.log(reverse+" palindrome number");
        }
        else{
            console.log(reverse+" no palindrome number");
        }