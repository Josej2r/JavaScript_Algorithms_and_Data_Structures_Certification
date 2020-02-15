/* Alter code below this line */
class   Thermostat  {
    constructor(fahrenheit){
        this.fahrenheit = fahrenheit;
    }
    //getter
    get temperature (){
        return (5 / 9) * (this.fahrenheit - 32);
    }

    //setter
    set temperature(celsius){
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
