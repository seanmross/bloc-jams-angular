## Bloc-Jams

Objectives
Bloc-jams is a music player web-app similar to Spotify. It was built using Angular’s front-end framework. The basis of design included the following use cases:
    As a developer, I want to:
* bootstrap Angular to my app
* configure routing and states
* implement controllers for my app's views
* create a service that handles song playback
* write a directive that controls song and volume sliders

Technologies Used
Bloc-Jams was built on the Angular framework. Angular was chosen because it provides a great environment to build a single-page application. With just a single page load for all of the necessary CSS,  HTML, and Javascript it creates a smooth user experience.

Implementation Highlights
* Bloc-Jams was originally created using DOM scripting and jQuery library. It was expanded using Angular for app scalability and robustness.
* The app features view templates for a landing page, album collection page, individual album page, and a player control bar.
* MVC architecture was utilized to dynamically build the views using controllers.
* Song playback was handled by injecting a service to share the song playback information across all components of the app.
* Directives were used to bind custom user actions to angular functionality, such as adjusting the playback time or volume.

## Bloc Frontend Project Starter

Bloc-Jams is a starter application for student projects in Bloc's [Frontend Web Development Course](https://www.bloc.io/frontend-development-bootcamp).

## Configuration

The project uses Node to run a JS server in development. This will be important when we want to use urls /album or /collection instead of the basic album.html or collection.html. It may  help to review [our resource on NPM and `package.json` files](https://www.bloc.io/resources/npm-and-package-json).

Install the project dependencies by running:

```
$ npm install
```

Run the application server:
```
$ npm start
```

## Directory Structure

```
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   └── images
│   │       └── bloc-logo-white.png
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   └── app.js
│   ├── styles
│   │   └── style.css
│   └── templates
│       └── home.html
├── package.json
└── server.js
```

### Difference between Pages and Templates

The `templates` directory should hold any HTML files used as templates in Angular states configured by UI Router. All other HTML files belong in the `pages` directory.
