const products = document.getElementById("products")
const trial = document.getElementById("trial")

const handleClick = () => {
    const hero = document.querySelector(".hero")
    hero.style.backgroundColor = "salmon"
    
}



products.addEventListener("click", handleClick)