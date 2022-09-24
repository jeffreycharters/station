
window.addEventListener('DOMContentLoaded',(load)=>{
 let visit=Number(localStorage.getItem('counter'))
 visit==0?visit+=1:visit
 document.querySelector('#visitCounter').innerText=`Number of Visits: ${visit}`
 localStorage.setItem('counter',visit+=1)
})
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
