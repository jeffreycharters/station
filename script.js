window.addEventListener("DOMContentLoaded", (load) => {
  let visit = Number(localStorage.getItem("counter"));
  visit == 0 ? (visit += 1) : visit;
  document.querySelector(
    "#visitCounter"
  ).innerText = `Number of Visits: ${visit}`;
  localStorage.setItem("counter", (visit += 1));
});


window.addEventListener('DOMContentLoaded',(load)=>{
 let visit=Number(localStorage.getItem('counter'))
 visit==0?visit+=1:visit
 document.querySelector('#visitCounter').innerText=`Number of Visits: ${visit}`
 localStorage.setItem('counter',visit+=1)
})


let emoji =
  "😄🙃🤪🤩🤓🤔🤨🧐🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐";

console.log("you are already console but i console some emojies" + emoji);

const icons = document.querySelectorAll(".svg-icon");
const container = document.querySelector(".container");
const title = document.querySelector("h2");
const links = document.querySelectorAll(".link");

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

      document.querySelector("body").classList.add("light-mode");
    } else {
      container.classList.remove("light-mode");
      links[1].style.color = null;
      links[3].style.color = null;

      title.classList.remove("light-mode-gradient");
      links.forEach((e) => e.classList.remove("link-light-mode"));
      document.querySelector("body").classList.remove("light-mode");
    }
  });
});
