// Définir l'interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Permet d'ajouter des propriétés dynamiques
}

// Exemple d'utilisation
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Propriété dynamique
};

// Afficher les données dans le DOM
const output = document.getElementById('output');
if (output) {
  output.innerHTML = `
    <p><strong>First Name:</strong> ${teacher3.firstName}</p>
    <p><strong>Last Name:</strong> ${teacher3.lastName}</p>
    <p><strong>Full Time:</strong> ${teacher3.fullTimeEmployee}</p>
    <p><strong>Location:</strong> ${teacher3.location}</p>
    <p><strong>Contract:</strong> ${teacher3.contract}</p>
  `;
}
