var giocatore1 = Math.floor(Math.random() * 12) + 1;
console.log("Lancio giocatore 1 = "  +  giocatore1);

var giocatore2 = Math.floor(Math.random() * 12) + 1;
console.log("Lancio giocatore 2 = "  +  giocatore2);

if (giocatore1 < giocatore2) {
  console.log("Vittoria di : Giocatore 2");
}else if (giocatore2 < giocatore1) {
  console.log("Vittoria di : Giocatore 1");
}else if (giocatore1 == giocatore2) {
  console.log("Parità");
}
