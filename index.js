let number = prompt("Please enter a number:");
console.log(`The number you provided is ${number}.`)

for (let i = number; i >= 0; i--) {
    if (i <= 50) {
        console.log(`The current value is at ${i}. Terminating the loop`);
        i = 0;
    }
    if (i % 10 === 0 && i > 50) {
        console.log(`The number is divisible by 10. Skipping the number.`);
    }
    if (i % 5 === 0 && i > 50 && i % 10 > 0) {
        console.log(i);
    }
}

let str = "supercalifragilisticexpialidocius";
let consonants = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {

        continue;
    } else {
        consonants.push(str[i]);

    }
}

console.log(str)
console.log(consonants.join(""));