// Create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional

interface PersonDetails {
    Prefix?:string,
    phones:[number],
    addresses:Array<number>,
    email?:string,
    firstname:string,
    lastname:string,
    middlename?:string
}