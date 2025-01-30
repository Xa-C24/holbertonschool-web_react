### **📌 Task 5 - Creating an Interface for a Class**  

## **📖 Description**  
Dans cette tâche, nous avons créé une **interface `ClassRoomInterface`** et une **classe `ClassRoom`** qui l'implémente.  
L'objectif est de définir un nombre maximal d'étudiants pouvant être admis dans une classe. 🏫  

---

## **📌 Fonctionnalités**  
✅ Définition de **l'interface `ClassRoomInterface`** pour garantir une structure propre 🛠️  
✅ Implémentation d'une **classe `ClassRoom`** avec un attribut `maxStudentsSize` 📚  
✅ **Affichage dynamique** des informations dans le navigateur 🌍  
✅ Compilation avec **TypeScript et Webpack** ⚡  

---

## **📌 Structure du Projet** 📂  
```
task_5/
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
Dans le dossier `task_5`, exécutez la commande suivante :  
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

### **📝 Interface et Classe `ClassRoom`**
```typescript
// Étape 1 : Définition de l'interface ClassRoom
interface ClassRoomInterface {
  maxStudentsSize: number;
}

// Étape 2 : Implémentation de la classe ClassRoom
class ClassRoom implements ClassRoomInterface {
  maxStudentsSize: number;

  constructor(maxStudentsSize: number) {
    this.maxStudentsSize = maxStudentsSize;
  }
}

// Étape 3 : Création d'une instance et affichage dans la console
const room1 = new ClassRoom(20);
console.log(`Classroom created with max size: ${room1.maxStudentsSize}`);

// Étape 4 : Mise à jour de l'affichage dans la page HTML
const output = document.getElementById("output");

if (output) {
    output.innerHTML = `
        <h2>ClassRoom Information</h2>
        <p><strong>Max Students Size:</strong> ${room1.maxStudentsSize}</p>
    `;
}
```

---

## **📌 Résultat Attendu** 🎯  
Lorsque vous ouvrez **http://localhost:8080**, vous devriez voir ceci :  

```
ClassRoom Information
Max Students Size: 20
```

✅ Affichage propre et dynamique  
✅ Code structuré et organisé  
✅ TypeScript utilisé avec `interface` et `class`  

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
git commit -m "Task 5 - Implement ClassRoom"
git push origin main
```

---

## **🎉 Félicitations !**
Vous avez terminé la **Task 5** avec succès ! 🚀  
Si tout fonctionne bien, vous pouvez passer à la **Task 6**.  

---

### **📌 Prochaines Étapes**
🔹 **Tout fonctionne bien ?** → Passez à la **Task 6**  
🔹 **Un souci ?** → Vérifiez votre **`webpack.config.js`** et **`tsconfig.json`**  
🔹 **Besoin d'aide ?** → Demandez-moi ! 😊  

---

### **🚀 Bon courage et bravo pour votre travail !**  
🔥 **On continue avec la Task 6 ?** 😊
