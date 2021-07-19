async function getData(url, id="/") {
    const response = await fetch(url + id);
    const body = await response.json()
    return body
}

export {getData};