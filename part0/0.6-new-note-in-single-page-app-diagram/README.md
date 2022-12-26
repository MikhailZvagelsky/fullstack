# New note in Single page app diagram

Base server URL: https://studies.cs.helsinki.fi

```mermaid
sequenceDiagram
Note over browser: run javascript code handling submit event
browser->>server: HTTP POST /exampleapp/new_note_spa <br/> Content-Type: application/json <br/> Payload: json string with content and date fields
Note over server: process new note
server-->>browser: 201 created <br/> Content-Type: application/json <br/> Payload: {"message":"note created"}
