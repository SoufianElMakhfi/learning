    const stufen = {
      1: () => {
        console.group("Lernstufe 1: Variablen");
        let name = "Sou", alter = 35, istEntwickler = true, gehalt = null, adresse;
        console.log(name, alter, istEntwickler, gehalt, adresse);
        console.groupEnd();
      },
      2: () => {
        console.group("Lernstufe 2: Arithmetik");
        let a = 10, b = 3;
        console.log("a + b =", a + b);
        console.log("a % b =", a % b);
        console.log("a ** b =", a ** b);
        console.groupEnd();
      },
      3: () => {
        console.group("Lernstufe 3: Strings");
        let satz = "JavaScript ist großartig!";
        console.log(satz.length, satz.toUpperCase(), satz.includes("Script"));
        console.groupEnd();
      },
      4: () => {
        console.group("Lernstufe 4: Bedingungen");
        let punkte = 87;
        console.log(
          punkte >= 90 ? "Sehr gut" : punkte >= 80 ? "Gut" : "Verbesserungswürdig"
        );
        console.groupEnd();
      },
      5: () => {
        console.group("Lernstufe 5: Funktionen");
        function quadrat(x) { return x * x; }
        console.log("5² =", quadrat(5));
        console.groupEnd();
      },
      6: () => {
        console.group("Lernstufe 6: Arrays");
        let farben = ["Rot", "Blau", "Grün"];
        farben.push("Gelb");
        farben.splice(1, 1);
        console.log(farben);
        console.groupEnd();
      },
      7: () => {
        console.group("Lernstufe 7: Schleifen");
        for (let i = 1; i <= 3; i++) console.log("Zahl:", i);
        ["A", "B", "C"].forEach(b => console.log("Buchstabe:", b));
        console.groupEnd();
      },
      8: () => {
        console.group("Lernstufe 8: Objekte");
        let user = { name: "Sou", beruf: "Dev", aktiv: true };
        user.email = "sou@example.com";
        console.log(user);
        console.groupEnd();
      },
      9: () => {
        console.group("Lernstufe 9: Methoden");
        let rechner = {
          add: (x, y) => x + y,
          sub: (x, y) => x - y
        };
        console.log("5 + 2 =", rechner.add(5, 2));
        console.groupEnd();
      },
      10: () => {
        console.group("Lernstufe 10: Logik");
        let login = true, admin = false;
        console.log(login && admin ? "Adminbereich" : "Zugriff eingeschränkt");
        console.groupEnd();
      },
      11: () => {
        console.group("Lernstufe 11: Klassen");
        class Tier {
          constructor(name) { this.name = name; }
          sagHallo() { return `Ich bin ${this.name}`; }
        }
        console.log(new Tier("Katze").sagHallo());
        console.groupEnd();
      },
      12: () => {
        console.group("Lernstufe 12: Destructuring");
        let { vorname, beruf } = { vorname: "Lisa", alter: 28, beruf: "UX" };
        console.log(`${vorname} ist ${beruf}`);
        console.groupEnd();
      },
      13: () => {
        console.group("Lernstufe 13: Spread & Rest");
        let zahlen = [1, 2, 3], neu = [...zahlen, 4];
        function summe(...args) {
          return args.reduce((a, b) => a + b, 0);
        }
        console.log(neu, "Summe:", summe(5, 5, 10));
        console.groupEnd();
      },
      14: () => {
        console.group("Lernstufe 14: Map & Filter");
        let nums = [1, 2, 3, 4];
        console.log(nums.map(n => n * 2));
        console.log(nums.filter(n => n % 2 === 0));
        console.groupEnd();
      },
      15: () => {
        console.group("Lernstufe 15: Callback");
        function begruessen(name, cb) {
          console.log("Hallo " + name);
          cb();
        }
        begruessen("Sou", () => console.log("Callback läuft!"));
        console.groupEnd();
      },
      16: () => {
        console.group("Lernstufe 16: setTimeout");
        setTimeout(() => console.log("3 Sekunden später..."), 3000);
        console.groupEnd();
      },
      17: () => {
        console.group("Lernstufe 17: Promise");
        new Promise(res => setTimeout(() => res("Fertig!"), 1000))
          .then(msg => console.log(msg));
        console.groupEnd();
      },
      18: () => {
        console.group("Lernstufe 18: Fetch API");
        console.log("Nur im echten Browser mit Internet nutzbar.");
        // fetch("https://api.chucknorris.io/jokes/random")
        //   .then(res => res.json())
        //   .then(data => console.log(data.value));
        console.groupEnd();
      },
      19: () => {
        console.group("Lernstufe 19: Fehlerbehandlung");
        try {
          throw new Error("Oops!");
        } catch (e) {
          console.log("Fehler:", e.message);
        }
        console.groupEnd();
      },
      20: () => {
        console.group("Lernstufe 20: Abschluss");
        console.log("🎉 Du hast alle 20 Stufen ausgeführt!");
        console.groupEnd();
      }
    };

    const container = document.getElementById("buttons");
    for (let i = 1; i <= 20; i++) {
      let btn = document.createElement("button");
      btn.textContent = `▶️ Lernstufe ${i}`;
      btn.onclick = () => stufen[i]();
      container.appendChild(btn);
    }

