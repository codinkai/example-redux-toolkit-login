
# Example: Login system with Redux Toolkit

This repository includes an example on how to use the Redux Toolkit for a simple login system. "The Redux Toolkit package is intended to be the standard way to write Redux logic" (see https://redux-toolkit.js.org/introduction/quick-start). The example has two pages a login form and a protected dashboard. To route between the pages the package 'react-router-dom' is used.

The example mocks an API request. A successful login is possible with the credentials, email=test@test.com and password=PASSWORD.

NOTE: The state is not persisted in any way. A page reload is equivalent with a logout.

## Start application

    npm install
    npm start

## Tutorial

### Create a new react app

    npx create-react-app example-rtk-login
    cd example-rtk-login

### Install dependencies

    npm install --save react-router-dom react-redux @reduxjs/toolkit

### Remove all template code

    rm src/*

### Create directory structure

    cd src
    mkdir components routes store store/slices

### index.js

The index.js file configures the react application. 

"The Provider component makes the Redux store available to any nested components that have been wrapped in the connect() function" (see https://react-redux.js.org/api/provider).

BrowserRouter component enables routing in the App component.

### Routing

The sole purpose of the App component is to route between the different components in the app.

The ProtectedRoute component checks if a user is logged in. If a user is not logged in, redirect to login page.

The index.js file provides a map of public and protected routes to the corresponding components.

### Redux store

In 'index.js' the redux store is configured and in 'reducers.js' the reducers are combined to one root reducer. 

#### Auth slice

The complete login logic is located in slices/auth.js. This is achieved due to the redux-toolkit function createSlice. "A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state" (see https://redux-toolkit.js.org/api/createslice).

