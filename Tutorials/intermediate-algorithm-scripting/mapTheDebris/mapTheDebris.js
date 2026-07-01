/* THE PROBLEM
According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:

T=2πa3μ−−−√
 
a  is the orbit's semi-major axis
μ=GM  is the standard gravitational parameter
G  is the gravitational constant,
M  is the mass of the more massive body.
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

/* THE SOLUTION
The first thing to do is to get familiar with what the program is for by knowing what Orbital period exactly is. You’ve to return a new array that transforms the element’s average altitude into their orbital periods. The parts generally found hard are finding the formula, implementing it and for some people, modifying objects by the key. However, something that is not very clear is the fact that your program has to be able to check for any number of objects in the array; This is what is tested on the second part.
*/


function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
        const earth = earthRadius + avgAlt;
        const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
        return { name, orbitalPeriod };
      });
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

  module.exports = orbitalPeriod;
