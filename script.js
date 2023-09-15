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
const qualification_installation_info_2 = document.querySelector('.qualification .qualification_installation_info_2');
const installation_date = document.querySelector('.qualification #installation_date');

const project_title = document.querySelector('.projects .project_title');
const project_subtitle = document.querySelector('.projects .project_subtitle');
const projects_gmagro_title = document.querySelector('.projects #projects_gmagro_title');
const projects_gmagro_description = document.querySelector('.projects #projects_gmagro_description');
const projects_tech = document.querySelector('.projects .projects_tech');
const projects_tech_2 = document.querySelector('#project_container_2 .projects_tech');
const projects_demo = document.querySelector('.projects .projects_demo');
const projects_demo_2 = document.querySelector('#project_container_2 .projects_demo');
const projects_code = document.querySelector('.projects .projects_code');
const projects_code_2 = document.querySelector('#project_container_2 .projects_code');
const projects_view = document.querySelector('.projects .projects_view');
const projects_portfolio_title = document.querySelector('.projects #projects_portfolio_title');
const projects_portfolio_description = document.querySelector('.projects #projects_portfolio_description');


const about_gradient = document.querySelector('.about .about_gradient');
const about_me = document.querySelector('.about .about_me');
const about_description = document.querySelector('.about .about_description');


const contact_title = document.querySelector('.contact .contact_title');
const contact_gradient = document.querySelector('.contact .contact_gradient');
const contact_description = document.querySelector('.contact .contact_description');
const contact_text = document.querySelector('.contact #contact_button');

