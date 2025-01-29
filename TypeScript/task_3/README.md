# Task 3 - Printing Teachers 🖨️

## Description 📝
In this task, we define a function `printTeacher` that takes a first name and a last name as arguments and returns a formatted version of the name (`J. Doe`).

Additionally, we create an interface `printTeacherFunction` to ensure type safety for the function.

## Features ✨
- **TypeScript Function Interface**: Defines a function signature using an interface.
- **String Formatting**: Extracts the first letter of the first name and appends the full last name.
- **Dynamic Display in HTML**: The formatted name is displayed on the webpage.

## How to Run 🚀

### Prerequisites ✅
Make sure you have the following installed:
- **Node.js**
- **npm**

### Steps 📂
1. Navigate to the `task_3` directory:
   ```bash
   cd task_3
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
task_3/
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
Here’s how the function `printTeacher` is defined and used:

```typescript
// Define the function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Outputs: J. Doe
console.log(printTeacher("Alice", "Smith")); // Outputs: A. Smith

// Displaying the formatted name in HTML
document.getElementById("teacher-output")!.innerHTML = `
    <p><strong>Formatted Name:</strong> ${printTeacher("John", "Doe")}</p>
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

Teacher Name Format
Formatted Name: J. Doe
```

## What’s New in Task 3? 🆕
- **Function Typing**: Uses an interface to define the function structure.
- **String Manipulation**: Formats names dynamically.
- **Integration with HTML**: Displays the formatted name in the webpage.

---

Feel free to explore and extend this task! Happy coding! 🎉
