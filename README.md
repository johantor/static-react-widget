# Proof of concept - Static react widget

This is a proof of concept of creating a react widget, hosted on a cdn. The widget calls an api on build time to use data from the api inside the widget. The data is then used inside the widget. In this case a cat-fact is used.

The widget is hosted on netlify.
[![Netlify Status](https://api.netlify.com/api/v1/badges/7ad68a7a-b8bc-4cce-bff4-ca0e2ffb5fc0/deploy-status)](https://app.netlify.com/sites/clever-bhabha-5ffaf6/deploys)

The widget is available for testing on this [project github page](https://johantor.github.io/static-react-widget/)

## Netlify Settings

-   Build command `npm run build`
-   Publish directory `public`

## Scripts

### npm start / dev

Starts the development server.

### npm run build

Bundles the app into static files for production. Used on Netlify

### npm run lint

Checks the linting

### npm run fetch

Runs the api fetching functionality
