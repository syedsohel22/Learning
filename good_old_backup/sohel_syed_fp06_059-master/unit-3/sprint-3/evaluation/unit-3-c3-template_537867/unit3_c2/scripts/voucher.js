voucher = async () => {
  result = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);
  data = await result.json();
  console.log(data[0].vouchers);
  let info = data[0].vouchers;
  append(info);
};
voucher();

const append = async (data) => {
  data.forEach((e) => {
    let div = document.createElement("div");
    div.className = "voucher";
    let img = document.createElement("img");
    img.src = e.image;
    let title = document.createElement("p");
    title.innerText = e.name;
    let price = document.createElement("p");
    price.innerText = e.price;

    let btn = document.createElement("button");
    btn.innerText = "Buy";
    btn.className = "buy_voucher";

    btn.addEventListener("click", () => {
      v1 = new purchasevou(e.image, e.name);
      localStorage.setItem("purchase", JSON.stringify(v1));
    });
    div.append(img, title, price, btn);
    voucher_list.append(div);
  });
};

let data = JSON.parse(localStorage.getItem("user"));
console.log(data);
let wal = document.getElementById("wallet_balance");

wal.innerText = data[0].amount;
