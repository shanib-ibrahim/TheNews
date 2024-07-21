# The Flash News App

This is a simple news app named 'FlashNews' that accesses the NY Times Most Popular Articles API. It displays a list of articles, and when you click on an item in the list, it shows the details page. From there, if you want to read more, you can click on the published site link provided to continue reading.

live URL of the website : https://theflashnews.netlify.app/

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## About this Project

This is a React app built on vite with the following technologies and libraries:

- NY Times Developers for Articles API
- Axios
- Tailwind
- Material Tailwind
- React Router
- Luicide React
- Redux Toolkit

Please follow these instructions carefully to setup this project on your machine.

## Setting up NY Times Articles API for latest News

You need to signup for an API key at: https://developer.nytimes.com/get-started, then replace the ‘API_KEY’ in the '.env-sample' with the API key assigned to your account and 'API_URL' with 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=' and change the '.env-sample' file name to '.env'.

## Follow the steps below to install Material Tailwind and configure the tailwind.config.js file:

1. Install Material Tailwind: Follow the installation instructions provided in the documentation(https://www.material-tailwind.com/docs/react/installation).

2. Update tailwind.config.js:
   Replace the existing content in tailwind.config.js with the following code:

   ```
   import withMT from "@material-tailwind/react/utils/withMT";
   export default withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
   extend: {
   fontFamily: {
   'inter': ["Inter", "sans-serif"]
   },
   colors: {
   'primary': "#009FBD",
   'shimmer': '#D6D9E0',
   }
   },
   },
   plugins: [],
   });

   ```

3. Customization:
   - Font Family: You can modify the 'inter' font family to another preferred font.
   - Colors: Adjust the 'primary' and 'shimmer' colors as per your design requirements.

## Setup Guide for Jest with Typescript in Vite

Follow these steps to set up Jest and React Testing Library in your Vite project.

### 1. Install Jest and TypeScript Types

First, install Jest and its TypeScript types:

```bash
npm install --save-dev jest @types/jest
```

### 2. Add Test Script

Add the following "test" script to your package.json file:

```
"scripts": {
  "test": "jest",
  "test:cov": "jest --coverage --watchAll"
}
```

### 3. Install React Testing Library

Install React Testing Library and its dependencies:

```
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event
```

### 4. Install Babel and Other Dependencies

Install Babel and other necessary dependencies:

```
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-typescript
npm install --save-dev babel-jest
npm install --save-dev identity-obj-proxy
npm install --save-dev jest-environment-jsdom
```

### 5. Configure Jest

Add the following Jest configuration to your package.json file:

```
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-test.ts"
    ],
    "moduleNameMapper": {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/**/*.{spec,test}.{js,jsx,ts,tsx}",
      "!**/node_modules/**",
      "!**/vendor/**",
      "!**/dist/**",
      "!**/build/**",
      "!vite.config.ts",
      "!**/coverage/**"
    ],
    "coveragePathIgnorePatterns": [
      "/node_modules/",
      "setup-tests.ts",
      "vite-env.d.ts"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    }
  }
```

### 6. Create Setup File

Create a file named setup-test.ts in the root of your project and add the following code:

```
import '@testing-library/jest-dom';
```

### 7. Create Babel Configuration

Create a file named babel.config.cjs in the root of your project and add the following code:

```
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ]
};
```

### 8. Create Mocks for Static Assets

Create a folder named **mocks** inside the root directory and add a file named fileMock.js with the following content:

```
module.exports = 'test-file-stub';
```

### 9. Update .gitignore

Add the following line to your .gitignore file to ignore coverage reports:

```
coverage
```

### 10. Install ts-jest and ts-node

Install ts-jest and ts-node to enable TypeScript support in Jest:

```
npm install --save-dev ts-jest ts-node
```

### 11. For import.meta' meta-property is only allowed when the '--module' option is... [error TS1343]

- Error Message

  ```
  error TS1343: The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'es2022', 'esnext', 'system', 'node16', or 'nodenext'.
  ```

- Install dependancy

  ```
   npm install -D ts-jest-mock-import-meta
  ```

- Change the transform to mock import.meta of vite and please replace the API_KEY and API_URL with respective values.

  ```
      "transform": {
     "^.+\\.tsx?$": [
       "ts-jest",
       {
         "diagnostics": {
           "ignoreCodes": [1343]
         },
         "astTransformers": {
           "before": [
             {
               "path": "node_modules/ts-jest-mock-import-meta",
               "options": {
                 "metaObjectReplacement": {
                   "env": {
                     "VITE_API_KEY" : "API_KEY",
                     "VITE_API_URL" : "API_URL"
                   }
                 }
               }
             }
           ]
         }
       }
     ]
   }
  ```

### Running Tests

To run the tests, use the following command:

```
npm run test:cov
```

## Running the App

Now that you have set up NY Times Articles API and configured your environment variables, you can run the React app using the following commands:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

This will start the application on the default port of vite `http://localhost:5173`

### Conclusion

You have now set up Jest and React Testing Library in your Vite project with TypeScript. Happy testing and developing!
