const body = document.getElementById("body");
const sidebar = document.getElementById("sidebar");

// Initialize
let navToggled = false;
body.style.left = "0";
sidebar.style.right = "-50%";

function toggleNav() {
  if (navToggled == false) {
    body.style.left = "-50%";
    sidebar.style.right = "0";
    navToggled = true;
  }
  else {
    body.style.left = "0";
    sidebar.style.right = "-50%";
    navToggled = false;
  }
}