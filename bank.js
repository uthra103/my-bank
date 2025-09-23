function logout() {
      window.location.href = "./login.html";
      localStorage.removeItem("currentac");
      localStorage.removeItem("currentuser");
    
      alert("Logout success");
    }

    function deposit() {
      let acname = sessionStorage.getItem("currentac");
      let amount = Number(document.getElementById("depositAmount").value);
      let accInput = document.getElementById("depositAccount").value;

      // fetch account from localStorage
      let storeddata = JSON.parse(localStorage.getItem(acname));

      if (accInput !== acname) {
        alert("Invalid account number");
        return;
      }

      if (amount <= 0) {
        alert("Invalid amount");
      } else {
        storeddata.balance += amount;
        localStorage.setItem(acname, JSON.stringify(storeddata));
        alert("Your account is credited with " + amount + ". New balance is " + storeddata.balance);
        document.getElementById("depositAmount").value = "";
        document.getElementById("depositAccount").value = "";
      }
    }

    function withdraw() {
      let acname = sessionStorage.getItem("currentac");
      let amount = Number(document.getElementById("withdrawAmount").value);
      let accInput = document.getElementById("withdrawAccount").value;

      // fetch account from localStorage
      let storeddata = JSON.parse(localStorage.getItem(acname));

      if (accInput !== acname) {
        alert("Invalid account number");
        return;
      }

      if (amount <= 0) {
        alert("Invalid amount");
      } else if (amount > storeddata.balance) {
        alert("Insufficient balance");
      } else {
        storeddata.balance -= amount;
        localStorage.setItem(acname, JSON.stringify(storeddata));
        alert("Your account is debited with " + amount + ". New balance is " + storeddata.balance);
        document.getElementById("withdrawAmount").value = "";
        document.getElementById("withdrawAccount").value = "";
      }
    }