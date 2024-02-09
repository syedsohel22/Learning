// Create a function PhoneBook
// it should accept PersonDetails type argument
// create an array of objects outside the PhoneBook function, that is expecting PersonDetails objects.
// Push the PersonDetails object in the array, from the function.

let arr:number[]=[];

function Phonebook <T> (arg:T[],index:number):T {
       return arg[index];
}

type PersonDetail = {id:number;name:string;} ;
            
 let arr_PersonDetails:PersonDetail[] =[ 
                      {id:1,name:"Sohel"},
                      {id:2,name:"Syed"},
                      {id:3,name:"ss"},
 ]

 Phonebook<PersonDetail>(arr_PersonDetails,0);