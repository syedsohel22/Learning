
function showd(){
    let products = JSON.parse(localStorage.getItem('data'))||[];
    let productsData = document.getElementById('products_data');
    productsData.innerHTML=null;
    
    products.forEach(function(el,index){
        let div = document.createElement('div');
        let b = document.createElement('p')
        b.innerText = el.brand;

        let n = document.createElement('p');
        n.innerText = el.name;

        let p = document.createElement('p');
        p.innerText = el.price;

        let img = document.createElement('img')
        img.src = el.image;

        let btn = document.createElement('button');
        btn.innerText = "Remove Product"
        btn.addEventListener('click' ,function(){
            remove(index)
        })
        div.append(img,b,n,p);
        productsData.append(div)
    })
  
}

showd()