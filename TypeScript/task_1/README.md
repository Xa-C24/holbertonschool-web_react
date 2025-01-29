# Task 1 - Teacher Interface 👩‍🏫👨‍🏫

## Description 📝
This task builds upon Task 0 by introducing a more advanced interface, `Teacher`, that includes:
- **Readonly properties**: Ensures some properties cannot be modified after initialization.
- **Optional properties**: Allows properties to be optional.
- **Dynamic properties**: Adds flexibility to include additional attributes dynamically.

## Features ✨
- **TypeScript Support**: Ensures type safety and flexibility with advanced TypeScript features.
- **Dynamic Attributes**: Enables adding any extra properties to the `Teacher` object.
- **Readonly Properties**: Protects key attributes from being changed after initialization.

## How to Run 🚀

### Prerequisites ✅
Make sure you have the following installed:
- **Node.js**
- **npm**

### Steps 📂
1. Navigate to the `task_1` directory:
   ```bash
   cd task_1
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
task_1/
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
Here’s an example of how the `Teacher` interface is used:

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

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Dynamic property
};

console.log(teacher3);
```

### Expected Output 📋
When you run the project and check the console, you should see:

```plaintext
Object {
  contract: false,
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London"
}
```

## What’s New in Task 1? 🆕
- **Readonly Properties**: `firstName` and `lastName` cannot be modified after initialization.
- **Optional Properties**: `yearsOfExperience` can be omitted.
- **Dynamic Properties**: Add custom attributes like `contract` dynamically.

---

Feel free to explore and extend this task! Happy coding! 🎉
