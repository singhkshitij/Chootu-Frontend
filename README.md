# URL SHORTENER FRONTEND

Url shortener frontend build with ReactJs + ParticleJS + Material UI, bootstrapped with create-react-app. 

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/Naereen/badges.svg)](http://isitmaintained.com/project/Naereen/badges "Percentage of issues still open")
[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)


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
