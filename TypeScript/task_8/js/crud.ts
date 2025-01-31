import { RowID, RowElement } from "./interface"; // 🔥 Import des types nécessaires

export function insertRow(row: RowElement): RowID {
  console.log("Insert row", row);
  return Math.floor(Math.random() * Math.floor(1000)); // Génère un ID aléatoire
}

export function deleteRow(rowId: RowID): void {
  console.log("Delete row id", rowId);
}

export function updateRow(rowId: RowID, row: RowElement): RowID {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
