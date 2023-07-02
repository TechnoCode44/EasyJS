# EasyJS

Yet another JavaScript library to make JavaScript a little more bearable.

## httpRequest

The `httpRequest` function is used for sending http/https requests in a simpler way then the `fetchapi` or `XMLHttpRequest`.

It takes 3 parameters:

- `url` which is the url of the request
- `method` which is the type of api method to use (`GET`, `POST`, etc)
- `payload` which is the json given to the url (optional)

```javascript
import { httpRequest } from "./easyJS.js";

httpRequest("https://jsonplaceholder.typicode.com/users").then(data => {
    console.log(data)
})

httpRequest("https://reqres.in/api/users", "POST", {
    "name": "morpheus",
    "job": "leader"
}).then(data => {
    console.log(data)
})
```

## Cookies

Under the [Data Protection Act 2018](https://www.gov.uk/data-protection) by law you need to **ASK FOR CONSENT** for collection of cookies.

There are three functions for handerling cookies:

- `setCookie()` to create cookies or change there value
- `removeCookie()` to delete a cookie
- `getCookie()` to get the value of a cookie

```javascript
import { setCookie, removeCookie, getCookie } from "./easyJS.js";

setCookie("name", "Foo") // Creates a cookie called "name" with the value of "Foo"
getCookie("name") // Returns the value "Foo"
removeCookie("name") // Deletes the cookie called "name"

```