const success_header = document.querySelector('.contact #success_header');
const success_info = document.querySelector('.contact #success_info');



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
        qualification_installation_info_2.textContent = data[attr].qualification.qualification_installation_info_2;
        installation_date.textContent = data[attr].qualification.installation_date;


        project_title.textContent = data[attr].projects.project_title;
        project_subtitle.textContent = data[attr].projects.project_subtitle;
        projects_gmagro_title.textContent = data[attr].projects.projects_gmagro_title;
        projects_gmagro_description.textContent = data[attr].projects.projects_gmagro_description;
        projects_tech.textContent = data[attr].projects.projects_tech;
        projects_demo.textContent = data[attr].projects.projects_demo;
        projects_code.textContent = data[attr].projects.projects_code;
        projects_view.textContent = data[attr].projects.projects_view;
        projects_portfolio_title.textContent = data[attr].projects.projects_portfolio_title;
        projects_portfolio_description.textContent = data[attr].projects.projects_portfolio_description;
        projects_tech_2.textContent = data[attr].projects.projects_tech_2;
        projects_demo_2.textContent = data[attr].projects.projects_demo_2;
        projects_code_2.textContent = data[attr].projects.projects_code_2;


        about_gradient.textContent = data[attr].about.about_gradient;
        about_me.textContent = data[attr].about.about_me;
        about_description.textContent = data[attr].about.about_description;

        if (attr == "french") {
            home_h1.style.fontSize = "60px";
            home_h3.style.fontSize = "40px";
            home_engineer.style.fontSize = "40px";
        } else {
            home_h1.style.fontSize = "75px";
            home_h3.style.fontSize = "45px";
            home_engineer.style.fontSize = "45px";
        }

        contact_title.textContent = data[attr].contact.contact_title;
        contact_gradient.textContent = data[attr].contact.contact_gradient;
        contact_description.textContent = data[attr].contact.contact_description;
        contact_text.textContent = data[attr].contact.contact_text;
        success_header.textContent = data[attr].contact.success_header;
        success_info.textContent = data[attr].contact.success_info;


        
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
            "qualification_computer_info": "Je suis actuellement en deuxième année d'études supérieures dans le campus de La Salle à Clermont-Ferrand. J'y étudie en ce moment un BTS SIO.",
            "qualification_computer_info_2": "Dans lequel je me spécialise dans les solutions logicielles et les applications commerciales.",
            "qualification_high": "Bac",
            "qualification_high_info": "Mon diplôme d'études secondaires que j'ai obtenu en Martinique au lycée Paulette Nardal. Avec pour spécialisation l'informatique.",
            "qualification_software": "Stage d'ingénieur en logiciel",
            "qualification_software_info": "Mon stage au sein de la société Mboa Digital où j'ai participé à la création d'un outil de reporting des feuilles de temps en utilisant l'API de la société.",
            "qualification_software_info_2": "Pour ce faire. J'ai créé une application web full-stack en utilisant Angular et Python Flask.",
            "software_date": "mai 2022 - juill. 2022",
            "qualification_installation": "Installation de logiciels",
            "qualification_installation_info": "Pour mon deuxième stage, j'ai aidé les clients à installer et à migrer les logiciels fournis par l'entreprise.",
            "installation_date": "janv. 2023 - févr. 2023",
        },

        "projects":
        {
            "project_title": "Projets",
            "project_subtitle": "Mes plus récents travaux ",
            "projects_gmagro_title": "Logiciel GMAGRO",
            "projects_gmagro_description": "Gmagro est une solution de GMAO, acronyme pour Gestion de la Maintenance Assistée par Ordinateur. Principalement dédiée aux entreprises, cette application facilite la gestion de leurs équipements, de leur maintenance, et bien plus encore.",
            "projects_tech": "// Technologie utilisé",
            "projects_demo": "// Démo",
            "projects_code": "Voir le code",
            "projects_view": "Voir la démo",
            "projects_portfolio_title": "Ce portfolio",
            "projects_portfolio_description": "Mon portfolio personnel",
            "projects_tech_2": "// Technologie utilisé",
            "projects_demo_2": "// Démo",
            "projects_code_2": "Voir le code"
        },

        "about":
        {
            "about_gradient": "A propos",
            "about_me": "",
            "about_description": "Je suis un développeur informatique en troisième année de ma licence, spécialisé en tant que Concepteur Développeur d'Applications. Au cours de cette période, j'ai largement utilisé diverses technologies, améliorant continuellement mes compétences. Ma passion pour la technologie a grandement influencé ma carrière. Ci-dessous, je liste quelques-uns des outils dans lesquels je suis compétent."
        },

        "contact":
        {
            "contact_title": "Contactez - moi",
            "contact_gradient": "",
            "contact_description": "Envoyez-moi un mail à pardon.noah12802@gmail.com ou retrouvez-moi sur github et linkedIn.",
            "contact_text": "Envoyer",
            "success_header": "Votre message a bien été envoyé !",
            "success_info": "retrouvez-moi sur github et linkedIn."
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
            "home_engineer": "Engineer"
        },

        "qualification":
        {
            "qualification_title": "Qualification",
            "qualification_subtitle": "My journey",
            "qualification_education": "Education",
            "qualification_work": "Experience",
            "qualification_computer": "Computer Engineer",
            "qualification_computer_info": "I am currently in my second year of higher education at La Salle in France. Where I am studying for the French equivalent of a BTEC Higher National Diploma.",
            "qualification_computer_info_2": "My area of specialization is software solutions and business applications.",
            "qualification_high": "High school Diploma",
            "qualification_high_info": "My high school diploma that I realized in France at Paulette Nardal institute. With computer science as my specialization.",
            "qualification_software": "Software Engineer Internship",
            "qualification_software_info": "My internship at the company Mboa Digital where I helped in the creation of a timesheet reporting tool using the company's API sent to the clients each month.",
            "qualification_software_info_2": "For this purpose I created a full-stack web app using Angular and Python Flask.",
            "software_date": "may 2022 - july 2022",
            "qualification_installation": "Software installation",
            "qualification_installation_info": "For my second internship, I helped the customers install and migrate the softwares that the company provided.",
            "installation_date": "Jan 2023 - Feb 2023",
        },

        "projects":
        {
            "project_title": "Projects",
            "project_subtitle": "Most recent works",
            "projects_gmagro_title": "GMAGRO Desktop Application",
            "projects_gmagro_description": "Gmagro is a CMMS software aka computerized maintenance management system. It's primary use is to services and companies in their missions by mananging their equipments, maintenance and more",
            "projects_tech": "// Tech I used",
            "projects_demo": "// Demo",
            "projects_code": "See the code",
            "projects_view": "See the demo",
            "projects_portfolio_title": "This portfolio",
            "projects_portfolio_description": "My personal portfolio",
            "projects_tech_2": "// Tech I used",
            "projects_demo_2": "// Demo",
            "projects_code_2": "See the code"
        },

        "about":
        {
            "about_gradient": "About",
            "about_me": "me",
            "about_description": "I'm a Software Engineer in my second year of college. During these two years I have been using different technologies and sharpening my skills in back-end and front-end. Technology has always been a passion of mine and played a heavy role in my career choice. Here are some of the tools I'm proficient in."
        },

        "contact":
        {
            "contact_title": "Get in",
            "contact_gradient": "touch",
            "contact_description": "You can send me an email at pardon.noah12802@gmail.com or find me on github and linkedIn.",
            "contact_text": "Submit",
            "success_header": "Your message has been successfully submited !",
            "success_info": "find me on github and linkedIn."
        }
    }

}

