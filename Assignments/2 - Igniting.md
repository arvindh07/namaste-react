# Theory🚀

## What is npm?

- npm is node package manager. It is used to manage packages.

## What is parcel/webpack? Why do we need it?

- When it comes to prod, we just not only need react, it needs a lot of other things to bundle, optimize
  and prod-ready.
- Parcel is a bundler, that bundles our app for production. It provides a lot of other cool things
  like HMR, diagnostics etc for development as well.

## What is .parcel-cache?

- While development, it will make a dev build for changes we r doing. It builds so quick bcoz it creates
  a cache folder i.e., parcel-cache.

## What is npx?

- npx command is used to execute a package while npm i sused to install a package.

## Diff b/w devDependencies and dependencies?

- DevDependencies is something that we use only in the development phase. eg: parcel
- dependencies will contain packages that are used in production as well. ed: react

## What is tree shaking?

- it is a feature that removes unused code.

## What is HMR?

- Hot modules replacement or Hot reloading is our page refreshes automatically when we save our changes.
- Parcel or whtevr does this HMR, watches for files and refresh when something is changed.

## Five favorite super powers in parcel and describe any 3 in ur words?

### Five superpowers

- HMR
- Diagnostics and error handling
- Bundles, image optimization, compression etc
- Tree shaking
- Dev build and Prod build
- Caching folder in local enables faster builds

### HMR

- Hot modules replacement or Hot reloading is our page refreshes automatically when we save our changes.
- Parcel or whtevr does this HMR, watches for files and refresh when something is changed.
- It will not do a full page refresh, instead it will replace only the changed modules.🚀

### .parcel-cache

- it enables faster builds due to caches.

### Diagnostics and error handling

- When an error occurs, it is not displayed in webpage, it will be seen in console.
- But in parcel, we can see that error in webpage and at which line it occurs.

## What is .gitignore and what should be added in it?

- .gitignore is a file, that is used to ignore files that we dont need in github
- it just simply ignores the files.
- Things which can be regenerated should not be put in our git repo. eg: node_modules, cache, dist etc

## Diff b/w package.json and package-lock.json?

Package.json

- It is a config file, that is used to manage packages and contains the history of our packages.

Package-lock.json

- It is lock file, which contains the exact version of our dependencies.
- It ensures the same exact version is used across different environments and builds.🔥

## Why we should not modify package-lock.json?

- Since it is a lock file and contains the exact version of our dependencies and it is used to regenerate
  our node_modules, we should not modify them.
- any manual changes, might lead to inconsistencies and dependency conflicts.

## What is node_modules and can we push that on git?

- node_modules is a folder that contains all our dependencies code and its sub-dependencies as well.
- No, we should not push it since it can be regenearated using package and package-lock.json.

## What is dist(distribution) folder?

- it contains the build code.
- parcel builds both dev and prod code.
- parcel dev -> npx parcel index.html -> served in localhost
- parcel prod -> npx parcel build index.html -> served in any domain that we host.
- contents of this folder is served to users.

## What is browserslist?

- it is a key that we can add it in package.json file. It is used to specify browser that our app should be
  supporting like "last 2 chrome versions"

## Abt ^caret and ~tilde?

- caret updates both minor and patch versions.
- tilde updates patch version alone.
