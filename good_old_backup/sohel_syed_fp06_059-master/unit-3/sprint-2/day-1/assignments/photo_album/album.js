
let id;

function start(){

let images = JSON.parse(localStorage.getItem('images'))||[];

let container = document.getElementById('container')
 container.innerHTML = null;
// if(delay==undefined){
//     delay=2000;
// }else{
//     let delay = document.getElementById('delay').value
// }

//console.log('delay1',delay);



let i=0;

let img = document.createElement('img');

img.src = images[0];

container.append(img)

i++;

id= setInterval(function(){
    if(i===images.length){
        i=0;
    }
     img.src =images[i];

    container.append(img);
 //  console.log(i)

i++;
},2000)
//console.log('delay2',delay);
}



function stop(){
    clearInterval(id);
}