# URL SHORTENER FRONTEND

Url shortener PWA Enabled frontend build with ReactJs + ParticleJS + Material UI, bootstrapped with create-react-app. 

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](http://app.chtu.ml/)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://app.chtu.ml/)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/Naereen/badges.svg)](http://app.chtu.ml/ "Percentage of issues still open")
[![Open Source Love png3](https://badges.frapsoft.com/os/v3/open-source.png?v=103)](http://app.chtu.ml/)

### What does PWA (Progressive Web App) Enabled means ?

> The Project can be download as an app on mobile devices. It behaves completely similar to native android app.

### Setting the Project Locally

  - Download the zip or clone repo
  - Open terminal or cmd prompt
  - run 
```js
npm install
```
- After dependencies are installed successfully. Run command
```js
npm start
```
- A browser window will automatically come up in the browser.

### How to publish webpage to Github Pages

- Create a new repository on GitHub.
- Convert the local react project to a git repository
```js
#create a new git repository
$ git init
#add all changed file paths to staged changes
$ git add .
#commit all staged changes
$ git commit -m 'initial commit'
```
- Push the code to it using the following commands. 
```js
#add remote repository
$ git remote add origin https://github.com/username/website.git
#pushed local repository to remote repository on GitHub
$ git push origin master
```
-  The next step is to install ‘gh-pages’ package (if not available) using the following npm command:
```js
#install gh-pages package
$ npm install --save gh-pages
```
` Just Open Package.json file and change Homepage to whatever your repo url is.
```js
"homepage" : "https://singhkshitij.github.io/Chootu/"
```
- The last step now was to deploy the application using the following command:

```js
#deploy application
$ npm run deploy
```

> So after the deployment, a second “gh-pages” branch is created which contains the static code for the React app for the website. Finally, the React-GitHub-Pages environment setup is completed..
