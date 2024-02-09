// fill in javascript code here

document.querySelector("form").addEventListener("submit", funcdo)

function funcdo(event){
    event.preventDefault();
    
    let dName=document.querySelector("#name").value
    let dId= document.querySelector("#docID").value
    let spe=document.querySelector("#dept").value
    let exp=document.querySelector("#exp").value
    let dEmail=document.querySelector("#email").value
    let dMob=document.querySelector("#mbl").value
   

    let row=document.createElement("tr");

    
    let td1 = document.createElement("td");
    td1.innerText = dName;
    
    let td2 = document.createElement("td");
    td2.innerText = dId;

    let td3 = document.createElement("td");
    td3.innerText = spe;
    
    let td4 = document.createElement("td");
    td4.innerText =exp;

    let td5 = document.createElement("td");
    td5.innerText = dEmail;
    
    let td6 = document.createElement("td");
    td6.innerText = dMob;

    let td7 = document.createElement("td");
    if(exp>5){
        td7.innerText = "Senior"
    }else if(exp>=2&&exp<=5){
        td7.innerText = "Junior"
    }else if(exp<=1){
        td7.innerText = "Trainee"
    }
    
    let td8 = document.createElement("td");
        td8.innerText = "Delete"
        td8.style.color="red"
        td8.addEventListener("click",delrow)

    row.append(td1,td2,td3,td4,td5,td6,td7,td8);

   
    console.log(
        document.querySelector("tbody").append(row))
}

function delrow(event){
    event.target.parentNode.remove();
    
}