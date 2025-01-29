# Task 2 - Extending the Teacher Interface 👨‍🏫👩‍🏫

## Description 📝
This task extends the `Teacher` interface from Task 1 by introducing a new interface, `Directors`, which:
- **Inherits from `Teacher`** using TypeScript's `extends`.
- **Adds a required property**: `numberOfReports: number`.

## Features ✨
- **TypeScript Inheritance**: Uses `extends` to create a more specialized interface.
- **Maintains Type Safety**: Ensures `Directors` has all `Teacher` properties plus new ones.
- **Dynamic Data Display**: Renders director information directly in the HTML page.

## How to Run 🚀

### Prerequisites ✅
Make sure you have the following installed:
- **Node.js**
- **npm**

### Steps 📂
1. Navigate to the `task_2` directory:
   ```bash
   cd task_2
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
task_2/
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
Here’s how `Directors` extends `Teacher`:

```typescript
// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional
  location: string;
  [key: string]: any; // Dynamic properties
}

// Extend Teacher to create Directors
interface Directors extends Teacher {
  numberOfReports: number; // Required property
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Display data in HTML
const output = document.getElementById("output");
if (output) {
    output.innerHTML = `
        <p><strong>First Name:</strong> ${director1.firstName}</p>
        <p><strong>Last Name:</strong> ${director1.lastName}</p>
        <p><strong>Location:</strong> ${director1.location}</p>
        <p><strong>Full Time Employee:</strong> ${director1.fullTimeEmployee}</p>
        <p><strong>Number of Reports:</strong> ${director1.numberOfReports}</p>
    `;
}
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
```

## What’s New in Task 2? 🆕
- **Interface Inheritance**: `Directors` extends `Teacher`.
- **New Required Property**: `numberOfReports` is mandatory.
- **HTML Integration**: Displays director details dynamically.

---

Feel free to explore and extend this task! Happy coding! 🎉
