/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

let createInitialsFromName = (name) => {
  // Complete the function
const names =name.toUpperCase();
const fullName = names.split(" ");
if (fullName.length==1){
  console.log(names.substring(0, 2));
  return names.substring(0, 2);
}else{
const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  console.log(initials);
  return initials;
}
};
createInitialsFromName("Lucky dhar");

module.exports = createInitialsFromName;
