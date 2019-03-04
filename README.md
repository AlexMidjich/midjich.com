# midjich.com
A portfolio webpage - version 1.3 (Developed with react.js)

<p>This is my own webpage where I will display the work that I have done so far.</p>

<h3>Developing</h3>
<p>In this version I wanted to use my skills with React.js to build something. I also wanted to use my newly requiered skills with sass. All my components have their own template styling file that I compiled in to a global style.css.</p>

<p>To use sass with react I used the settings I found on <a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc">this page</a>I had some problems with the final build step when I followed these instructions. Instead of using this istructions: </p>
<code>
"build-css": "node-sass-chokidar src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
"start-js": "react-scripts start",
"start": "npm-run-all -p watch-css start-js",
"build-js": "react-scripts build",
"build": "npm-run-all build-css build-js",
"test": "react-scripts test --env=jsdom",
"eject": "react-scripts eject"
</code>
<p>Instead I used this configuration:</p>
<code>
"scripts": {
  "build-css": "node-sass-chokidar src/ -o src/",
  "build-js": "react-scripts build",
  "build": "npm run build-css && npm run build-js",
  "start-css": "npm run build-css && npm run build-css -- --watch --recursive",
  "start-js": "react-scripts start",
  "start": "npm-run-all -p start-css start-js",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
 }
</code>

<p>Besides sass I also toke the oppertunity to learn more about React router. I have user react router to route between different components. The site structure is:
<ul>
 <li>Start component - Consists of two fields that is part of my routing, one leads to my about page and the other to my portfolio page.</li>
 <li>About component - A static page with some information about me and some contact links./li>
 <li>Portfolio component - A dynamic page connected with firebase realtime database. On this route I have a log in area that leads to my admin component. There I can add and remove portfolio items.</li>
 </ul></p>

<h3>Usage</h3>
<p>This is a portfolio page made by me to showcase some of my projects that I have been working on. </p>

<h3>Versions</h3>
<p>I hade made three different versions of my webpage:
<ol>
 <li>Version 1.1 - For this version I worked with node.js together with express.js and a template engine called pug.js</li>
 <li>Version 1.2 - Due to some complications with my webhosting I couldnt deploy my version 1.1. I ended up making a v 1.2 that was a basic static html page.</li>
 <li>Version 1.3 - The current version made with React.js. </li>
</ol></p>

<a href="http://www.midjich.com/react-page">midjich.com/react-page</a> Here is a live version of the page.
