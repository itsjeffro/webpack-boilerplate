let root = "root";
let html = "Hello, webpack! There is ES2015+ support.";
let items = ["apple", "banana", "orange"];

items.map(item => {
  console.log(item);
});

document.getElementById(root).innerHTML = html;