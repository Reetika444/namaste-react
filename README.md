# Namaste react

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Parcel uses File Watching Algorithm - which is written in c++
- Caching things for you -- faster development experience -- Faster Builds
- Image optimization(web browser me most expensive thing is to load images in browers)
- Minification(remove all whitespaces)
- Bundling
- Compressing
- it also uses other libraries for all functionalities (It manages all other libraries)
- Consistent hashing(Huge topic -- Read yourself)
- Code splitting
- Differential Bundling -- when your app is hosted,your app can be opened in google chrome, internet explorer, firefox, web broswers(older versions also) -- support older browers -- give different bundles for different browsers -- if you script tag with type module then it will generate nomodule fallback for you for older versions of browsers
- Diagnostic(Beautifull errors in terminal)
- Error Handling(Suggestions)
- HTTPS
- Tree Shaking(Imp) -- remove unused code for you --extra removed code for you(suppose there are 15 functions in code and you are using 5 of them, then 10 functions are removed)
- Transpiling
- Lazy mode (--lazy)
- HTTPS mode (--https)
- Different dev(less optimization)build and prod build bundles(more optimization) -- create prod build (npx parcel build index.html)
- browserslist(support older versions and do config in package.json)
- https://github.com/browserslist/browserslist#query-composition -- even config your app should work in 99% in US(country specific details also)


what makes your app performant fast, better user experience, optimized?