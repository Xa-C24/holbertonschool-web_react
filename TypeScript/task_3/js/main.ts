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

// Étape 4 : Définition de l'interface pour printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Étape 5 : Implémentation de la fonction printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Exemple d'utilisation de printTeacher
console.log(printTeacher("John", "Doe")); // Affiche "J. Doe"
console.log(printTeacher("Alice", "Smith")); // Affiche "A. Smith"

// Sélectionner l'élément output
const output = document.getElementById("output");
const teacherOutput = document.getElementById("teacher-output");

if (output) {
    output.innerHTML = `
        <p><strong>First Name:</strong> ${director1.firstName}</p>
        <p><strong>Last Name:</strong> ${director1.lastName}</p>
        <p><strong>Location:</strong> ${director1.location}</p>
        <p><strong>Full Time Employee:</strong> ${director1.fullTimeEmployee}</p>
        <p><strong>Number of Reports:</strong> ${director1.numberOfReports}</p>
    `;
}

// Afficher le résultat de printTeacher après sa définition
if (teacherOutput) {
  teacherOutput.innerHTML = `
      <p><strong>Formatted Name:</strong> ${printTeacher("John", "Doe")}</p>
  `;
}
