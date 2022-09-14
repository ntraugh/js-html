const userCardTemplate = document.querySelector("[user-data-template]")

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    const card = userCardTemplate.content.cloneNode(true)
    console.log(card)

})