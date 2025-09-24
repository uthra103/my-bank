


function login() {
  let acnum = document.getElementById('acnum').value.trim();
  let password = document.getElementById('password').value.trim();

  let logininfo = JSON.parse(localStorage.getItem(acnum));

  if (logininfo == null) {
    alert("Invalid account");
  } else if (logininfo.password !== password) {
    alert("Invalid password");
  } else {
    alert("Login success");
    sessionStorage.setItem("currentac", acnum);
    sessionStorage.setItem("currentuser", logininfo.username);
    window.location.href = "bank.html";
  }
}
