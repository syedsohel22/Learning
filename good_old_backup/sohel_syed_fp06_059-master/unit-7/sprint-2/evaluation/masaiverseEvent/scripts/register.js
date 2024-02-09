const API = "https://masaiverse-json-server.onrender.com";

// Registration form Data
let rname = document.getElementById("register-name");
let age = document.getElementById("register-age");
let place = document.getElementById("register-place");
let batch = document.getElementById("register-batch");
let profession = document.getElementById("register-profession");
let registerFn = document.getElementById("register-btn");

registerFn.addEventListener("click", async () => {
  let registerData = {
    name: rname.value,
    age: +age.value,
    place: place.value,
    batch_name: batch.value,
    profession: profession.value,
    id: Date.now(),
  };
  console.log(registerData);

  try {
    let res = await fetch(`${API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    alert("successfully registered");
    console.log(res);
  } catch (error) {
    alert("something went wrong..!");
    console.log(error);
  }
});
