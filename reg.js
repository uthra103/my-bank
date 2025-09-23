function register(){
  let username=document.getElementById('user').value
  let acname=document.getElementById('acname').value
  let password=document.getElementById('pass').value

  registerobj={
    username:username,
    accountname:acname,
    password:password
  }
 localStorage.setItem(acname, JSON.stringify(registerobj));
  alert=("acount registerd completed")
}

function login(){
  let acname=document.getElementById('acname').value
  let password=document.getElementById('pass').value
  let storeddata=JSON.parse(localStorage.getItem(acname))
  if(storeddata==null){
    alert("invalid acount")
  }
  else if(storeddata.password!=password){
    alert("invalid password")
  }
  else{
    alert("login success")
    window.location.href="bank.html"
    sessionStorage.setItem("currentac",acname)
    sessionStorage.setItem("currentuser",storeddata.username)
    console.log(storeddata);
  }
}