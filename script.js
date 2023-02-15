// Creating a menu

let menu = document.querySelector('#menu-icon');
let nav__links = document.querySelector('.nav__links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav__links.classList.toggle('open');
}

// Determining which section is active

const li = document.querySelectorAll(".links")
const sec= document.querySelectorAll("section")

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);


// Changing the display on button click 

let school = document.querySelector('.school')
let work = document.querySelector('.work')

work.addEventListener('click', () => {
    work.style.backgroundColor = 'rgb(14, 101, 182)';
    school.style.backgroundColor = 'rgb(16, 138, 251)';
    document.getElementById("qualification_school").style.display = "none";
    document.getElementById("qualification_work").style.display = "inline-flex";
})
school.addEventListener('click', () => {
    school.style.backgroundColor = 'rgb(14, 101, 182)';
    work.style.backgroundColor = 'rgb(16, 138, 251)';
    document.getElementById("qualification_work").style.display = "none";
    document.getElementById("qualification_school").style.display = "inline-flex";
})

