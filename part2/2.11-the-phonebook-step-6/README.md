# 2.11: The Phonebook Step6

We continue with developing the phonebook.
Store the initial state of the application in the file db.json,
which should be placed in the root of the project.

```js
{
  "persons":[
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]
}
```

Start json-server on port 3001 and make sure that the server
returns the list of people by going to the address
http://localhost:3001/persons in the browser.

If you receive the following error message:

```js
events.js:182
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE 0.0.0.0:3001
    at Object._errnoException (util.js:1019:11)
    at _exceptionWithHostPort (util.js:1041:20)
```

it means that port 3001 is already in use by another application,
e.g. in use by an already running json-server.
Close the other application, or change the port in case that doesn't work.

Modify the application such that the initial state of the data
is fetched from the server using the axios-library.
Complete the fetching with an Effect hook.
