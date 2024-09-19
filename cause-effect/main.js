const people = []
for(let i = 1; i <= 10; i++) {
    fetch(`https://reqres.in/api/users/${i}`)
    .then(resp => resp.json())
    .then(json => console.log(json.data))
}
