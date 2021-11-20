json_data = `{
    "formation": [
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
            "type": "Stage",
            "poste": "Dev",
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
        
    ]
}`;

let data = JSON.parse(json_data);
console.log(data);
let training_dom = document.querySelector('.skills');
for (skill of data.skills){
    if(skill){
        console.log(skill);
        let skilldiv = document.createElement('div');
        skilldiv.classList.add('skilldiv');
        let skilltitle = document.createElement('h4');
        skilltitle.innerHTML = skill.nom;
        skilldiv.appendChild(skilltitle);
        for (subskill of skill.subskills){
            console.log(subskill)
            let subskilldiv = document.createElement('div');
            subskilldiv.classList.add('subskilldiv');
            subskilldiv.innerHTML = subskill.nom;
            skilldiv.appendChild(subskilldiv);
        }
        training_dom.appendChild(skilldiv);
    }
}

