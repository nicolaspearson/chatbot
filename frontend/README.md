# Chatbot Frontend

This is the React frontend for the Chatbot app, it was built using Typescript, MobX, Ant Design, and FuseBox.

This project uses a custom MobX router implemented from this great example [hacker-routing-mobx-router5](https://github.com/eugenkiss/hacker-routing-mobx-router5)

### Running the project

1.  `npm install`
2.  `npm build` to compile the source code into the build dir, i.e. to create a production build.
3.  `npm start` to run the application in dev mode.
4.  `npm run prettier` to prettify the code.

### Docker

This project includes a multi-stage Dockerfile, to build an image you can execute: `docker build . --tag react-chatbot:1.0`

### Themes and generated output

This project uses a `Git Kraken` theme, feel free to swop it out with your flavour!

The styles are applied at build time, any changes that are made to your theme will automatically be applied during development via HMR (Hot Module Reloading). Additionally a JSON file containing the palette is generated from the less file -> `src/utils/raw/palette.json`, the JSON file is used to read any less variables from our typescript classes, see `src/utils/PaletteUtils`.

### Directory structure

The `src` directory layout can be seen below:

```
src
├── api
├── assets
│   └── images
│       ├── png
│       └── theme
├── components
│   ├── boundary
│   │   ├── DashboardErrorBoundary
│   │   └── ErrorBoundary
│   ├── functional
│   │   ├── HtmlHead
│   │   └── RouterLink
│   ├── icon
│   │   ├── Chatbot
│   │   ├── Hamburger
│   │   └── Logo
│   ├── structural
│   │   ├── DashboardPage
│   │   ├── Footer
│   │   ├── Head
│   │   ├── Header
│   │   ├── Loader
│   │   ├── Nav
│   │   ├── Page
│   │   └── SiteNav
│   └── ui
│       ├── Palette
│       └── RoundButton
├── containers
│   ├── App
│   └── DashboardLayout
├── enums
├── logger
├── models
├── pages
│   ├── Dashboard
│   │   ├── Chat
│   │   └── Profile
│   ├── Landing
│   ├── Login
│   └── SignUp
├── proto
├── router
├── store
├── theme
│   └── styles
│       ├── ant
│       └── kraken
├── types
└── utils
    └── raw -- Generated
```

### Dependencies used:

The dependency list below is not exhaustive, it is simply used to highlight the major dependencies of this web app.

### Runtime

- [Ant Design 3.11.2](https://ant.design/)
- [MobX 5.8.0](https://mobx.js.org)
- [React 16.6.3](https://facebook.github.io/react/)
- [Router5 6.6.3](https://router5.js.org/)

### Build time

- [FuseBox 3.6.0](https://fuse-box.org)
- [Less 3.9.0](http://lesscss.org/)
- [Typescript 3.2.2](https://www.typescriptlang.org/)

### Contribution guidelines

- Code reviews are done via pull requests
