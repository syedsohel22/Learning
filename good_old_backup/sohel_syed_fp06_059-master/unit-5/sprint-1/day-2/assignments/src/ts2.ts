// Create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it

interface Point {
  firstname: string;
  lastname: string;
}

function getName(props: Point) {
  return props.firstname + props.lastname;
}

console.log(getName({ firstname: "Sohel", lastname: "Syed" }));
