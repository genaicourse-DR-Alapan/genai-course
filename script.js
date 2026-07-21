// Progress Bar

window.onscroll = function () {

let winScroll =
document.body.scrollTop ||
document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrolled = (winScroll / height) * 100;

document.getElementById("progressBar").style.width =
scrolled + "%";

// Scroll button

const btn =
document.getElementById("topBtn");

if(winScroll>400)
btn.style.display="block";
else
btn.style.display="none";

};

// Scroll Top

document.getElementById("topBtn")
.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(

'.module-card,.about-card,.evaluation-card,.book-card,.timeline-content,.milestone-card'

).forEach(el=>{

el.style.opacity=0;

el.style.transform="translateY(60px)";

el.style.transition=".8s";

observer.observe(el);

});
function openWeek1() {
    document.getElementById("week1Modal").style.display = "block";
}

function closeWeek1() {
    document.getElementById("week1Modal").style.display = "none";
}
