// Create interface for an object
interface MyObject {
    title: string;
    status: boolean;
    id: number;
  }
  
  // Create interface for getName function
  interface Nameone {
    firstName: string;
    lastName?: string;
  }
  
  // Create interface for Address
  interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  
  // Create interface for PersonDetails
  interface PersonDetails {
    prefix?: string;
    phones: number[];
    addresses: Address[];
    email?: string;
    firstName: string;
    lastName: string;
    middleName?: string;
  }
  
  // Create function PhoneBook
  function PhoneBook(person: PersonDetails): void {
    // Push the person object to an array
    personList.push(person);
  }
  
  // Create an array of objects
  const personList: PersonDetails[] = [];
  
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
  