//MILESTONE 0

//Creo l’array di oggetti con le informazioni fornite
const teamMembers = [
  {
    nome : 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto : 'wayne-barnett-founder-ceo.jpg',
  },

  {
    nome : 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg'
  },

  {
    nome : 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
  },

  {
    nome : 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
  },

  {
    nome : 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
  },

  {
    nome : 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
  }
]

const outputDOMElement = document.getElementById("output");


// MILESTONE 1


// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// Ciclo for per andare a prendere ogni oggetto dell'array e salvarmi i valori delle proprietà in una variabile
for(let i = 0; i < teamMembers.length; i++) {
  const name = teamMembers[i].nome;
  console.log(name);
  const role = teamMembers[i].ruolo;
  console.log(role);
  const photo = teamMembers[i].foto;
  console.log(photo);
}

// MILESTONE 2







