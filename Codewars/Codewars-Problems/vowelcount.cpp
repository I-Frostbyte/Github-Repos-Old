/* THE PROBLEM
    Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

/* THE STEPS
    First I created an integer variable to hold the length of the passed string
    The I created an array for the vowels involved.
    Next I looped through the string and the array, comparing the value of each letter of the string
    against the value of each indexed element of the array. If there was a match, then the
    variable num_vowels was incremented by one. 

    To test the file, I added an iostream header and use the print to screen function to display the
    result of the count.

    1- keep track of the number of vowels
    2- hold the vowels in an array
    3- go through the given string and compare against the vowels
    4- increment the counter by one if we get a vowel match
    5- Return the count
*/

#include <string>
#include <iostream>

using namespace std;

int getCount(const string& inputStr);

int main(){
    string wordtest = "abracadabra";
    cout << getCount(wordtest) <<endl;
    
    return 0;
}

int getCount(const string& inputStr){
    int num_vowels = 0;
    //your code here
    int lengthofstring = inputStr.length();
    string Vowels[5] = { "a", "e", "i", "o", "u" };
    for(int i=0; i<lengthofstring; i++){
        for(int j=0; j<5; j++){
            if(inputStr[i] == Vowels[j][0]){
                num_vowels++;
            }
        }
        
    } 
  return num_vowels;
}