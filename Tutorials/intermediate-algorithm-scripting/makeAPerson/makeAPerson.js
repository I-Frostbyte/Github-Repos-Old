/* THE PROBLEM
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

/* THE SOLUTION
When I started the program I figured I just had to create the six functions mentioned in the details. However, it was not that simple. Creating them as a function was not the right way, I had to create them in a different way to make them a key.

There is also a tricky part as you need six keys no more or less, so at first I had the variable that store the original name as a key too which was wrong.

As for the usage of array, that is optional, you could also create new variable to hold the separated string if you wish but an array is easier to deal with as strings are immutable.

Read the instructions carefully, it is always a good hint in itself to run the code and check what the test results were so you know what to expect but do not fixate yourself on that. Once you understand what you need to do, this problem is very easy and straightforward.
*/

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};
  
  const bob = new Person('Bob Ross');
  bob.getFullName();

