const searchInput = document.querySelector("[data-search]")
const userCardTemplate = document.querySelector("[user-data-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")


let users = []


fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    
    // after our forEach statement we are given 10 cards
    users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = user.name
        body.textContent = user.email
        userCardContainer.append(card)
        return { name: user.name, email: user.email, element: card}
    })
    
})


searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        // the toggle function takes ("className", "true or false variable") 2 parameters
        user.element.classList.toggle("hide", !isVisible)
    })
    console.log(users)
})
