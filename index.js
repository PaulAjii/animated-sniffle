//Password JS var declarations

let info = document.getElementById('info');
let pwd = document.getElementById('password');
let str = document.getElementById('strength');

//Page-info display variables declarations

let pageTitle = document.getElementById('demo');

//Page-info display

function myHomeDisplay() {
  pageTitle.innerHTML = "Home";
}
function myAboutDisplay() {
  pageTitle.innerHTML = "About";
}
function myContactDisplay() {
  pageTitle.innerHTML = "Contact";
}
function myServiceDisplay() {
  pageTitle.innerHTML = "Service";
}

//Password JS 

pwd.addEventListener('input', () => {
  if(pwd.value.length > 0) {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
  if (pwd.value.length < 4) {
    str.innerHTML = "weak.";
    pwd.style.borderColor = "#ff5925";
    info.style.color = "#ff5925";
  } else if (pwd.value.length >= 4 && pwd.value.length < 8) {
    str.innerHTML = "medium.";
    pwd.style.borderColor = "yellow";
    info.style.color = "yellow";
  } else if (pwd.value.length >= 8) {
    str.innerHTML = "strong.";
    pwd.style.borderColor = "#26d730";
    info.style.color = "#26d730";
  }
  
});