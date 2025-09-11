// create a variable named kelvin and set to 293
let kelvin = 0;

// set variable to celsius which equals the variable kelvin - 273
let celsius = kelvin - 273;

// set variable fahrenheit to variable celsius multiplied by (9/5) then add 32
// use .floor() to find the closest integer and (Math object w/ floor)
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`the temperature is ${fahrenheit} degrees Fahrneheit`);
