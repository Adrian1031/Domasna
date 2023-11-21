// 1. Koj den od nedelata e 
let day = 7;
let dayName;
switch (day) {
    case 1:
        dayName = "Ponedelnik";
        break;
    case 2:
        dayName = "Vtornik";
        break;
    case 3:
        dayName = "Sreda";
        break;
    case 4:
        dayName = "Cetvrtok";
        break;
    case 5:
        dayName = "Petok";
        break;
    case 6:
        dayName = "Sabota";
        break;
        case 7:
        dayName = "Nedela";
        break;
}
console.log(`Denes e ${dayName}`);

// 2. Odbiranje Ovoshje
let fruit = "Jabolko";
switch (fruit) {
    case "Jabolko":
        console.log("Odbravte Jabolko");
        break;
    case "Banana":
        console.log("Odbravte Banana");
        break;
    case "Portokal":
        console.log("Odbravtre Portokal");
        break;
    default:
        console.log("Nepoznato ovoshje");
}
// 3. Odbiranje Opcija
let choice = "B";
switch (choice) {
    case "A":
    case "B":
        console.log("Opcija e A ili B");
        break;
    case "C":
        console.log("Opcija e C");
        break;
    default:
        console.log("Nevalidna opcija");
}
// 4. Ocenuvanje na test
let score = 30;
let grade;
switch (true) {
    case (score >= 90):
        grade = "5";
        break;
    case (score >= 80 && score < 90):
        grade = "4";
        break;
    case (score >= 70 && score < 80):
        grade = "3";
        break;
    case (score >= 60 && score < 70):
        grade = "2";
        break;
        case (score < 60):
        grade = "1";
        break;
}
console.log(`Tvojata ocenka e ${grade}`);

// 5. odreduvanje na tip na vrednost
let value ="zbor";
switch (typeof value) {
    case "number":
        console.log("Vrednosta e broj");
        break;
    case "string":
        console.log("Vrednosta e string");
        break;
    default:
        console.log("Vrednosta e od druga sorta");
}
