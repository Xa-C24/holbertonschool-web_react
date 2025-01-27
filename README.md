# holbertonschool-web_react

# TypeScript 🚀

TypeScript is a **superset of JavaScript** that adds powerful features like static typing, interfaces, and classes. It is ideal for modern and complex projects, offering better readability, simplified maintenance, and fewer bugs. 🌟

---

## ✨ **Why TypeScript?**

- **Static Typing** 🛡️: Helps detect errors before runtime.
- **JavaScript Compatibility** 🔗: Any valid JavaScript code is also valid TypeScript.
- **Powerful IDE Tools** 🛠️: Autocompletion, real-time error detection, and simplified refactoring.
- **Modularity and Organization** 📦: Perfect for structuring large projects.
- **Adopted by Modern Frameworks** ⚡: Used in Angular, supported by React and Vue.js.

---

## 🚀 **Key Features**

### 1️⃣ **Static Typing**
```typescript
let message: string = "Hello, TypeScript!";
// message = 42; // ❌ Error: Type 'number' is not assignable to 'string'
```

### 2️⃣ **Interfaces and Classes**
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

### 3️⃣ **Advanced Types**
- **Union Types**:
  ```typescript
  let value: string | number;
  value = "Text"; // ✅
  value = 42;      // ✅
  value = true;    // ❌ Error
  ```

- **Intersection Types**:
  ```typescript
  type Admin = { permissions: string[] };
  type User = { name: string };

  type AdminUser = Admin & User;
  ```

### 4️⃣ **Generics**
```typescript
function identity<T>(value: T): T {
    return value;
}

const result = identity<number>(42); // ✅
```

### 5️⃣ **Decorators**
```typescript
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Called ${key} with:`, args);
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

## 📚 **Practical Examples**

### 1️⃣ **Typing an API**
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

### 2️⃣ **TypeScript with React**
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

## 🔧 **TypeScript Configuration**

### Example `tsconfig.json` File
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

## ⚖️ **Pros and Cons**

### ✅ **Pros**:
- Reduces bugs 🐛
- More readable code 📖
- Easier maintenance 🛠️
- Powerful tools for large projects 🏗️

### ❌ **Cons**:
- Initial learning curve 📈
- Extra compilation step ⏳
- Not necessary for small scripts 🔧

---

## 🛠️ **Useful Resources**

- [Official TypeScript Documentation](https://www.typescriptlang.org/) 🌐
- [TypeScript Cheatsheet for React](https://react-typescript-cheatsheet.netlify.app/) 📘
- [TypeScript Playground](https://www.typescriptlang.org/play) 🎮

---

💡 **Tip**: Gradually adopt TypeScript in your existing JavaScript projects to learn without being overwhelmed! 😊


# Task 0 - TypeScript Project

## Description
This project demonstrates a basic setup using TypeScript and Webpack. It renders a table with student information (first name and location).

## Requirements
- Node.js
- npm

## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the `task_0` directory:
   ```bash
   cd task_0
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Dependencies
Here are the dependencies installed for this Task 0, along with the commands used to install them:

### Dev Dependencies
- **TypeScript**: `5.2.2`  
  Used for writing and compiling TypeScript code.
  ```bash
  npm install --save-dev typescript@5.2.2
  ```
- **Webpack**: `5.0.0`  
  Bundler to compile and bundle the project.
  ```bash
  npm install --save-dev webpack@5.0.0
  ```
- **Webpack CLI**: `4.0.0`  
  Command line interface for Webpack.
  ```bash
  npm install --save-dev webpack-cli@4.0.0
  ```
- **Webpack Dev Server**: `4.0.0`  
  Development server for live reloading during development.
  ```bash
  npm install --save-dev webpack-dev-server@4.0.0
  ```
- **TS Loader**: `9.0.0`  
  Loads TypeScript files into Webpack.
  ```bash
  npm install --save-dev ts-loader@9.0.0
  ```
- **ESLint**: `8.0.0`  
  Linter for identifying and fixing problems in TypeScript/JavaScript code.
  ```bash
  npm install --save-dev eslint@8.0.0
  ```
- **@typescript-eslint/eslint-plugin**: `6.0.0`  
  ESLint plugin for TypeScript-specific linting rules.
  ```bash
  npm install --save-dev @typescript-eslint/eslint-plugin@6.0.0
  ```
- **@typescript-eslint/parser**: `6.0.0`  
  Parser for ESLint to understand TypeScript syntax.
  ```bash
  npm install --save-dev @typescript-eslint/parser@6.0.0
  ```

## Running the Project
1. To start a development server:
   ```bash
   npm start
   ```
   Open your browser at [http://localhost:8080](http://localhost:8080).

2. To build the project:
   ```bash
   npm run build
   ```
   The output file will be generated in the `dist/` directory.

## File Structure
- `js/main.ts` - TypeScript code for rendering the table.
- `webpack.config.js` - Webpack configuration.
- `tsconfig.json` - TypeScript configuration.
- `index.html` - Entry point for the project.
