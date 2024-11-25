let surak = +prompt("Заттың бағасын жазыңыз");
let surak2 = +prompt("Канша зат алдыңыз?" + "\n" + "тек 5 товарға дейін.");

function baga(surak) {
  if (surak == 5000) {
    return 5000 / 10;
  } else if (surak == 10000) {
    return 10000 / 20;
  } else if (surak == 20000) {
    return 20000 / 30;
  }
}

alert(baga(surak));
