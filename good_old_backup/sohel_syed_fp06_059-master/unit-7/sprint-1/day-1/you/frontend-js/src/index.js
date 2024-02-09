/*


navbar(link to pages) (import export)

admin page --> add products
adding product ---> form
form -->input fields & one dropdown (category)
categories ---> shirts, makeup, trouser, shoes

pages

shirt.html
makeup.html
trouser.html
shoes.html

on the above page filter the data and append

product :[
    {
        id:4354395u43
        name: "shoe-1"
        category:"shoe"
    }
]

// delete the item 
*/

import { Navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();
console.log("navbar", Navbar());
