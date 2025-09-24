function register(){
  let username=document.getElementById('user').value
  let acnum=document.getElementById('acnum').value
  let password=document.getElementById('password').value
   if (!username || !acnum || !password) {
    alert("All fields are required");
    return;
   }
  let registerobj={
    username:username,
    accountnumber:acnum,
    password:password,
    balance: 0 
  } 

 if (localStorage.getItem(acnum)) {
    alert("Account number already registered!");
    return;
  } 
  
  localStorage.setItem(acnum, JSON.stringify(registerobj));
  alert("acount registerd completed");
  
}


