//Today's forecast in Kelvin
const kelvin = 0;
//Conversion from Kelvin to Celsius
const celsius = kelvin - 273;
//Conversion of Celsius to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//Rounds down to whole number
fahrenheit = Math.floor(fahrenheit);
//Converts Celsius to Newton scale
let newton = celsius * (33 / 100);
//Rounds down to whole number
newton = Math.floor(newton);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit or ' + newton + ' on the Newton scale!');
