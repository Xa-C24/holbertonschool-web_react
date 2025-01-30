# Task 4 - Writing a Class 🏫

## Description 📝
In this task, we implement a `StudentClass` in TypeScript, following the given requirements:
- Accepts `firstName` and `lastName` as arguments in the constructor.
- Includes a `workOnHomework()` method that returns `"Currently working"`.
- Includes a `displayName()` method that returns `firstName`.
- Uses an interface to describe both the constructor and the class itself.

## Features ✨
- **TypeScript Class Implementation**: Defines a `Student` class with interfaces.
- **Encapsulation**: Uses TypeScript interfaces to structure the class and constructor.
- **Dynamic HTML Rendering**: Displays student information dynamically on the webpage.

## How to Run 🚀

### Prerequisites ✅
Make sure you have the following installed:
- **Node.js**
- **npm**

### Steps 📂
1. Navigate to the `task_4` directory:
   ```bash
   cd task_4
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser at [http://localhost:8080](http://localhost:8080) to view the application.

5. To build the project (optional):
   ```bash
   npm run build
   ```
   This will generate a `dist/bundle.js` file.

## File Structure 🗂️
```
task_4/
├── dist/                # Bundled output
│   └── bundle.js
├── js/
│   └── main.ts          # Main TypeScript file
├── index.html           # HTML entry point
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
├── webpack.config.js    # Webpack configuration
└── node_modules/        # Installed dependencies
```

## Dependencies 🔧
Here are the key dependencies used in this project:

### Dev Dependencies 📦
- **TypeScript**: `5.2.2`
- **Webpack**: `5.0.0`
- **Webpack CLI**: `4.0.0`
- **Webpack Dev Server**: `4.0.0`
- **TS Loader**: `9.0.0`
- **ESLint**: `8.0.0`
- **@typescript-eslint/eslint-plugin**: `6.0.0`
- **@typescript-eslint/parser**: `6.0.0`

## Example Code 💻
Here’s how the `StudentClass` is defined and used:

```typescript
// Interface for the class constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the Student class
class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new Student("Alice", "Johnson");
console.log(student1.displayName()); // Outputs: Alice
console.log(student1.workOnHomework()); // Outputs: Currently working

// Displaying the student information in HTML
document.getElementById("student-output")!.innerHTML = `
    <h2>Student Information</h2>
    <p><strong>Student Name:</strong> ${student1.displayName()}</p>
    <p><strong>Status:</strong> ${student1.workOnHomework()}</p>
`;
```

### Expected Output 📋
When you run the project and check your browser at `localhost:8080`, you should see:

```
Director Information

First Name: John
Last Name: Doe
Location: London
Full Time Employee: true
Number of Reports: 17

Student Information
Student Name: Alice
Status: Currently working

Teacher Name Format
Formatted Name: J. Doe
```

## What’s New in Task 4? 🆕
- **Class Implementation**: Uses TypeScript classes and interfaces.
- **Encapsulation**: Encapsulates logic within a class structure.
- **Integration with HTML**: Displays student details dynamically.

---
