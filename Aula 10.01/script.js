const linkPerfil = document.getElementById("link-perfil")
const navPerfil = document.getElementById("nav-perfil")
const linkDados = document.getElementById("link-perfil-dados")
const linkHome = document.getElementById("link-home")

window.addEventListener("keyup", (e)=> {  
  
  if(e.key === "1") {
    if (navPerfil.style.display == "block") {
      linkDados.click()
    } else {
      navPerfil.style.display = "block"
    }
  }
  
  if(e.key === "Escape") {
    navPerfil.style.display = "none"
  }

  if(e.key === "Backspace") {
    linkHome.click()
  }
  
})

