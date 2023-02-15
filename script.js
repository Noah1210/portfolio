let menu = document.querySelector('#menu-icon');
let nav__links = document.querySelector('.nav__links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav__links.classList.toggle('open');
}



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

