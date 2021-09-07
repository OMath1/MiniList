const table = document.getElementById("item-table").rows.length;

if (table == 0) {
  // faz a tbody sumir e faz o p desejado aparecer
  document.getElementById("table").style.display = "none";
}
if (table >= 1) {
  document.getElementById("table").style.display = "block";
  document.getElementById("warning-div").style.display = "none";
}