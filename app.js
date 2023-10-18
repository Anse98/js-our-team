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

// MILESTONE 1

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// Ciclo for per andare a prendere ogni oggetto dell'array
for(let i = 0; i < teamMembers.length; i++) {
  console.log(i);
  //Ciclo for in per andare a prendere ogni proprietà e corrispettivo valore dell'oggetto
  for (const property in teamMembers[i]) {
    // Stampo in console il risultato
    console.log(`${property}: ${teamMembers[i][property]}`);
  }
}





