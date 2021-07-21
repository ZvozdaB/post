
async function getData( id="/") {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    const body = await response.json()
    return body
}

export {getData};