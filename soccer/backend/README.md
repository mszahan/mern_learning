#### add babble first

```
npm i --save-dev @babel/cli @babel/core @babel/node @babel/present-env

```

#### install all the depenedancies

```
npm i body-parser cors express mongoose nodemon

```

#### add .bablerc

```
{
  "presets": ["@babel/preset-env"]
}

```

#### add .scripts

```
"scripts": {
    "start": "nodemon ./index.js --exec babel-node -e js"
}

```
