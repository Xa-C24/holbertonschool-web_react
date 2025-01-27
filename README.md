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
