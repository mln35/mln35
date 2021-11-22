json_data = `{
    "trainings": [
        {
            "grade": "Master",
            "domaine": "Informatique",
            "specialite": "Gestion de Données et Ingénierie Logicielle (GDIL)",
            "etablissement": {
                "nom":"Université Gaston Berger (UGB)",
                "ville":"Saint Louis"
            },
            "annee": "2020",
            "mention":"BIEN"
        },
        {
            "grade": "LICENCE",
            "domaine": "Informatique",
            "specialite": "Gestion de Données et Ingénierie Logicielle (GDIL)",
            "etablissement": {
                "nom":"Université Gaston Berger (UGB)",
                "ville":"Saint Louis"
            },
            "annee": "2016",
            "mention":"ASSEZ BIEN"
        },
        {
            "grade": "BACCALAUREAT",
            "domaine": "S1",
            "specialite": "Mathématiques et Sciences Physiques",
            "etablissement": {
                "nom":"Lycée Taïba-ICS",
                "ville":"Mboro"
            },
            "annee": "2012",
            "mention":""
        }
        
    ],
    "skills": [
        {
            "nom": "Web front-end",
            "level": "",
            "subskills": [
                {
                    "nom": "HTML",
                    "level": ""
                },
                {
                    "nom": "CSS",
                    "level": ""
                },
                
                {
                    "nom": "Angular",
                    "level": ""
                },
                {
                    "nom": "Symfony",
                    "level": ""
                }
               
            ]
        },
        {
            "nom": "Web back-end",
            "level": "",
            "subskills": [
                {
                    "nom": "NodeJS",
                    "level": ""
                },
                {
                    "nom": "Express",
                    "level": ""
                },
                {
                    "nom": "JEE",
                    "level": ""
                },
                {
                    "nom": ".NET",
                    "level": ""
                },
                {
                    "nom": "PHP",
                    "level": ""
                },
                {
                    "nom": "SpringBoot",
                    "level": ""
                }
            ]
        },
        {
            "nom": "Administration Base de Données",
            "level": "",
            "subskills": [
                {
                    "nom": "MySQL",
                    "level": ""
                },
                {
                    "nom": "Oracle",
                    "level": ""
                },
                {
                    "nom": "PL_SQL",
                    "level": ""
                },
                {
                    "nom": "MongoDB",
                    "level": ""
                },
                {
                    "nom": "Firebase",
                    "level": ""
                }

            ]
        },
        {
            "nom": "",
            "level": ""
        },
        {
            "nom": "",
            "level": ""
        }
    ],
    "experience": [
        {
            "type": "Stage",
            "poste": "Développeur Informatique",
            "sujet": "Développement de services digitaux d'aide à l'agriculture",
            "etablissement": {
                "nom":"Multiservices Agricoles",
                "sigle": "MSA",
                "ville":"Saint Louis"
            },
            "annee": "2020-2021"
        },
        {
            "type": "Stage",
            "poste": "",
            "sujet": "Développement de services digitaux d'aide à l'agriculture",
            "etablissement": {
                "nom":"Multiservices Agricoles",
                "sigle": "MSA",
                "ville":"Saint Louis"
            },
            "annee": "2020-2021"
        },
        {
            "type": "Stage",
            "poste": "Développeur Informatique",
            "sujet": "Développement de services digitaux d'aide à l'agriculture",
            "etablissement": {
                "nom":"Multiservices Agricoles",
                "sigle": "MSA",
                "ville":"Saint Louis"
            },
            "annee": "2020-2021"
        }
    ]
}`;

render = (element, txt) => {
    let spec = document.createElement(element);
    spec.innerHTML = txt;
    return spec;
}

let data = JSON.parse(json_data);
console.log(data);
///////////////////////////////////////////////////
let skills_dom = document.querySelector('.skills');
for (skill of data.skills){
    if(skill){
        console.log(skill);
        let skilldiv = document.createElement('div');
        skilldiv.classList.add('skilldiv');
        let skilltitle = document.createElement('ul');
        skilltitle.innerHTML = skill.nom;
        skilldiv.appendChild(skilltitle);
        if(skill.subskills){
            for (subskill of skill.subskills){
                if (subskill){
                    console.log(subskill)
                    let subskilldiv = document.createElement('li');
                    subskilldiv.classList.add('subskilldiv');
                    subskilldiv.innerHTML = subskill.nom;
                    skilldiv.appendChild(subskilldiv);
                }
            }
        }
        skills_dom.appendChild(skilldiv);
    }
}

///////////////////////////////////////////////////
let training_dom = document.querySelector('.trainings');
for (training of data.trainings){
    if(training){
        console.log(training);

        let t_div = document.createElement('div');
        t_div.classList.add('trainingdiv');
        
        t_domain = render('ul',training.grade +' '+ training.domaine);

        t_spec = render('li',training.specialite);

        t_school = render('li',training.etablissement.nom + ' de '+training.etablissement.ville);

        t_domain.appendChild(t_spec);

        t_domain.appendChild(t_school);

        t_div.appendChild(t_domain);
        
        training_dom.appendChild(t_div);
    }
}

///////////////////////////////////////////////////
let exp_dom = document.querySelector('.exp');
for (exp of data.experience){
    if(exp){
        console.log(exp);

        let e_div = document.createElement('div');
        e_div.classList.add('expdiv');
        
        e_type = render('ul',exp.type);
        
        e_host = render('li',exp.etablissement.nom + ' ('+exp.etablissement.sigle+')');

        e_poste = render('li',exp.poste);

        e_sujet = render('li',exp.poste);

        e_type.appendChild(e_host);

        e_type.appendChild(e_poste);

        e_type.appendChild(e_sujet);

        e_div.appendChild(e_type);
        
        exp_dom.appendChild(e_div);
    }
}

