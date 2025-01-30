// Étape 1 : Définition de l'interface Employee
interface Employee {
  salary: number;
}

// Étape 2 : Définition des interfaces spécifiques Director et Teacher
interface Director extends Employee {
  workDirectorTasks(): string;
}

interface Teacher extends Employee {
  workTeacherTasks(): string;
}

// Étape 3 : Fonction createEmployee pour créer un employé selon son salaire
function createEmployee(salary: number): Teacher | Director {
  if (salary >= 1000) {
    return {
      salary,
      workDirectorTasks: () => "Getting to director tasks",
    } as Director;
  } else {
    return {
      salary,
      workTeacherTasks: () => "Getting to work",
    } as Teacher;
  }
}

// Étape 4 : Fonction isDirector pour vérifier si un employé est un directeur
function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Étape 5 : Fonction executeWork pour exécuter les bonnes tâches
function executeWork(employee: Teacher | Director): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Étape 6 : Tests pour valider la fonctionnalité
console.log("Test avec un Teacher (salaire = 200) :");
executeWork(createEmployee(200));  // Affiche "Getting to work"

console.log("Test avec un Director (salaire = 1000) :");
executeWork(createEmployee(1000)); // Affiche "Getting to director tasks"

// Étape 7 : Affichage dans la page HTML
const output = document.getElementById("output");
if (output) {
  const teacher = createEmployee(200);
  const director = createEmployee(1000);

  output.innerHTML = `
    <h2>Employee Work Execution</h2>
    <p><strong>Teacher:</strong> ${isDirector(teacher) ? "Director" : teacher.workTeacherTasks()}</p>
    <p><strong>Director:</strong> ${isDirector(director) ? director.workDirectorTasks() : "Teacher"}</p>
  `;
}
