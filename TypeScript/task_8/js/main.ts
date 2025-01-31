/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Création d'un nouvel élément
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insérer un nouvel élément
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted Row ID: ${newRowID}`);

// Mise à jour de l'élément
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated Row:`, updatedRow);

// Suppression de l'élément
CRUD.deleteRow(newRowID);
console.log(`Deleted Row ID: ${newRowID}`);

const output = document.getElementById("output");

if (output) {
    output.innerHTML = `
        <h2>CRUD Operations in TypeScript</h2>
        <p><strong>Inserted Row ID:</strong> ${newRowID}</p>
        <p><strong>Updated Row:</strong> ${JSON.stringify(updatedRow)}</p>
        <p><strong>Deleted Row ID:</strong> ${newRowID}</p>
    `;
} else {
    console.error("Element #output not found in the DOM!");
}
