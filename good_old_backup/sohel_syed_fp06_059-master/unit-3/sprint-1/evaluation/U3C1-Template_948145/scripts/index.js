//store the products array in localstorage as "data"

//constructor function
function product(b,n,p,i){
    this.brand = b;
    this.name = n;
    this.price =p;
    this.image =i
}


function storedData(event){

    event.preventDefault();
 //   console.log("working hi")
    
    let form = document.getElementById('product_form');
     let brand = form.product_brand.value;
    let name = form.product_name.value;
    let price = form.product_price.value;
    let image = form.product_image.value;

    //console.log(brand,name,price,image)

    let p1 = new product(brand,name,price,image)
    console.log(p1)
    let products =JSON.parse(localStorage.getItem('data'))||[];
    products.push(p1);

    localStorage.setItem('data',JSON.stringify(products));
}