// 2.1 : Définir l'interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2.2 : Créer deux étudiants et les stocker dans un tableau
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

// 2.3 : Générer une table HTML avec Vanilla JavaScript
const body = document.querySelector("body");

// Créer la table
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");

// Ajouter les colonnes d'en-tête
const headerRow = document.createElement("tr");
const headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

// Remplir le tableau avec les étudiants
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

// Ajouter le contenu au DOM
table.appendChild(tableBody);
body?.appendChild(table);
