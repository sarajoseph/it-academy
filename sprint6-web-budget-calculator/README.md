 # Web budget calculator  
https://webbudgetcalculator-sarajoseph.vercel.app  

Application with the objective of speeding up calculations for the budget of creating a web page, through selection boxes, input fields and buttons.
  
<img alt="readme gif" src="./public/images/screenrecord.gif">


## Getting started

These instructions will give you a copy of the project to run it on your local machine for development and testing purposes.

### Prerequisites

To clone and run this application, you will need Git and Node.js (which comes with npm) installed on your computer.


### Installation

```bash
# Clone this repository
$ git clone https://github.com/sarajoseph/sprint6.git

# Go into the repository
$ cd sprint6-web-budget-calculator

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```


## Dependencies

[<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />](https://vitejs.dev)[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />](https://react.dev)[<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">](https://typescriptlang.org)[<img src="https://img.shields.io/badge/Tailwind_CSS-0b1120?style=for-the-badge&logo=tailwind-css&logoColor=06B6D4">](https://tailwindcss.com)[<img src="https://img.shields.io/badge/daisyUI-white?style=for-the-badge&logo=daisyui&logoColor=5A0EF8">](https://daisyui.com)[<img src="https://img.shields.io/badge/eslint-white?style=for-the-badge&logo=eslint&logoColor=4B32C3">](https://eslint.org)[<img src="https://img.shields.io/badge/standardJS-F3DF49?style=for-the-badge&logo=standardJS&logoColor=black">](https://standardjs.com)

Vite (https://vitejs.dev)
ReactJS (https://react.dev)
Typescript (https://typescriptlang.org)
Tailwind (https://tailwindcss.com)
DaisyUI (https://daisyui.com)
ESLint (https://eslint.org)
StandardJS (https://standardjs.com)


## Notes

### Tailwind compilation

Only the Tailwind classes that are used are loaded. When adding a new one, it must be added to the css file.
```bash
# Run
npx tailwindcss -i ./src/assets/css/tailwind-input.css -o ./src/assets/css/tailwind-output.css --watch
```


### ESLint StandardJS test

Find and fix problems with your JavaScript code
```bash
# Run
npx standard

# or
npm test
```