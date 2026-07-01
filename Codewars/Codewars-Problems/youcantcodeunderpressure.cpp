/* PROBLEM
You can't code under pressure
Code as fast as you can! You need to double the integer and return it.
*/

/* Steps 

1. First I created a main function and then prototyped the function double_integer above it.

2. Then I created a variable number with type int32_t undeclared with the sole purpose of passing
it into the function from the main. I did this because VS required the code to run from main but
codewars didn't.

3. I then changed the return value so that what was returned from the double_integer function was
multiplied by 2.

4. The last comment section below is my final codewars code

*/

#include <cstdint>

int32_t number;
int32_t double_integer(int32_t n);

int main(){
    double_integer(number);
}

int32_t double_integer(int32_t n)
{
    return n*2;
  // We need solution fast !!!
}

/*
#include <cstdint>

int32_t double_integer(int32_t n)
{
    return n*2;
  // We need solution fast !!!
}
*/