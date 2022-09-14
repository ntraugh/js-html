const searchInput = document.querySelector("[data-search]")
const userCardTemplate = document.querySelector("[user-data-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")




fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    
    // after our forEach statement we are given 10 cards
    data.forEach(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        header.textContent = user.name
        body.textContent = user.email
        userCardContainer.append(card)
        
    })
    
})


searchInput.addEventListener("change", e => {
    const value = e.target.value
    console.log(value)
})
