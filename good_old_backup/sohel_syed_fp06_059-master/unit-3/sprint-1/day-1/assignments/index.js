

document.querySelector("#roll").addEventListener("click",onroll)

function onroll(){

  let x = Math.floor((Math.random()*6)+1);
  let y = Math.floor((Math.random()*6)+1);
  let z = Math.floor((Math.random()*6)+1);

  document.querySelector("#member-1").innerHTML=x
  document.querySelector("#member-2").innerHTML=y
  document.querySelector("#member-3").innerHTML=z

  if((x>y && x>z)){
    console.log("x is greter")
    document.querySelector("#member-1").style.background="green"
    let win =document.querySelector('#win');
    win.innerText="Member-1"
  //  if(y>z){
      document.querySelector("#member-2").style.background="yellow"
   // }else{
    //  document.querySelector("#member-3").style.background="yellow"
   // }
   
    document.querySelector("#member-3").style.background="red"


  }else if((y>x && y>z)){
    console.log("y is greter")
    document.querySelector("#member-2").style.background="green"
    let win =document.querySelector('#win');
    win.innerText="Member-2"
    document.querySelector("#member-1").style.background="yellow"
    document.querySelector("#member-3").style.background="red"
  }else if((z > y&& z >x)){
  console.log(" z is greter")
  document.querySelector("#member-3").style.background="green"
  let win =document.querySelector('#win');
  win.innerText="Member-3"
  document.querySelector("#member-2").style.background="yellow"
  document.querySelector("#member-1").style.background="red"
 }else if (x==y && y==z && z===x){
  let win =document.querySelector('#win');
  win.innerText="It's a Tie"
  document.querySelector("#member-2").style.background="blue"
  document.querySelector("#member-1").style.background="blue"
  document.querySelector("#member-3").style.background="blue"
 }
}

//()
//x==y && y==z && z===x