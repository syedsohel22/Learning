// Create function PhoneBook
function PhoneBook(person) {
    // Push the person object to an array
    personList.push(person);
}
// Create an array of objects
var personList = [];
// Test the PhoneBook function
PhoneBook({
    firstName: "John",
    lastName: "Doe",
    phones: [1234567890, 9876543210],
    addresses: [
        {
            houseNumber: 123,
            street: "Main St",
            city: "Anytown",
            state: "CA",
            postalCode: "12345",
            country: "USA",
        },
    ],
});
