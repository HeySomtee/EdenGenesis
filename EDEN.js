const holder = document.getElementById('holder');
const about = document.getElementById('about');
const roadMap = document.getElementById('roadmap');
const founders = document.getElementById('founders');


//#holder-displays
const aboutt = document.getElementById('aboutt');
const team = document.getElementById('team');
const plan = document.getElementById('plan');

//for mobile nav-bar
const about_mob = document.getElementById('about-mob');
const roadMap_mob = document.getElementById('roadmap-mob');
const founders_mob = document.getElementById('founders-mob');

about_mob.addEventListener('click', closeX)
roadMap_mob.addEventListener('click', closeX)
founders_mob.addEventListener('click', closeX)

about.addEventListener('click', closeX)
roadMap.addEventListener('click', closeX)
founders.addEventListener('click', closeX)

function closeX() {
    // alert('yo')
    holder.style.animationName = 'dragDown';
};

const close_btn = document.getElementById('close');

function reverseAnim() {
    holder.style.animationName = "pushUp";
};
close_btn.addEventListener("click", reverseAnim);


about.addEventListener('click', abtFunc);
about_mob.addEventListener('click', abtFunc);
function abtFunc() {
    // aboutt.style.display = 'block';
    // team.style.display = 'none';
    // plan.style.display = 'none';
    document.getElementById('enter').innerHTML = aboutt.innerHTML
}

founders.addEventListener('click', teamFunc);
founders_mob.addEventListener('click', teamFunc);
function teamFunc() {
    // team.style.display = 'block';
    // aboutt.style.display = 'none';
    // plan.style.display = 'none';
    document.getElementById('enter').innerHTML = team.innerHTML

}

roadMap.addEventListener('click', planFunc);
roadMap_mob.addEventListener('click', planFunc);
function planFunc() {
    // plan.style.display = 'block';
    // aboutt.style.display = 'none';
    // team.style.display = 'none';
    document.getElementById('enter').innerHTML = plan.innerHTML
    
}

const drop_btn = document.getElementById('dropdown');
const content = document.getElementById('nav-bar1');
const hamburger = document.getElementById('ham');

drop_btn.addEventListener("click", first);

function first(e) {
    console.log('clicked!');
    content.style.display = "block";
    var x = hamburger.className;
    hamburger.className = "fa-sharp fa-solid fa-x"
    var y = hamburger.className;

    console.log(x, ',', y);

    e.stopImmediatePropagation;
    this.removeEventListener('click', first)
    drop_btn.onclick = second;
}

function second(e) {
    content.style.display = "none";
    hamburger.className = "fa-solid fa-bars"

    e.stopImmediatePropagation;
    this.removeEventListener('click', first)
    drop_btn.onclick = first;

}

