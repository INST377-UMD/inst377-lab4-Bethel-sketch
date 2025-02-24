function alertName() {
  let name = document.getElementById("nameInput").value;
  if (name.trim() !== "") {
    alert("Hi " + name + "!");
  }
}

function changeColor() {
  let body = document.body;
  body.style.backgroundColor =
    body.style.backgroundColor === "blue" ? "green" : "blue";
}

function validateText() {
  let inputText = document.getElementById("textInput").value;
  let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (validation.test(inputText)) {
    alert("Special characters are not allowed!");
  } else {
    alert("Text is valid.");
  }
}

function addText() {
  let heading = document.getElementById("main-heading");
  heading.textContent += " Add Text";
}
