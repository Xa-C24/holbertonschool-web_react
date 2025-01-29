// Définir l'interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Permet d'ajouter des propriétés dynamiques
}

// Étape 2 : Création de l'interface Directors qui étend Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Propriété obligatoire
}

// Étape 3 : Exemple d'utilisation de Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Sélectionner l'élément output
const output = document.getElementById("output");

if (output) {
    output.innerHTML = `
        <p><strong>First Name:</strong> ${director1.firstName}</p>
        <p><strong>Last Name:</strong> ${director1.lastName}</p>
        <p><strong>Location:</strong> ${director1.location}</p>
        <p><strong>Full Time Employee:</strong> ${director1.fullTimeEmployee}</p>
        <p><strong>Number of Reports:</strong> ${director1.numberOfReports}</p>
    `;
}
