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

- npm reserved start keyword,you can use npm run start or npm start. For other things always use run with npm then script key(npm run build)
- JS Engine/browsers understands ES6 or Ecmascript
- Parcel is doing tje job behind the scenes.It transpiled(converted to the code that browser,react can understand) the code before it goes to js engine and js engine then understands this code.

Extensions that should be used
- Prettier Code Formatter By Prettier
- Bracket Pair Colorization By Dzhavat Ushav
- ESLint by Microsoft
- Better Comments by Aaron Bond

what personally we should prefer js or jsx?
- choose anything I personally like js. But it does not matters at all.

Never keep your hardcoded things in components, keep it at different file(utils,common,constants,config etc). I will make utils folder.

utils are utilities which are used across the app.

default export or import, named export or import(when we have import or export multiple things)
export default component;
import component from "path";

export const Component;
import { component } from "path";

H.w Q1. Can we use default and named exports together?
Ans1. No

Do not exceed content of your file more than 100 lines of code. -- Good Practice create new file for new component.

- onClick, onBlur, onmouseover events(click handler)
- ui is config driven

# React Hooks
- Normal JS utility functions wriiten by facebook developers inside react
- useState() - Superpowerful state variables in react
why web app is fast? react is only good at DOM Manipulation.
whenever a state variable updates/changes react rerenders component therefore DOM manipulation super fast
- useEffect()

- why do we need state variables? can we use local variable instead of state variable?
ans- when we change something on ui (calling a function / rerender of whole component when state variable changes, It triggers reconcialition Algorithm and fastly(milliseconds)) therefore react is fast as it knows what to change  - no

- local state variable super powerful variaBble we use react hook known as usestate - scope of local state variable is inside component

