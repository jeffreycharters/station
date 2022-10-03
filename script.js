window.addEventListener("DOMContentLoaded", (load) => {
  let visit = Number(localStorage.getItem("counter"));
  visit == 0 ? (visit += 1) : visit;
  document.querySelector(
    "#visitCounter"
  ).innerText = `Number of Visits: ${visit}`;
  localStorage.setItem("counter", (visit += 1));
});

function func()
{
  document.getElementById('embed').style.display='inline-block';
  document.getElementById('h1').scrollIntoView();
  new Audio("epic.mp3").play();
  document.getElementById('plus').style.display='none';
}


let emoji =
  "😄🙃🤪🤩🤓🤔🤨🧐🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐";

console.log("you are already console but i console some emojies" + emoji);

const icons = document.querySelectorAll(".svg-icon");
const container = document.querySelector(".container");
const title = document.querySelector("h2");
const links = document.querySelectorAll(".link");
let root = document.querySelector(":root");

icons.forEach(function (e) {
  e.addEventListener("click", function () {
    console.log(e);
    const nextIcon = e.getAttribute("data-set");
    e.classList.add("hidden");
    document.querySelector(`.${nextIcon}`).classList.remove("hidden");

    if (nextIcon === "moon") {
      container.classList.add("light-mode");
      title.classList.add("light-mode-gradient");
      links.forEach((e) => e.classList.add("link-light-mode"));
      links[1].style.color = "#FA7070";
      links[3].style.color = "#FA7070";
      root.style.setProperty('--bgc','white');
      root.style.setProperty('--content','black');
      
      document.querySelector("body").classList.add("light-mode");
    } else {
      container.classList.remove("light-mode");
      links[1].style.color = null;
      links[3].style.color = null;
      
      title.classList.remove("light-mode-gradient");
      links.forEach((e) => e.classList.remove("link-light-mode"));
      document.querySelector("body").classList.remove("light-mode");
      root.style.setProperty('--bgc','black');
      root.style.setProperty('--content','white');
    }
  });
});


// change form bg color

const colorForm = document.getElementById("color-form");
const colorPicker = document.getElementById("color-picker");
const favoriteHex = document.getElementById("favorite-hex")

colorForm.addEventListener("submit", function changeColor(e){
  e.preventDefault();
  colorForm.style.backgroundColor = colorPicker.value;
  favoriteHex.innerHTML = `
    Your favorite color has the hex code: ${colorPicker.value}
  `;
  
});
