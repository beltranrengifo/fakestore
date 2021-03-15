# Fakestore

## Description

- A small fake store frontend, using the Fakestore API.
- Home page lists 20 products, a search field is provided to filter results by name.
- Cart page shows the user cart with the products in the cart.
- Each product provides a button to add/remove itself from the cart.
- Responsive version is not fully revised. A `responsive.js` mixin in used for the main grid breakpoints.
- Dark theme custom made with CSS custom properties. Will not work in IE11.
- Components use BEM for preventing global style conflicts. Also `scope` prop is in use.
- Breadcrumbs and Toast, for feedback about actions and navigation.

## Uses

- Nuxt for SSR rendering. Every store must have good SEO and performance!
- Typescript
- Global state using Vuex:
  - Shop module for managing products and cart actions
  - UI module for interface actions
- Custom made components, except Toast.
- Axios, through its Nuxt module, is used for HTTP requests
- Eslint and Prettier for code standars
  - `singleQuote` in JS
  - No `semis`
  - `trailingComma` always-multiline
- Husky for commit lint

## To do

- Caching data from server responses.
- Fully responsive.
- Unit and integration testing

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### Start for production

```
yarn start
```
