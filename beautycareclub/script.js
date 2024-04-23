const searchIcon = document.querySelector(".search-icon")
const searchForm = document.querySelector(".search-form")

 searchIcon.addEventListener("click", () => {
   searchForm.classList.add("active")
 });
 
 function mostrarSenha() {
  var inputPass = document.getElementById('password');
  var btnShowPass = document.getElementById('btn-senha');

  if (inputPass.type === 'password') {
      inputPass.setAttribute('type', 'text');
      btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
  } else {
      inputPass.setAttribute('type', 'password');
      btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
  }
}