# AGRE WEBSITE
## Documentation of the AGRE WEBSITE project

### TECH STACK
- React.js
- Firebase
- Vite

### How to setup project locally
1. Clone the project to the local
`git clone https://github.com/MehmetAlp05/MEIRG.git`
2. Install dependencies
`npm install`
3. Run the project
`npm run dev`

### Hosting
The project is now hosted on the Firebase. You can choose your own hosting service. Current website is in MehmetAlp05's firebase account
To learn how to host projects check the [video](https://youtu.be/qUyHQMv0o5E?si=9Z0BNjPbF0yzzz2Q)

### Project structure
- Assets
  - visual assests in this file
- Components
  - cake.jsx
  - footer.jsx
  - mobile-navbar.jsx
  - navbar.jsx
  - ourTeam.jsx
  - profile.jsx
  - release.jsx
  - releaseCard.jsx
  - releaseInfo.jsx
  - welcom.jsx
  - whoweare.jsx
- pages
  - about.jsx
  - edu.jsx
  - home.jsx
  - Login.jsx
  - profile.jsx
  - releasePage.jsx
  - releaseUpload.jsx

### user data structure in firebase firestore
```
about:"String"
interest:"String"
mail:"String"
name:"String"
picture:"String"
release:[Array]
uid:"String"
university:"String"
```
### release data structure in firebase firestore
```
description:"String"
link:"String"
title:"String"
type:"String"
```
