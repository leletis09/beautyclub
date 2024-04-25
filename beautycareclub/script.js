const searchIcon = document.querySelector(".search-icon")
const searchForm = document.querySelector(".search-form")
const menuIcon = document.querySelector(".menu-icon")
const navbar = document.querySelector(".navbar")

searchIcon.addEventListener("click", () => {
   searchForm.classList.add("active")
   navbar.classList.remove("active")
});
menuIcon.addEventListener("click", () => {
  navbar.classList.add("active")
  searchForm.classList.remove("active")
});
 window.onscroll = ()=>{
   searchForm.classList.remove("active")
   navbar.classList.remove("active")
 }
//  cadastro
 function mostrarSenha() {
  var inputPass = document.getElementById('senha_hash');
  var btnShowPass = document.getElementById('btn-senha');

  if (inputPass.type === 'password') {
      inputPass.setAttribute('type', 'text');
      btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
  } else {
      inputPass.setAttribute('type', 'password');
      btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
  }
}

function mostrarSenha2() {
  var inputPass2 = document.getElementById('conf_senha_hash');
  var btnShowPass2 = document.getElementById('conf_btn-senha');

  if (inputPass2.type === 'password') {
      inputPass2.setAttribute('type', 'text');
      btnShowPass2.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
  } else {
      inputPass2.setAttribute('type', 'password');
      btnShowPass2.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
  }
}