let id;

function startg(){

let images = JSON.parse(localStorage.getItem('images'))||[];

let container = document.getElementById('container')
 container.innerHTML = null;

 
let delay = document.getElementById('delay').value || 3


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


i++;
},delay)

}



function stopg(){
    clearInterval(id);
}