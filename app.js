//MILESTONE 0

//Creo l’array di oggetti con le informazioni fornite
const teamMembers = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },

  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg'
  },

  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'
  },

  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'
  },

  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'
  },

  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'
  }
]


// MILESTONE 1 E MILESTONE 2


// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// Ciclo for per andare a prendere ogni oggetto dell'array e salvarmi i valori delle proprietà in una variabile
for (let i = 0; i < teamMembers.length; i++) {

  const member = teamMembers[i];

  const name = member.nome;

  const role = member.ruolo;

  const photo = member.foto;

  // Vado a prendermi dal DOM il container in cui poi concatenerò le stringhe 
  const containerDOMElement = document.querySelector(".container");

  // Vado a concatenare col template literal la mia stringa tot volte, che contiene le varie classi e i valori delle proprietà degli oggetti, dentro al container 
  containerDOMElement.innerHTML += `<div class="card-container">
   <div class="member-card p-2">
     <figure>
       ${photo}
     </figure>
     <p>${name}</p>
     <p>${role}</p>
   </div>
  </div>`;
}










