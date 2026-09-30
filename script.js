const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function currentIndex(){
  const y = window.scrollY + window.innerHeight * 0.45;
  let idx = 0;
  slides.forEach((s,i)=>{ if(s.offsetTop <= y) idx=i; });
  return idx;
}
function go(i){
  i = Math.max(0, Math.min(slides.length-1, i));
  slides[i].scrollIntoView({behavior:"smooth", block:"start"});
}
function update(){
  const i=currentIndex();
  dots.forEach((d,n)=>d.classList.toggle("active",n===i));
}
prev.addEventListener("click",()=>go(currentIndex()-1));
next.addEventListener("click",()=>go(currentIndex()+1));
window.addEventListener("scroll",update,{passive:true});

document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowDown" || e.key==="ArrowRight") go(currentIndex()+1);
  if(e.key==="ArrowUp" || e.key==="ArrowLeft") go(currentIndex()-1);
});
update();
