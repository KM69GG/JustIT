/* 1: Create an array of your favourite films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Then using a loop, cycle through the array and log each item to the console.
 
2: Use a loop to generate 10 random numbers between 1-100 and log them to the console.
 
3: Use a loop to count backwards from 20-0 logging each number to the console.
 
4: Use a loop to generate 5 random numbers between 1-50. For each number generated, check if the number is divisible by 5 or not. Log whether it is divisible or not to the console.
 
5: Research a for each loop and put together a working example.
*/

let favoriteShows = [
  "Breaking Bad",
  "Stranger Things",
  "The Office",
  "Game of Thrones",
  "Black Mirror",
];

favoriteShows.push("The Mandalorian", "Fleabag");

for (let i = 0; i < favoriteShows.length; i++) {
  console.log(favoriteShows[i]);
}

for (let i = 0; i < 10; i++) {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
}

for (let i = 20; i >= 0; i--) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  let randomNum = Math.floor(Math.random() * 50) + 1;

  if (randomNum % 5 === 0) {
    console.log(`${randomNum} is divisible by 5.`);
  } else {
    console.log(`${randomNum} is not divisible by 5.`);
  }
}

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num * 2);
});
