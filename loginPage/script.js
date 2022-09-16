const formEl = document.querySelector("form")

const handleSubmit = (e) => {
    e.preventDefault()

    localStorage.getItem("user")

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const background = document.querySelector("fullscreen")

    

    localStorage.setItem("user", JSON.stringify(email))
  
}


formEl.addEventListener("submit", handleSubmit)