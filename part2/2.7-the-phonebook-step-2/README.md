# 2.7: The Phonebook Step2

Prevent the user from being able to add names that already exist in the phonebook.
JavaScript arrays have numerous suitable methods for accomplishing this task.
Keep in mind how object equality works in Javascript.

Issue a warning with the alert command when such an action is attempted:

![App view](./images/app-view.png)

Hint: when you are forming strings that contain values from variables,
it is recommended to use a template string:

```js
`${newName} is already added to phonebook`
```

If the newName variable holds the value Arto Hellas,
the template string expression returns the string

```js
`Arto Hellas is already added to phonebook`
```

The same could be done in a more Java-like fashion by using the plus operator:

```js
newName + ' is already added to phonebook'
```

Using template strings is the more idiomatic option and the sign of a true JavaScript professional.
