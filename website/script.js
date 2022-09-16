const products = document.getElementById("products")
const trial = document.getElementById("trial")

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => displayData(data))


const displayData = (data) => {
   console.log(data)
    data.map((user) => {
       const {name, email} = user
       const div = `<div class="user">
       <h1 class="name">
           ${name}
       </h1>
       <p class="email">
           ${email}
       </p>
   </div>`
   const oldDiv = document.querySelector(".users-grid")
   oldDiv.innerHTML = div
    })
}
const handleClick = () => {
    const hero = document.querySelector(".hero")
    hero.style.backgroundColor = "salmon"
}

const handleAnotherClick = () => {
    const hero = document.querySelector(".hero")
    hero.style.backgroundColor = "cadetblue"
    // window.location.replace("https://www.google.com")
}





products.addEventListener("click", handleClick)
trial.addEventListener("click", handleAnotherClick)