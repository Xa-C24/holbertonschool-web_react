// Étape 1 : Définir l'interface ClassRoom
interface ClassRoomInterface {
  maxStudentsSize: number;
}

// Étape 2 : Implémenter la classe ClassRoom
class ClassRoom implements ClassRoomInterface {
  maxStudentsSize: number;

  constructor(maxStudentsSize: number) {
    this.maxStudentsSize = maxStudentsSize;
  }
}

// Étape 3 : Exemple d'utilisation de ClassRoom
const room1 = new ClassRoom(20);
console.log(`Classroom created with max size: ${room1.maxStudentsSize}`);

// Sélectionner l'élément output
const output = document.getElementById("output");

if (output) {
    output.innerHTML = `
        <h2>ClassRoom Information</h2>
        <p><strong>Max Students Size:</strong> ${room1.maxStudentsSize}</p>
    `;
}
