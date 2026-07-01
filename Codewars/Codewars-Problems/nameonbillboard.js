/* PROBLEM
    Name on billboard
    You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).
*/
/* STEPS
1. Get the name to be on the billboard. If there is no agreed price then the default is 30 pounds
2. Calculate how much it would cost to print
3. tell the customer the total cost.

NOTE: Spaces count as part of the name.
*/

function billboard(name, price = 30){
    var totalPrice = 0;
    for(var i=0; i<name.length; i++){
        totalPrice += price;
    }

    return totalPrice
} 

module.exports = billboard;