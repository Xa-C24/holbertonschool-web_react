# holbertonschool-web_react

# TypeScript 🚀

TypeScript est un **superset de JavaScript** qui ajoute des fonctionnalités puissantes comme le typage statique, les interfaces et les classes. Il est idéal pour les projets modernes et complexes, offrant une meilleure lisibilité, une maintenance simplifiée et moins de bugs. 🌟

---

## ✨ **Pourquoi TypeScript ?**

- **Typage statique** 🛡️ : Aide à détecter les erreurs avant l'exécution.
- **Compatibilité avec JavaScript** 🔗 : Tout code JavaScript est aussi valide en TypeScript.
- **Outils puissants pour IDE** 🛠️ : Autocomplétion, détection des erreurs en temps réel et refactoring simplifié.
- **Modularité et organisation** 📦 : Parfait pour structurer de grands projets.
- **Adoption par les frameworks modernes** ⚡ : Utilisé dans Angular, supporté par React et Vue.js.

---

## 🚀 **Caractéristiques principales**

### 1️⃣ **Typage statique**
```typescript
let message: string = "Bonjour, TypeScript!";
// message = 42; // ❌ Erreur : type 'number' non assignable à 'string'
```

### 2️⃣ **Interfaces et Classes**
```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

class Admin implements User {
    constructor(public id: number, public name: string, public email: string, public permissions: string[]) {}
}
```

### 3️⃣ **Types avancés**
- **Union Types** :
  ```typescript
  let value: string | number;
  value = "Texte"; // ✅
  value = 42;      // ✅
  value = true;    // ❌ Erreur
  ```

- **Intersection Types** :
  ```typescript
  type Admin = { permissions: string[] };
  type User = { name: string };

  type AdminUser = Admin & User;
  ```

### 4️⃣ **Génériques**
```typescript
function identity<T>(value: T): T {
    return value;
}

const result = identity<number>(42); // ✅
```

### 5️⃣ **Décorateurs**
```typescript
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Appel de ${key} avec :`, args);
        return original.apply(this, args);
    };
}

class Calculator {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }
}
```

---

## 📚 **Cas pratiques**

### 1️⃣ **Typage d'une API**
```typescript
import axios from "axios";

type User = {
    id: number;
    name: string;
    email: string;
};

async function fetchUsers(): Promise<User[]> {
    const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
    return response.data;
}
```

### 2️⃣ **TypeScript avec React**
```typescript
type ButtonProps = {
    label: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
);
```

---

## 🔧 **Configuration TypeScript**

### Exemple de fichier `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

---

## ⚖️ **Avantages et Inconvénients**

### ✅ **Avantages** :
- Réduction des bugs 🐛
- Code plus lisible 📖
- Facilité de maintenance 🛠️
- Outils performants pour les grands projets 🏗️

### ❌ **Inconvénients** :
- Courbe d'apprentissage initiale 📈
- Étape supplémentaire de compilation ⏳
- Non nécessaire pour les petits scripts 🔧

---

## 🛠️ **Ressources utiles**

- [Documentation officielle TypeScript](https://www.typescriptlang.org/) 🌐
- [Guide TypeScript pour React](https://react-typescript-cheatsheet.netlify.app/) 📘
- [Playground TypeScript](https://www.typescriptlang.org/play) 🎮

---

💡 **Astuce** : Adoptez TypeScript progressivement sur vos projets JavaScript existants pour mieux apprendre sans être submergé ! 😊
