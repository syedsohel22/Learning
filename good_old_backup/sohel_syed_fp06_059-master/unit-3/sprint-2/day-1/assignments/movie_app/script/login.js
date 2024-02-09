function User(n, e, p, u, m, d) {
  this.name = n;
  this.email = e;
  this.password = p;
  this.username = u;
  this.mobile = m;
  this.description = d;
}

async function Register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const mobile = document.getElementById("mobile").value;
  const description = document.getElementById("description").value;

  let user_data = new User(
    name,
    email,
    password,
    username,
    mobile,
    description
  );

  console.log(user_data);

  const register_url = `https://masai-api-mocker.herokuapp.com/auth/register`;

  let res = await fetch(register_url, {
    method: "POST",
    body: JSON.stringify(user_data),

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  // console.log(data);
}

async function Login() {
  let login_data = {
    username: document.getElementById("login-username").value,
    password: document.getElementById("login-password").value,
  };

  const login_url = `https://masai-api-mocker.herokuapp.com/auth/login`;

  let res = await fetch(login_url, {
    method: "POST",
    body: JSON.stringify(login_data),

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  let token = data.token;
  console.log(data, login_data.username);
  getProfile(login_data.username, token);
}

async function getProfile(username, token) {
  let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

  let res = await fetch(api, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer${token}`,
    },
  });
  let data = await res.json();
  console.log(data);
}
