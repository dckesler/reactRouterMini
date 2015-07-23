#React Router Mini-Project

We're using `react-router` here to do our routing in react for a SPA, also we're using axios do asynchronous stuff. Go ahead and start these projects on github if you find them useful to you.

The webpack config is already set up for you in addition to the package.json. Also most of the structure of this application has been laid out. This, being the mini-project, is meant to help you just dive-in and get yourself an example of how react-router works. This project should be a reference for later if you need help setting up another project with react-router.

Our entry point is `App.jsx`. In here is where we tell React to render what components our router sees as active.

In the app.jsx you'll need to require the main component that houses our route handler, and also all of the main components for our different routes.

Make three routes, home, address, and weather.

Home will have a pathway of `"/"`.

Address will have a pathway of `"/address"` that supports both a `lat` param and a `lon` param.
Weather will be the same as address but `"weather"` instead of `"address"`.

We'll need to create the components for all three of these routes. Don't spend too much time making them fancy. All you need for now is a way to distinguish between them to ensure that your router is working properly.
