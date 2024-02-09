

function student(n,c,u,i,b){
this.name = n;
this.course = c;
this.unit= u;
this.image= i;
this.batch= `FT- WEB${b}`
}

function storeData(event){
    event.preventDefault();

    let form = document.getElementById("students_data");
    let name= form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

 //console.log(name,image,unit,course,batch)

let s1= new student(name,course,unit,image,batch)

//console.log(s1)


let data= JSON.parse(localStorage.getItem("students"))||[]
data.push(s1);

localStorage.setItem('students',JSON.stringify(data));
}

function calculate(){
    let data = JSON.parse(localStorage.getItem("students"))||[]
    let obj ={};
    for(let i=0;i<data.length;i++){
        if(obj[data[i].batch]==undefined){
            obj[data[i].batch]=1
        }else{
            obj[data[i].batch]++
        }
    }
   // console.log(obj)
   let count = document.getElementById('count');
   count.innerHTML= null;

   let div = document.createElement('div');
   for(let key in obj){
    let p= document.createElement('span');
    p.innerText = `${key}-${obj[key]}|`;
    div.append(p);
   }
   count.append(div);
}

calculate();