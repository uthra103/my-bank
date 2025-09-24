

// Logout
function logout() {
  localStorage.removeItem("currentac");
  localStorage.removeItem("currentuser");
  alert("Logout success");
  window.location.href = "./index.html";
}

// Deposit
function deposit() {
  let acname = localStorage.getItem("currentac");
  let amount = Number(document.getElementById("depositAmount").value);
  let accInput = document.getElementById("depositAccount").value.trim();

  let storeddata = JSON.parse(localStorage.getItem(acname));

  if (!storeddata) {
    alert("Account not found. Please login again.");
    return;
  }

  if (accInput !== acname) {
    alert("Invalid account number");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount");
    return;
  }

  // ensure numeric balance
  storeddata.balance = Number(storeddata.balance) + amount;

  localStorage.setItem(acname, JSON.stringify(storeddata));
  alert(`Your account is credited with ${amount}. New balance is ${storeddata.balance}`);

  document.getElementById("depositAmount").value = "";
  document.getElementById("depositAccount").value = "";
}

// Withdraw
function withdraw() {
  let acname = localStorage.getItem("currentac");
  let amount = Number(document.getElementById("withdrawAmount").value);
  let accInput = document.getElementById("withdrawAccount").value.trim();

  let storeddata = JSON.parse(localStorage.getItem(acname));

  if (!storeddata) {
    alert("Account not found. Please login again.");
    return;
  }

  if (accInput !== acname) {
    alert("Invalid account number");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount");
    return;
  }

  if (amount > Number(storeddata.balance)) {
    alert("Insufficient balance");
    return;
  }

  // ensure numeric balance
  storeddata.balance = Number(storeddata.balance) - amount;

  localStorage.setItem(acname, JSON.stringify(storeddata));
  alert(`Your account is debited with ${amount}. New balance is ${storeddata.balance}`);

  document.getElementById("withdrawAmount").value = "";
  document.getElementById("withdrawAccount").value = "";
}
