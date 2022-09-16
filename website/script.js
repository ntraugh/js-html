const products = document.getElementById("products")
const trial = document.getElementById("trial")

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