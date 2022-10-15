// now ,split text into letters
const text = document.querySelector(".text3");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

// now , add active class on hovered <span> tags
const letters = document.querySelectorAll("span");
for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("mouseover", function () {
    letters[i].classList.add("active");
  });
}
//For buuton toggle sun and moon section
const section = document.querySelector(".section");
document.querySelector(".toggle").onclick = function () {
  section.classList.toggle("light");
};
// for three diferent backgrounds
const section61 = document.querySelector(".section6");
document.querySelector(".input1").onclick = function () {
  section61.classList.toggle("changebackground1");
};
const section63 = document.querySelector(".section6");
document.querySelector(".input3").onclick = function () {
  section63.classList.toggle("changebackground3");
};
const section62 = document.querySelector(".section6");
document.querySelector(".input2").onclick = function () {
  section62.classList.toggle("changebackground2");
};
//now white function for header scroll property
// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });
