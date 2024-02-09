// All the Code for All Students Page Goes Here

let LSData = JSON.parse(localStorage.getItem("admission")) || [];

let tbody = document.querySelector("tbody");

let filter = document.getElementById("filter");

function DisplayTable(data) {
  tbody.innerHTML = null;

  data.forEach(function (element,index) {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText = element.name;

    let email = document.createElement("td");
    email.innerText = element.email;

    let course = document.createElement("td");
    course.innerText = element.course;

    let gender = document.createElement("td");
    gender.innerText = element.gender;

    let phone = document.createElement("td");
    phone.innerText = element.phone;

    let accept = document.createElement("td");
    accept.innerText = "Accept";
    accept.addEventListener("click",function(){
        addtoLS("admission-accepted",element);
         Delete(data, index)
    })

    let reject = document.createElement("td");
    reject.innerText = "Reject";
    reject.addEventListener("click",function(){
        addtoLS("admission-rejected",element);
        Delete(data, index)
    })

    tr.append(name, email, course, gender, phone, accept, reject);
    tbody.append(tr);
  });
}

DisplayTable(LSData);

filter.addEventListener("change", function () {
  if (filter.value === "all" || filter.value === "") {
    DisplayTable(LSData);
  } else {
    let filteredData = LSData.filter(function (el) {
      return el.course === filter.value;
    });
    DisplayTable(filteredData);
  }
});

function addtoLS(key,value){
let newLSData = JSON.parse(localStorage.getItem(key))|| [];
newLSData.push(value);

localStorage.setItem(key,JSON.stringify(newLSData));
}

function Delete(data, index){
LSData = data.filter(function(el,i){
  return i !=index;
})
localStorage.setItem("admission",JSON.stringify(LSData));
DisplayTable(LSData);
}