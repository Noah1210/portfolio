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
    // var work_div = document.getElementById("qualification_work");
    // var education_div = document.getElementById("qualification_school");
    // education_div.replaceWith(work_div);
    // work_div.style.display = ''
})
school.addEventListener('click', () => {
    school.style.backgroundColor = 'rgb(14, 101, 182)';
    work.style.backgroundColor = 'rgb(16, 138, 251)';
    document.getElementById("qualification_work").style.display = "none";
    document.getElementById("qualification_school").style.display = "inline-flex";
    //document.getElementById("qualification_work").innerHTML = document.getElementById("qualification_school").innerHTML;
    // var work_div = document.getElementById("qualification_work");
    // var education_div = document.getElementById("qualification_school");
    // work_div.replaceWith(education_div);
})




// var education_div = document.getElementById("qualification_school");
//     education_div.parentNode.removeChild(education_div);
// var work_div = document.getElementById("qualification_work");
// work_div.parentNode.removeChild(work_div);


// work.onclick = () => {
//     work.classList.toggle('work_active')
//     school.classList.toggle('school_active')
// }

// school.onclick = () => {
//     work.classList.toggle('school_active')
//     school.classList.toggle('school')
// }