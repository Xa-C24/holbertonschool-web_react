### **📌 Task 6 - Creating Functions Specific to Employees**

## **📖 Description**  
Dans cette tâche, nous avons implémenté des **fonctions spécifiques aux employés**, qui permettent de différencier les **Teachers** et les **Directors** et d'exécuter leurs tâches respectives. 🏫👨‍🏫

---

## **📌 Fonctionnalités**  
✅ **Définition d'une fonction `isDirector`** qui vérifie si un employé est un directeur 📌  
✅ **Définition d'une fonction `executeWork`** qui exécute la bonne tâche selon l'employé 💼  
✅ **Utilisation de `createEmployee` pour tester l'exécution des tâches** 🏗️  
✅ **Compilation avec TypeScript et Webpack** ⚡  

---

## **📌 Structure du Projet** 📂  
```
task_6/
├── dist/                # Dossier contenant le bundle Webpack
│   ├── bundle.js        # Fichier compilé généré par Webpack
├── js/                  # Dossier contenant le fichier TypeScript
│   ├── main.ts          # Code principal de la tâche
├── index.html           # Page HTML affichant les résultats
├── package.json         # Dépendances et scripts npm
├── tsconfig.json        # Configuration TypeScript
├── webpack.config.js    # Configuration Webpack
```

---

## **📌 Installation et Exécution** ⚙️  

### **1️⃣ Prérequis**  
Assurez-vous d'avoir **Node.js** et **npm** installés sur votre machine.  

### **2️⃣ Installation des dépendances**  
Dans le dossier `task_6`, exécutez la commande suivante :  
```bash
npm install
```

### **3️⃣ Compilation avec Webpack**  
Générez le fichier **`bundle.js`** en exécutant :  
```bash
npm run build
```

### **4️⃣ Lancement du serveur Webpack**  
Démarrez un serveur local pour voir le rendu dans le navigateur :  
```bash
npm start
```

### **5️⃣ Visualisation dans le navigateur**  
Ouvrez **http://localhost:8080** et vous verrez les informations affichées.

---

## **📌 Code Implémenté** 💻  

### **📝 Définition des Fonctions `isDirector` et `executeWork`**
```typescript
// Définition de l'interface Employee
interface Employee {
  salary: number;
}

// Définition de l'interface Director qui étend Employee
interface Director extends Employee {
  workDirectorTasks(): string;
}

// Définition de l'interface Teacher qui étend Employee
interface Teacher extends Employee {
  workTeacherTasks(): string;
}

// Fonction pour créer un employé en fonction de son salaire
function createEmployee(salary: number): Employee {
  return salary >= 1000 ? { salary, workDirectorTasks: () => "Getting to director tasks" } : { salary, workTeacherTasks: () => "Getting to work" };
}

// Fonction qui vérifie si un employé est un directeur
function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Fonction qui exécute les tâches en fonction du type d'employé
function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log((employee as Teacher).workTeacherTasks());
  }
}

// Tests
executeWork(createEmployee(200));  // Affiche "Getting to work"
executeWork(createEmployee(1000)); // Affiche "Getting to director tasks"
```

---

## **📌 Résultat Attendu** 🎯  
Lorsque vous exécutez les tests, vous devriez voir :  
```
Getting to work
Getting to director tasks
```

✅ Identification correcte des **Teachers** et **Directors**  
✅ Exécution des tâches appropriées  
✅ Code structuré et organisé  
✅ Utilisation de **TypeScript Type Predicate** (`isDirector`)  

---

## **📌 Dépendances Utilisées** 📦  
| Dépendance | Version |
|------------|---------|
| `TypeScript` | `^5.2.2` |
| `Webpack` | `^5.0.0` |
| `Webpack CLI` | `^4.0.0` |
| `Webpack Dev Server` | `^4.0.0` |
| `TS Loader` | `^9.0.0` |
| `ESLint` | `^8.0.0` |

---

## **📌 Validation et Push sur GitHub** 🔄  
Ajoutez cette tâche à votre dépôt **GitHub** avec :  
```bash
git add .
git commit -m "Task 6 - Implement Employee Functions"
git push origin main
```

🚀  🚀 
