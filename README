* Install Node and npm:
    https://nodejs.org/en/download/

* Create project and dependencies
    mkdir new-react
    cd new-react
    yarn init
        private: y

* Add Babel 7 to the project, and the presets for ES6 and JSX
    yarn add @babel/core @babel/preset-react @babel/preset-env

* Add basic configuration in .babelrc
    // .babelrc
    {
    "presets": ["@babel/preset-react", "@babel/preset-env"]
    }

* Add webpack (babel-loader webpack-dev-server)
    yarn add webpack webpack-cli babel-loader webpack-dev-server html-webpack-plugin

* Configure webpack: webpack.config.js

* Add index.html

* Add react and react-dom
    yarn add react react-dom

* Add src/App.jsx

* Add src/App.css

* Add index.js

* Update package.json scripts
    "scripts": {
        "start": "webpack-dev-server --hot --open",
        "build": "webpack --config webpack.config.js --mode production"
    }

* Add postcss loader to webpack
    yarn add --dev style-loader css-loader sass-loader node-sass

* Update webpack.config.js
    {
        test:/\.s?css$/,
        use:['style-loader','css-loader', 'sass-loader']
    }

* Add src/App.scss

* Update App.jsx
    import './App.scss'

* yarn start

* Add file loader
    yarn add --dev file-loader

* Update webpack.config.js
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        'file-loader'
        ]
    }

* Add TypeScript
    yarn add --dev typescript ts-loader source-map-loader

* Add tsconfig.json

* Update webpack.config.js
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    },

* Add react types
    yarn add --dev @types/react @types/react-dom

* Change to App.tsx
    import React from 'react'

    import './App.scss'

    const App:React.StatelessComponent<{}>  = () => (
        <div className='container'>
            <h1>Hello World, React!</h1>
        </div>
    )

    export default App;

* Add index.d.ts

* Add a linter
    yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin standard

* Update package.json
    "scripts": {
        "start": "webpack-dev-server --hot --open",
        "build": "webpack --config webpack.config.js --mode production",
        "lint": "standard src/**/*.tsx src/**/*.ts src/**/*.jsx src/**/*.js"
    },
    "standard": {
        "parser": "@typescript-eslint/parser",
        "plugins": [
        "@typescript-eslint/eslint-plugin"
        ]
    }

* yarn lint --fix

* Add jest
    yarn add --dev jest enzyme enzyme-adapter-react-16 @types/jest ts-jest @types/enzyme babel-jest identity-obj-proxy

* Add jest.config.json

* Update package.json
    "scripts": {
        "start": "webpack-dev-server --hot --open",
        "build": "webpack --config webpack.config.js --mode production",
        "lint": "standard src/**/*.tsx src/**/*.ts src/**/*.jsx src/**/*.js",
        "test": "jest --config ./jest.config.json"
    },

* Add setupEnzyme.js

* Add src/App.test.tsx

* yarn test





