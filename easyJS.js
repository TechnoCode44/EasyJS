export function httpRequest(url, method = null, json = null) {

    if (json == null) {
        return fetch(url)
        .then(response => response.json());
    }
    else {
        json = JSON.stringify(json)
        return fetch(url, {
            method: method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
            body: json
        })
        .then(response => response.json())
    }
}

// Cookies section

export function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Thu, 1 January 2099 12:00:00 UTC; path=/`;
}

export function removeCookie(name) {
    document.cookie = `${name}=bye; expires=Thu, 1 January 1234 12:00:00 UTC; path=/`
}