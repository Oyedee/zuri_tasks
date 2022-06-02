// Using JavaScript, create a "date-matching" application that has the following features:

// Three lists containing names (Group A, Group B and Places), the list can be represented with Object or Array.
// The application should randomly match and produce 2 people at each refresh. 
// The result produced should be in the format:
// Group A['name'] and Group B['name'] will be going on a dinner date at Places['name'].
// However, the program should go through the entire list in Group A before repeating names.



let groupA = ['Ade', 'Femi', 'Dele', 'Pelumi', 'Seun'];
let groupB = ['Shade', 'Bukky', 'Aminat', 'Aisha', 'Qadijah'];

let newGroupA = [];

let places = ['Placibo', 'ThePlace', 'Chicken Republic', 'Radisson', 'Shoprite'];

var randomNumber = Math.floor(Math.random() * groupA.length);

var itemA = groupA[randomNumber];

for (i = 0; i < groupA.length; i++) {
  if (groupA[i] === itemA) {
    if (groupA[i + 1] !== undefined) {
      console.log('=================================================================================== \n');
      console.log(groupA[i + 1] + ' and ' + groupB[randomNumber] + ' will be going on a dinner date at ' + places[randomNumber] + '\n');
      console.log('=================================================================================== \n');

    }
  }
}