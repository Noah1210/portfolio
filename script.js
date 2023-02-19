// Creating a menu

let menu = document.querySelector('#menu-icon');
let nav__links = document.querySelector('.nav__links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav__links.classList.toggle('open');
}

// Determining which section is active

const li = document.querySelectorAll(".links")
const sec = document.querySelectorAll("section")

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) { }
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
    document.getElementById("qualification_work").style.display = "flex";
})
school.addEventListener('click', () => {
    school.style.backgroundColor = 'rgb(14, 101, 182)';
    work.style.backgroundColor = 'rgb(16, 138, 251)';
    document.getElementById("qualification_work").style.display = "none";
    document.getElementById("qualification_school").style.display = "flex";
})

// Adding a language changer

let en = document.querySelector('#enSel');
let fr = document.querySelector('#frSel');
let switch_bar = document.querySelector('.switch_button');
const link = document.querySelectorAll('.language a');
const langE1 = document.querySelector('.language');



const navigation_home = document.querySelector('.nav__links .home');
const navigation_education = document.querySelector('.nav__links .education');
const navigation_projects = document.querySelector('.nav__links .projects');
const navigation_about = document.querySelector('.nav__links .about');
const navigation_contact = document.querySelector('.nav__links .contact');

const home_h1 = document.querySelector('.intro h1');
const home_h3 = document.querySelector('.intro .software');
const home_engineer = document.querySelector('.intro .engineer');

const qualification_title = document.querySelector('.qualification .title');
const qualification_subtitle = document.querySelector('.qualification .subtitle');
const qualification_education = document.querySelector('.qualification .wowzers');
const qualification_work = document.querySelector('.qualification .wowz');
const qualification_computer = document.querySelector('.qualification #qualification_computer');
const qualification_computer_info = document.querySelector('.qualification .qualification_computer_info');
const qualification_computer_info_2 = document.querySelector('.qualification .qualification_computer_info_2');
const qualification_high = document.querySelector('.qualification #qualification_high');
const qualification_high_info = document.querySelector('.qualification .qualification_high_info');
const qualification_software = document.querySelector('.qualification #qualification_software');
const qualification_software_info = document.querySelector('.qualification .qualification_software_info');
const qualification_software_info_2 = document.querySelector('.qualification .qualification_software_info_2');
const software_date = document.querySelector('.qualification #software_date');
const qualification_installation = document.querySelector('.qualification #qualification_installation');
const qualification_installation_info = document.querySelector('.qualification .qualification_installation_info');
const installation_date = document.querySelector('.qualification #installation_date');

link.forEach(el => {
    el.addEventListener('click', () => {

        console.log(el.classList);
        if (el.classList == "inactive") {
            console.log("help");
            switch_bar.classList.toggle('fr');
        }
        langE1.querySelector('.current').classList.replace('current', 'inactive');
        el.classList.remove('inactive');
        el.classList.add('current');

        const attr = el.getAttribute('language');

        navigation_home.textContent = data[attr].headers.navigation_home;
        navigation_education.textContent = data[attr].headers.navigation_education;
        navigation_projects.textContent = data[attr].headers.navigation_projects;
        navigation_about.textContent = data[attr].headers.navigation_about;
        navigation_contact.textContent = data[attr].headers.navigation_contact;


        home_h1.textContent = data[attr].home.home_h1;
        home_h3.textContent = data[attr].home.home_h3;
        home_engineer.textContent = data[attr].home.home_engineer;


        qualification_title.textContent = data[attr].qualification.qualification_title;
        qualification_subtitle.textContent = data[attr].qualification.qualification_subtitle;
        qualification_education.textContent = data[attr].qualification.qualification_education;
        qualification_work.textContent = data[attr].qualification.qualification_work;
        qualification_computer.textContent = data[attr].qualification.qualification_computer;
        qualification_computer_info.textContent = data[attr].qualification.qualification_computer_info;
        qualification_computer_info_2.textContent = data[attr].qualification.qualification_computer_info_2;
        qualification_high.textContent = data[attr].qualification.qualification_high;
        qualification_high_info.textContent = data[attr].qualification.qualification_high_info;
        qualification_software.textContent = data[attr].qualification.qualification_software;
        qualification_software_info.textContent = data[attr].qualification.qualification_software_info;
        qualification_software_info_2.textContent = data[attr].qualification.qualification_software_info_2;
        software_date.textContent = data[attr].qualification.software_date;
        qualification_installation.textContent = data[attr].qualification.qualification_installation;
        qualification_installation_info.textContent = data[attr].qualification.qualification_installation_info;
        installation_date.textContent = data[attr].qualification.installation_date;

        console.log(attr);
        if (attr == "french") {
            console.log(attr);
            home_h1.style.fontSize = "60px";
            home_h3.style.fontSize = "40px";
            home_engineer.style.fontSize = "40px";
        } else {
            home_h1.style.fontSize = "75px";
            home_h3.style.fontSize = "45px";
            home_engineer.style.fontSize = "45px";
        }
    })
})

