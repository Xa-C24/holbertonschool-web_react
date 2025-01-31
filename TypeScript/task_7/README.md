### **📌 Task 7 - String Literal Types**

## **📖 Description**  
Dans cette tâche, nous avons implémenté un **type littéral de chaîne** nommé `Subjects`, qui ne peut avoir que les valeurs **Math** ou **History**. Ensuite, nous avons créé une fonction `teachClass` qui affiche le cours enseigné en fonction de la matière passée en paramètre. 🎓📚

---

## **📌 Fonctionnalités**  
✅ **Définition d'un type littéral `Subjects`** contenant `"Math"` et `"History"` 🏫  
✅ **Définition de la fonction `teachClass`** qui affiche le cours enseigné 🎒  
✅ **Affichage dynamique dans la page HTML** 🖥️  
✅ **Compilation avec TypeScript et Webpack** ⚡  

---

## **📌 Structure du Projet** 📂  
```
task_7/
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
Dans le dossier `task_7`, exécutez la commande suivante :  
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

### **📝 Définition du Type `Subjects` et de la Fonction `teachClass`**
```typescript
// Définition du type Subjects
type Subjects = "Math" | "History";

// Définition de la fonction teachClass
function teachClass(todayClass: Subjects): string {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}

// Tests
console.log(teachClass("Math"));    // Affiche "Teaching Math"
console.log(teachClass("History")); // Affiche "Teaching History"

// Affichage HTML
const output = document.getElementById("output");
if (output) {
  output.innerHTML = `
    <h2>Teaching Today</h2>
    <p><strong>Math Class:</strong> ${teachClass("Math")}</p>
    <p><strong>History Class:</strong> ${teachClass("History")}</p>
  `;
}
```

---

## **📌 Résultat Attendu** 🎯  
Lorsque vous exécutez le programme, vous devriez voir :  
```
Teaching Math
Teaching History
```

✅ `teachClass("Math")` affiche `Teaching Math`  
✅ `teachClass("History")` affiche `Teaching History`  
✅ Affichage correct sur la page web  

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
git commit -m "Task 7 - Implement String Literal Type for Subjects"
git push origin main
```

---

## **🎉 Félicitations !**  
Vous avez terminé la **Task 7** avec succès ! 🚀  
Si tout fonctionne bien, vous pouvez passer à la **Task 8**.  

---

### **📌 Prochaines Étapes**  
🔹 **Tout fonctionne bien ?** → Passez à la **Task 8**  
🔹 **Un souci ?** → Vérifiez votre **`webpack.config.js`** et **`tsconfig.json`**  
🔹 **Besoin d'aide ?** → Demandez-moi ! 😊  

---

### **🚀 Bon courage et bravo pour votre travail !**  
🔥 **On continue avec la Task 8 ?** 😊
