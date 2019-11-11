const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
const btn = document.querySelector("a");
const form = document.querySelector("form");
let sub = true;
const patterns = {
  name: /^([a-zء-ي]){3,12}(\s[a-z]{3,12})?/i,
  image: /^.{1,299}$/s,
  price: /^[0-9]{1,5}$/,
  desc: /^.{1,299}$/s
};
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";

    document.getElementById("send").style.display = "none";
  } else {
    field.className = "invalid";
    sub = false;
    document.getElementById("send").style.display = "none";
  }
}
inputs.forEach(input => {
  input.addEventListener("keyup", e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
textarea.addEventListener("keyup", e => {
  validate(e.target, patterns.desc);
});

form.addEventListener("submit", e => {
  e.preventDefault();
  inputs.forEach(input => {
    validate(input, patterns[input.name]);
  });
  validate(desc, patterns.desc);
  let check = document.querySelectorAll(".invalid").length == 0;
  if (check) {
    const id = Math.floor(Math.random() * (999999999 - 11 + 1)) + 11;
    console.log(form);
    addNewProduct(id, form);
    document.getElementById("send").style.display = "inline";
    form.reset();
  } else {
    document.getElementById("send").style.display = "none";
  }
});
