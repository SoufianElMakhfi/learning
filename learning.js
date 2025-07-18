// =========================================
// JAVASCRIPT LEARNING FILE
// Enthält 20 Lernstufen mit über 50 Aufgaben
// =========================================

// === LERNSTUFE 1: Variablen & Datentypen ===
console.log("\n=== Lernstufe 1: Variablen & Datentypen ===");

let vorname = "Mein Name";
let alter = 35;
let istEntwickler = true;
let gehalt = null;
let adresse;

console.log(vorname, alter, istEntwickler, gehalt, adresse);

// === LERNSTUFE 2: Arithmetik & Operatoren ===
console.log("\n=== Lernstufe 2: Arithmetik & Operatoren ===");

let a = 10;
let b = 3;
console.log("a + b =", a + b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// === LERNSTUFE 3: Strings ===
console.log("\n=== Lernstufe 3: Strings ===");

let satz = "JavaScript ist großartig!";
console.log(satz.length);
console.log(satz.toUpperCase());
console.log(satz.includes("Script"));

// === LERNSTUFE 4: Bedingungen ===
console.log("\n=== Lernstufe 4: Bedingungen ===");

let punkte = 87;
if (punkte >= 90) {
    console.log("Note: Sehr gut");
} else if (punkte >= 80) {
    console.log("Note: Gut");
} else {
    console.log("Note: Verbesserungswürdig");
}

// === LERNSTUFE 5: Funktionen ===
console.log("\n=== Lernstufe 5: Funktionen ===");

function quadrat(x) {
    return x * x;
}
console.log("Quadrat von 5:", quadrat(5));

// === LERNSTUFE 6: Arrays ===
console.log("\n=== Lernstufe 6: Arrays ===");

let farben = ["Rot", "Blau", "Grün"];
farben.push("Gelb");
console.log(farben);
farben.splice(1, 1);
console.log(farben);

// === LERNSTUFE 7: Schleifen ===
console.log("\n=== Lernstufe 7: Schleifen ===");

for (let i = 1; i <= 5; i++) {
    console.log("Zahl:", i);
}

let zahlen = [2, 4, 6, 8];
for (let zahl of zahlen) {
    console.log("Zahl aus Array:", zahl);
}

// === LERNSTUFE 8: Objekte ===
console.log("\n=== Lernstufe 8: Objekte ===");

let user = {
    name: "Mein Name",
    beruf: "Entwickler",
    aktiv: true
};
console.log(user.name);
user.email = "meineemail@example.com";
console.log(user);

// === LERNSTUFE 9: Methoden in Objekten ===
console.log("\n=== Lernstufe 9: Methoden ===");

let rechner = {
    add: (x, y) => x + y,
    sub: (x, y) => x - y
};
console.log("5 + 2 =", rechner.add(5, 2));

// === LERNSTUFE 10: Logische Operatoren ===
console.log("\n=== Lernstufe 10: Logische Operatoren ===");

let angemeldet = true;
let admin = false;
if (angemeldet && admin) {
    console.log("Admin-Bereich");
} else {
    console.log("Zugriff eingeschränkt");
}

// === LERNSTUFE 11: Klassen ===
console.log("\n=== Lernstufe 11: Klassen ===");

class Tier {
    constructor(name) {
        this.name = name;
    }
    sagHallo() {
        return `Hallo, ich bin ${this.name}`;
    }
}
let katze = new Tier("Miezi");
console.log(katze.sagHallo());

// === LERNSTUFE 12: Destructuring ===
console.log("\n=== Lernstufe 12: Destructuring ===");

let person = {
    vorname: "Lisa",
    alter: 28,
    beruf: "Designer"
};
let { vorname: n, beruf: berufPerson } = person;
console.log(`${n} arbeitet als ${berufPerson}`);

// === LERNSTUFE 13: Spread & Rest ===
console.log("\n=== Lernstufe 13: Spread & Rest ===");

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);

function summe(...zahlen) {
    return zahlen.reduce((acc, z) => acc + z, 0);
}
console.log("Summe:", summe(1, 2, 3, 4));

// === LERNSTUFE 14: Arrays filtern & mappen ===
console.log("\n=== Lernstufe 14: Filter & Map ===");

let werte = [1, 2, 3, 4, 5];
let gerade = werte.filter(w => w % 2 === 0);
let quadrate = werte.map(w => w * w);
console.log("Gerade Zahlen:", gerade);
console.log("Quadrate:", quadrate);

// === LERNSTUFE 15: Callbacks ===
console.log("\n=== Lernstufe 15: Callbacks ===");

function begruessen(name, callback) {
    console.log("Hallo " + name);
    callback();
}
begruessen("Mein Name", () => console.log("Callback ausgeführt!"));

// === LERNSTUFE 16: setTimeout & Intervall ===
console.log("\n=== Lernstufe 16: setTimeout ===");

setTimeout(() => {
    console.log("3 Sekunden später...");
}, 3000);

// === LERNSTUFE 17: Promises ===
console.log("\n=== Lernstufe 17: Promises ===");

let ladeDaten = new Promise((resolve) => {
    setTimeout(() => resolve("Daten geladen!"), 1000);
});
ladeDaten.then(data => console.log(data));

// === LERNSTUFE 18: fetch API (nur im Browser) ===
/*
console.log("\n=== Lernstufe 18: fetch API ===");

fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(json => console.log(json.value));
*/

// === LERNSTUFE 19: Fehlerbehandlung ===
console.log("\n=== Lernstufe 19: try/catch ===");

try {
    throw new Error("Etwas ist schief gelaufen");
} catch (e) {
    console.log("Fehler:", e.message);
}

// === LERNSTUFE 20: Module (theoretisch) ===
// In echten Projekten: export/import verwenden
console.log("\n=== Lernstufe 20: Abschluss ===");

console.log("Du hast 50+ JS-Übungen durchlaufen 🎉");
