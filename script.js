let listOfColors = [
  ["#D0B8A8", "#8D493A", "#382114", "#382114", "#brown", "#eaac8b"],
  ["#c7f9cc", "#80ed99", "#57cc99", "#38a3a5", "#22577a", "#4895ef"]
];

let body_col = document.querySelector("body");
let changeColor = document.querySelector("button");
let nav_a = document.querySelectorAll("nav a");
let names = document.querySelectorAll(".Names");
let students = document.querySelectorAll(".student");
let paragraphs = document.querySelectorAll(".p-h2");
let nav = document.querySelector("nav");
let nav_items = document.querySelectorAll(".items");

changeColor.onclick = function () {
  let randomInt = Math.floor(Math.random() * listOfColors.length);
  
  // Update body background color
  body_col.style.backgroundColor = listOfColors[randomInt][0];

  nav.style.backgroundColor = listOfColors[randomInt][1];
  nav.style.border = `10px solid ${listOfColors[randomInt][1]}`;

  nav_a.forEach(item => {
      item.style.color = listOfColors[randomInt][2];
  });

  names.forEach(name => {
      name.style.color = listOfColors[randomInt][2];
  });

  students.forEach(student => {
      student.style.border = `7px solid ${listOfColors[randomInt][0]}`;
  });

  paragraphs.forEach(p => {
      p.style.border = `7px solid ${listOfColors[randomInt][0]}`;
  });

  nav_items.forEach(item => {
      item.style.color = listOfColors[randomInt][2];
      item.style.backgroundColor = listOfColors[randomInt][3];
  });
  changeColor.style.backgroundColor = listOfColors[randomInt][5];
}
