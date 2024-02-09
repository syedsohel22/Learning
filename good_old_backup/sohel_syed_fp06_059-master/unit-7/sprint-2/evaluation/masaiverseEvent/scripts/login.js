let email = document.getElementById("login-email");
let password = document.getElementById("login-password");

let loginbtn = document.getElementById("login-btn");

loginbtn.addEventListener("click", async () => {
  let payload = {
    email: email.value,
    password: password.value,
  };
  console.log(payload);

  try {
    let res = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    res = await res.json();
    console.log(res.token);
    JSON.stringify(localStorage.setItem("token", res.token));
    if (res.token.length > 5) {
      // redirect to data.html
      location.replace("../data.html");
    }
    alert("Login Successfull.");
  } catch (error) {
    console.log(error);
  }
});
