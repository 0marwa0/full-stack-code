const myBody = document.body;
const changeModeButton = document.querySelector("#mode");
const myText = document.querySelectorAll(".mytext");
let theme = localStorage.getItem("theme");
window.onload = () => {
  // check the theme form the localstorage

  if (theme == "light") {
    myBody.classList.remove("darkmode");
    changeModeButton.checked = false;
    myText.forEach((elem) => {
      elem.classList.remove("darkmode");
    });
  } else if (theme == "dark") {
    changeModeButton.checked = true;
    myBody.classList.add("darkmode");
    myText.forEach((elem) => {
      elem.classList.add("darkmode");
    });
  }
  // add the right class
};

changeModeButton.addEventListener("change", function (e) {
  console.log(e.target.checked);
  if (e.target.checked) {
    localStorage.setItem("theme", "dark");
    console.log("Checkbox is checked..");
    myBody.classList.add("darkmode");
    myText.forEach((elem) => {
      elem.classList.add("darkmode");
    });
  } else if (!e.target.checked) {
    localStorage.setItem("theme", "light");
    console.log("Checkbox is not checked..");
    myBody.classList.remove("darkmode");
    myText.forEach((elem) => {
      elem.classList.remove("darkmode");
    });
  }
});
