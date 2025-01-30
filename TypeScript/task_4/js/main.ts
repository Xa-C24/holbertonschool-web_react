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

// Étape 6 : Définition de l'interface pour le constructeur de StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Étape 7 : Définition de l'interface pour la classe StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Étape 8 : Implémentation de la classe StudentClass
class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Étape 9 : Exemple d'utilisation de StudentClass
const student1 = new Student("Alice", "Johnson");

console.log(student1.displayName()); // "Alice"
console.log(student1.workOnHomework()); // "Currently working"

// Sélectionner les éléments HTML
const output = document.getElementById("output");
const teacherOutput = document.getElementById("teacher-output");
const studentOutput = document.getElementById("student-output");

// Vérification de l'affichage des Directeurs
if (output) {
    output.innerHTML = `
        <h2>Director Information</h2>
        <p><strong>First Name:</strong> ${director1.firstName}</p>
        <p><strong>Last Name:</strong> ${director1.lastName}</p>
        <p><strong>Location:</strong> ${director1.location}</p>
        <p><strong>Full Time Employee:</strong> ${director1.fullTimeEmployee}</p>
        <p><strong>Number of Reports:</strong> ${director1.numberOfReports}</p>
    `;
}

// Vérification de l'affichage des Étudiants
if (studentOutput) {
  studentOutput.innerHTML = `
      <h2>Student Information</h2>
      <p><strong>Student Name:</strong> ${student1.displayName()}</p>
      <p><strong>Status:</strong> ${student1.workOnHomework()}</p>
  `;
}

// Affichage du résultat de printTeacher
if (teacherOutput) {
  teacherOutput.innerHTML = `
      <h2>Teacher Name Format</h2>
      <p><strong>Formatted Name:</strong> ${printTeacher("John", "Doe")}</p>
  `;
}
