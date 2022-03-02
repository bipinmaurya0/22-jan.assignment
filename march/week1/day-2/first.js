alert("hello name");
function checkpassword(){
  let  pword=document.getElementById("password").value;

  let cfpassword=document.getElementById("con_password").value;
  console.log(pword,cfpassword);

  let massage =document.getElementById("message");
  
  if (pword.length!=0){
      if(pword==cfpassword){
          massage.textContent="Password Matching"
      }
      else {
          massage.textContent="Password not Matching Please Invalid Password"
      }
  }

}