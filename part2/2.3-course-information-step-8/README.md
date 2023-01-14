# 2.3*: Course information step8

If you haven't done so already, calculate the sum of exercises with the array method reduce.

Pro tip: when your code looks as follows:

```js
const total = 
  parts.reduce((s, p) => someMagicHere)
```

and does not work, it's worth it to use console.log,
which requires the arrow function to be written in its longer form:

```js
const total = parts.reduce((s, p) => {
  console.log('what is happening', s, p)
  return someMagicHere 
})
```

Not working? : Use your search engine to look up how reduce is used in an Object Array.

Pro tip 2: There is a plugin for VS Code that automatically changes the short-form arrow functions into their longer form and vice versa.

![Code view](./images/app-view.png)