var data = {

    "french":
    {
        "headers":
        {
            "navigation_home": "Acceuil",
            "navigation_education": "Compétence",
            "navigation_projects": "Projets",
            "navigation_about": "A propos",
            "navigation_contact": "Contact",
            "navigation_English": "Anglais",
            "navigation_French": "Francais",

        },

        "home":
        {
            "home_h1": "Salut, je m'appelle Noah Pardon",
            "home_h3": "Je suis un",
            "home_engineer": "Développeur"
        },

        "qualification":
        {
            "qualification_title": "Compétences",
            "qualification_subtitle": "Mon voyage",
            "qualification_education": "Éducation",
            "qualification_work": "Travail",
            "qualification_computer": "Développeur",
            "qualification_computer_info": "Je suis actuellement en deuxième année d'études supérieures dans le campus de La Salle à Clermont-Ferrand. J'y étudie actuellement un BTS SIO.",
            "qualification_computer_info_2": "Dans lequel je me spécialise dans les solutions logicielles et les applications commerciales.",
            "qualification_high": "Bac",
            "qualification_high_info": "Mon diplôme d'études secondaires que j'ai obtenu en Martinique au lycée Paulette Nardal. Avec pour spécialisation l'informatique.",
            "qualification_software": "Stage d'ingénieur en logiciel",
            "qualification_software_info": "Mon stage au sein de la société Mboa Digital où j'ai participé à la création d'un outil de reporting des feuilles de temps en utilisant l'API de la société.",
            "qualification_software_info_2": "Pour ce faire. J'ai créé une application web full-stack en utilisant Anuglar et Python Flask.",
            "software_date": "mai 2022 - juill. 2022",
            "qualification_installation": "Installation de logiciels",
            "qualification_installation_info": "Pour mon deuxième stage, j'ai aidé les clients à installer et à migrer les logiciels fournis par l'entreprise.",
            "installation_date": "janv. 2023 - févr. 2023",
        }



    },
    "english":
    {
        "headers":
        {
            "navigation_home": "Home",
            "navigation_education": "Qualification",
            "navigation_projects": "Projects",
            "navigation_about": "About",
            "navigation_contact": "Contact",
            "navigation_English": "English",
            "navigation_French": "French",
        },

        "home":
        {
            "home_h1": "Hi, I'm Noah Pardon",
            "home_h3": "I'm a Software",
            "home_engineer": "engineer"
        },

        "qualification":
        {
            "qualification_title": "Qualification",
            "qualification_subtitle": "My journey",
            "qualification_education": "Education",
            "qualification_work": "Work",
            "qualification_computer": "Computer Engineer",
            "qualification_computer_info": "I am currently in my second year of higher education at La Salle in France. Where I am currently studying for the French equivalent of a BTEC Higher National Diploma.",
            "qualification_computer_info_2": "In which I specialize in software solutions and business applications.",
            "qualification_high": "High school Diploma",
            "qualification_high_info": "My high school diploma that I realized in France at Paulette Nardal institute. With computer science as my specialization.",
            "qualification_software": "Software Engineer Internship",
            "qualification_software_info": "My internship at the company Mboa Digital where I helped in the creation of a timesheet reporting tool using the company's API sent to the clients each month.",
            "qualification_software_info_2": "For this purpose I created a full-stack web app using Anuglar and Python Flask.",
            "software_date": "may 2022 - july 2022",
            "qualification_installation": "Software installation",
            "qualification_installation_info": "For my second internship, I helped the customers install and migrate the softwares that the company provided.",
            "installation_date": "Jan 2023 - Feb 2023",
        }
    }
}

