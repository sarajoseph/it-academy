# Onboarding digital  
  
Onboarding digital with two buttons to move forward or backward through the phrases, with an accompanying image that will change.
  
  
## Getting started  
  
These instructions will give you a copy of the project to run it on your local machine for development and testing purposes.  
  
### Prerequisites  
  
To clone and run this application, you will need Git and Node.js (which comes with npm) installed on your computer.
  
	  
### Installation  
  
```bash
# Clone this repository
$ git clone https://github.com/sarajoseph/it-academy

# Go into the repository
$ cd it-academy/sprint5-onboarding-digital

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```
  

## Dependencies  

[<img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />](https://vitejs.dev)[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />](https://react.dev)[<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">](https://typescriptlang.org)[<img src="https://img.shields.io/badge/Tailwind_CSS-0b1120?style=for-the-badge&logo=tailwind-css&logoColor=06B6D4">](https://tailwindcss.com)

Vite (https://vitejs.dev)  
ReactJS (https://react.dev)  
Typescript (https://typescriptlang.org)  
Tailwind (https://tailwindcss.com)  
Heroicons (https://heroicons.com)  
StyledComponents (https://styled-components.com)  


## Notes

### Tailwind compilation

Only the Tailwind classes that are used are loaded. When adding a new one, it must be added to the css file.
```bash
# Run
npx tailwindcss -i ./src/css/tailwind-input.css -o ./src/css/tailwind-output.css --watch
```