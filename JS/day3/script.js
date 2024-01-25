// Objects

// Learning Objectives:
// - Explore the concept of an Object
// - To access data from within an object
// - To use functions (methods) with Objects

// properties = data contained within the object
// methods = things that the object can do

// Objects work with Key:Value pairs.
const exampleObject = {
  key1: "value1",
  key2: "value2",
};

// Cofeeshop Object
const coffeeShop = {
  name: "Costa",
  branchNumber: 250,
  specialOffers: true,
  drinks: ["Americano", "Latte", "Tea"],
};

console.log(coffeeShop);

// We can acess the data within the object via dot notation
console.log(coffeeShop.branchNumber);

// or Bracket Notation
console.log(coffeeShop["specialOffers"]);
console.log(coffeeShop.drinks[2]);

// Add a new property to the object
coffeeShop.muffins = ["Blueberry", "Chocolate"];

// Change or update a property
coffeeShop.branchNumber = 100;

console.log(coffeeShop);

// Add some offers to the cofeeShop object
coffeeShop.breakfastOffer = "Free bagel with any coffee.";
coffeeShop.lunchOffer = "Free coffee with any sandwich.";

let offer = "No current offer.";
let time = 1200;

if (time < 1100) {
  offer = coffeeShop.breakfastOffer;
  console.log(offer);
} else if (time < 1500) {
  offer = coffeeShop.lunchOffer;
  console.log(offer);
}

// Methods
coffeeShop.open = function () {
  return "We are open, come on in!";
};

coffeeShop.close = function () {
  return "Sorry we are closed. Come back tomorrow.";
};

console.log(coffeeShop.open());
console.log(coffeeShop.close());

// Nested Objects
const employee = {
  id: 1,
  name: "John Doe",
  position: "Software Engineer",
  department: {
    name: "Engineering",
    location: "Building A",
    supervisor: {
      name: "Jane Smith",
      position: "Engineering Manager",
    },
  },
};

const library = {
  name: "Public Library",
  location: "City Center",
  books: [
    {
      id: "B001",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      details: {
        genre: "Fiction",
        year: 1925,
      },
    },
    {
      id: "B002",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      details: {
        genre: "Fiction",
        year: 1960,
      },
    },
  ],
};

/* JavaScript - Day 5 Tasks:
 
1: Create an object called person with keys of name age and city. Once created log your object to the console in a table format.
 
2: Without editing the original person object add a list of your favourite songs to the person object and log the list to the console.
 
3: Create an Alarm object with a method called "checkAlarm", that takes in the day of the week as an argument and returns "Get up at 7:00am" if it is passed a weekday and "Sleep in it's the weekend" if it is passed a weekend day.
 
Nested Objects Tasks:
 
Use the nested objects at the bottom of todays reference file to complete the tasks below. Reference the requested data via the objects.
 
1: Log the name of John's supervisor to the console.
 
2: Log the title of 'The Great Gatsby' to the console. */
// Task 1
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.table(person);

// Task 2
person.favoriteSongs = ["Song 1", "Song 2", "Song 3"];
console.log("Favorite Songs:", person.favoriteSongs);

// Task 3
const Alarm = {
  checkAlarm: function (dayOfWeek) {
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
      return "Sleep in, it's the weekend";
    } else {
      return "Get up at 7:00am";
    }
  },
};

// Testing the checkAlarm method
console.log(Alarm.checkAlarm("Monday")); // Example usage

// Nested Objects
const employees = {
  John: {
    name: "John",
    position: "Manager",
    supervisor: "Sarah",
  },
  Mary: {
    name: "Mary",
    position: "Supervisor",
    supervisor: "Bob",
  },
};

const books = {
  book1: {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  book2: {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
};

// Nested Objects Tasks
// Task 1
console.log("John's supervisor:", employees.John.supervisor);

// Task 2
console.log("Title of 'The Great Gatsby':", books.book1.title);
