// const knygos = {
//   grozine: [
//     {
//       ISBN: "GR1236K",
//       leidimoMetai: 2023,
//       pavadinimas: "Mano mintys debesyse",
//       pslSkaicius: 300,
//     },
//     {
//       ISBN: "GR1286K",
//       leidimoMetai: 2015,
//       pavadinimas: "Mano mintys juroje",
//       pslSkaicius: 256,
//     },
//     {
//       ISBN: "GR1436K",
//       leidimoMetai: 2016,
//       pavadinimas: "Virdulys orkaiteje",
//       pslSkaicius: 321,
//     },
//     {
//       ISBN: "GR1536K",
//       leidimoMetai: 1987,
//       pavadinimas: "Namuose kate",
//       pslSkaicius: 251,
//     },
//   ],
//   // -----------------------------------------------
//   teisine: [
//     {
//       ISBN: "GR1277K",
//       leidimoMetai: 2005,
//       pavadinimas: "Nuosprendis",
//       pslSkaicius: 425,
//     },
//     {
//       ISBN: "GR1278K",
//       leidimoMetai: 2007,
//       pavadinimas: "Nuosprendis tesinys",
//       pslSkaicius: 422,
//     },
//     {
//       ISBN: "GR1587K",
//       leidimoMetai: 2023,
//       pavadinimas: "Vadovo pergale",
//       pslSkaicius: 425,
//     },
//     {
//       ISBN: "GR1727K",
//       leidimoMetai: 2002,
//       pavadinimas: "Rimtuma",
//       pslSkaicius: 325,
//     },
//   ],
//   // ---------------------------------------------
//   religine: [
//     {
//       ISBN: "GR1114K",
//       leidimoMetai: 2006,
//       pavadinimas: "Religija",
//       pslSkaicius: 865,
//     },
//     {
//       ISBN: "GR1217K",
//       leidimoMetai: 2005,
//       pavadinimas: "Religines vertybes",
//       pslSkaicius: 555,
//     },
//     {
//       ISBN: "GR1481K",
//       leidimoMetai: 2023,
//       pavadinimas: "Tvarumas",
//       pslSkaicius: 445,
//     },
//     {
//       ISBN: "GR1685K",
//       leidimoMetai: 2018,
//       pavadinimas: "Karti tiesa",
//       pslSkaicius: 315,
//     },
//   ],
// };
// console.log(knygos);

// for (let kategorija in knygos) {
//   console.log(`${kategorija} (${knygos[kategorija].length} knygos)`);
//   console.log("--------------");
//   for (knyga of knygos[kategorija]) {
//     console.log(`ISBN: ${knyga.ISBN}`);
//     if (knyga.leidimoMetai == 2023) {
//       console.log(`Leidimo metai: ${knyga.leidimoMetai} (nauja knyga)`);
//     } else {
//       console.log(`Leidimo metai:${knyga.leidimoMetai}`);
//     }
//     console.log(`Pavadinimas: ${knyga.pavadinimas}`);
//     console.log(`Puslapiu skaicius: ${knyga.pslSkaicius}`);
//     console.log("--------------");
//   }
// }

//--------------------------------------------------------------------------

// const article = (document.querySelector("article").style.backgroundColor =
//   "tomato");
// console.log(article);
// document.querySelector("p").innerHTML = "<strong>Labai gerai</strong>";

// for (let text of document.querySelectorAll("h4")) {
//   texxt.textContenct = "Labas rytas Lietuva";
// }
// const ul = document.createElement("ul");
// const li = document.createElement("li");
// li.textContent = "Labai svarbus darbas";

// document.querySelector("section").appendChild(ul);
// document.querySelector("ul").appendChild(li);
// /*
//  * Naudodami JavaScript sukurkite HTML lentele, kuria sudaro 3 eilutes ir 10 stuplepiu.
//  */

var table = document.createElement('table'), tr, td, row, cell;
for (row = 0; row < 3; row++) {
    tr = document.createElement('tr');
    for (cell = 0; cell < 10; cell++) {
        td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.querySelector('body').appendChild(table)