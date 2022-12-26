
# Single page app diagram

Base server URL: https://studies.cs.helsinki.fi

```mermaid
sequenceDiagram
browser->>server: HTTP GET /exampleapp/spa
server-->>browser: 200 text/html <html document>
Note over browser: start html processing
browser->>server: HTTP GET /exampleapp/main.css
server-->>browser: 200 tetx/css <css file>
browser->>server: HTTP GET /exampleapp/spa.js
server-->>browser: 200 application/javascript <javascript file>
Note over browser: start javascript code execution
browser->>server: HTTP GET /exampleapp/data.json
server-->>browser: 200 application/json <array of notes in json format>
Note over browser: finish web page rendering
```

Also browser sends GET request to /favicon.ico, but the site doesn't have an icon,
and server sends back default html document, available by the base URL.
