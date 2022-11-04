let navToggled = false;
const body = document.getElementById("body");
function toggleNav() {
  if (navToggled==false) {
    console.log(body);
    body.style.left = "-50%";
    navToggled = true;
  }
  else {
    body.style.left = "0";
    navToggled = false;
  }
}