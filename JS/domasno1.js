// 1. Pozitiven I negataiven Broj
let num = 10;
if (num > 0) {
    console.log("Brojot e pozitiven");
} else {
    console.log("brojot e negativen");
}
// 2. Paren ili Neparen Broj
let number = 7;
if (number % 2 === 0) {
    console.log("Brojot e paren");
} else {
    console.log("Brojot e neparen");
}
// 3. Dali smeesh da glasash spored vozrasta
let age = 20;
if (age >= 18) {
    console.log("Mozesh da glasash");
} else {
    console.log("Nemozesh da glasash");
}

// 4. Koj broj e najgolem
let a = 10, b = 20, c = 15;
if (a >= b && a >= c) {
    console.log("a e najgolem broj");
} else if (b >= a && b >= c) {
    console.log("b e najgolem broj");
} else {
    console.log("c e najgolem broj");
}

// 5.  Proveruvanje dali string e prazen ili poln
let str = "";
if (str === "") {
    console.log("Stringot e prazen");
} else {
    console.log("Stringot ne e prazen");
}
// 6. Proveri dali broj a nula ili ne
let value = 0;
if (value !== 0) {
    console.log("Brojot ne e nula");
} else {
    console.log("Brojot e nula");
}
// 7. Dali e brojot pogolem ili pomal of 10
let x = 15;
let result;
if (x > 10) {
    result = "Brojot e Pogolem od 10";
} else {
    result = "Brojot e pomal od 10";
}
console.log(result);
// 8. Proveri dali eden broj e pomegju drugi

let number1 = 2;
if (number1 >= 20 && number <= 30) {
    console.log("Brojot e pomegju 20 i 30");
} else {
    console.log("Brojot e nadvor od 20 i 30");
}
// 9. Proveri dali 2 broja se ednakvi
let firstVar = 20;
let secondVar = 20;
if (firstVar === secondVar) {
    console.log("Broevite se ednakvi");
} else {
    console.log("Broevite ne se ednakvi");
}
// 10. Proveri dali email e tocno vnesen 
let email = "example@example.com";
if (email.includes("@") && email.includes(".")) {
    console.log("Validen email format");
} else {
    console.log("Nevaliden email format");
}








