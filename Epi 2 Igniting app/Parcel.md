# PARCEL 🚀

It does the following things for us:

## Dev build
## local server
## Bundles our app
## HMR - HOT MODULE REPLACEMENT(bcoz of file watching it able to refresh if any new changes)
## File Watching - written in c++
## Faster builds - due to caching(.parcel-cache folder)
## Image optimization(one of the most expensive thing in browser is to load images in browser)
## Minification
## Compressing
## Consistent hashing
## Code splitting
## Differential bundling - to support old browsers
## Diagnostics and Error handling
## can support HTTPs
## Tree shaking - remove unused code
## Differnet dev and prod build(optimization prod>dev)

Dev build and Production build
## Dev build is something that we have, whn we run npx parcel index.html
## prod build, npx parcel build index.html
## Both the builds will be located in dist folder

Why our react app is fast?
- React makes things faster but we need lot of other things to make our app faster.
- parcel does the job for us. It caches things that makes our build faster while development.
- It does a lot of cool things as mentioned above to make our react app faster.

Dist folder
- parcel bundles a dev build and put it in dist folder and files in that will be used to host in our localhost
- this will give one html, one css, one js(if provided), proving that html, css and js are building blocks😂
- This three(html, css and js) files are production ready code(highly optimized) for our app🚀