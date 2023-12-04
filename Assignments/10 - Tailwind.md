# Theory

## explore all ways of writing css

- inline style
- writing in style tab
- using external stylesheets
- css preprocessors using sass
- css in js like styled-components
- using external libraries

## how do we configure tailwind

- install tailwind and postcss
- thn configure init file for tailwind

## in tailwind.config.js - wht does content, theme, extend and plugins

- content -- here we will specify the extension of the files that we use like js, jsx, ts, tsx etc
- theme -- this keys allows us to customize the design system of our project. eg, theme: {
  extend: {
    colors: {
      primary: '#3490dc',
    },
    fontFamily: {
      sans: ['Roboto', 'sans'],
    },
  },
}
- extend -- used to extend or override the default Tailwind CSS configuration. You can add new utility classes, modify existing ones, or extend the design system, eg: extend: {
  spacing: {
    '72': '18rem',
    '84': '21rem',
  },
}
- plugins -- allows you to enable and configure Tailwind CSS plugins. You can add third-party plugins or custom plugins to enhance Tailwind's functionality. eg, plugins: [require("@tailwindcss/forms")];

## why do we have .postcssrc?

- tool for transforming and optimizing your CSS
- it converts that classnames into the actual css🚀