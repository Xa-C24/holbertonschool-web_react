# Task 0 - TypeScript Setup

## Description
This task demonstrates the setup of a TypeScript project using Webpack. It generates a table of student information (first name and location) and renders it in the browser.

## Key Features
- **TypeScript Support**: Provides type safety and static typing.
- **Webpack Integration**: Bundles TypeScript code into a single JavaScript file.
- **Dynamic HTML Rendering**: Generates an HTML table dynamically from the data defined in TypeScript.

## How to Run

### Prerequisites
Make sure you have the following installed:
- **Node.js**
- **npm**

### Steps
1. Navigate to the `task_0` directory:
   ```bash
   cd task_0
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

## File Structure
```
task_0/
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

## Dependencies
Here are the key dependencies used in this project:

### Dev Dependencies
- **TypeScript**: `5.2.2`
- **Webpack**: `5.0.0`
- **Webpack CLI**: `4.0.0`
- **Webpack Dev Server**: `4.0.0`
- **TS Loader**: `9.0.0`
- **ESLint**: `8.0.0`
- **@typescript-eslint/eslint-plugin**: `6.0.0`
- **@typescript-eslint/parser**: `6.0.0`

## Features Implemented
- Creates an interface for student data.
- Dynamically generates a table with the following columns:
  - First Name
  - Location
- Uses TypeScript for type safety and modularity.

## Example Output
The application dynamically generates the following table in the browser:

| First Name | Location |
|------------|----------|
| John       | New York |
| Jane       | London   |

---

 🚀
