# Leaflet NPM:  Rails 6.1

### Overview
Basic usage of the Leaflet NPM with Rails 6.1

### How it works
Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 39 KB of JS, it has all the mapping features most developers ever need.
  
`----->>>>>` [**Try the Live Demo**](https://leaflet-npm.herokuapp.com/) `<<<<<-----`

### Packages
- leaflet
- jQuery
- resolve-url-loader   _**for precompiling images in npm packages**_

#### Files Edited 

```
├── controllers
│   └── maps_controller.rb
├── javascript
│   ├── images
│   ├── packs
│   │   ├── application.js
│   │   └── leaflet.js
│   └── stylesheets
│       ├── application.scss
│       └── vendor
│           └── leaflet.scss
├── models
│   └── place.rb
└── views
│   └── maps
│       └── index.html.erb
│ 
└── webpack
    └── environment.js 
```

### Instructions
If you wish to clone this repository and run locally you will need to:
- Run `npm install`

#### Prerequisites
- Rails 6.1

##### TODO:
- Create example with multiple markers and connect to places table
