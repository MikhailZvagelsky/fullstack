# 2.14: Phonebook step9

Make it possible for users to delete entries from the phonebook.
The deletion can be done through a dedicated button for each person in the phonebook list.
You can confirm the action from the user by using
the [window.confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) method:

![App view](./images/app-view.png)

The associated resource for a person in the backend can be deleted
by making an HTTP DELETE request to the resource's URL.
If we are deleting e.g. a person who has the id 2,
we would have to make an HTTP DELETE request to the URL localhost:3001/persons/2.
No data is sent with the request.

You can make an HTTP DELETE request with the axios library
in the same way that we make all of the other requests.

NB: You can't use the name delete for a variable because it's a reserved word in JavaScript.
E.g. the following is not possible:

```js
// use some other name for variable!
const delete = (id) => {
  // ...
}
```
