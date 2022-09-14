const formEl = document.querySelector("form")

const handleSubmit = (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    console.log(email)
    const password = document.getElementById("password").value
    console.log(password)
}


formEl.addEventListener("submit", handleSubmit)