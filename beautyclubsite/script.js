const searchIcon = document.querySelector(".search-icon")
const searchForm = document.querySelector(".search-form")

 searchIcon.addEventListener("click", () => {
   searchForm.classList.add("active")
 });

 function mostrarSenha() {
    var inputPass = document.getElementById('senha')
    var bntShowPass = document.getElementById('bnt-senha')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        bntShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type', 'password')
        bntShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }
 }