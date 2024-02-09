
document.querySelector("form").addEventListener("submit",todo);

function todo(event){
    event.preventDefault();
    //console.log("inside func")
    let task = document.querySelector("#task").value
    let prior = document.querySelector("#priority").value

    let row = document.createElement("tr");

    let td1= document.createElement("td");
    td1.innerText=task;

    let td2 = document.createElement("td");
    td2.innerText=prior;

    if(prior == "High"){
        td2.style.background = "red";
    }else{
        td2.style.background="green";
    }

    let td3 = document.createElement("td");
        td3.innerText= "Delete";
        td3.style.color="red"
        td3.addEventListener("click", deleteTodo);

    row.append(td1,td2,td3);
    document.querySelector("tbody").append(row);


}

function deleteTodo(event){
    event.target.parentNode.remove();
}