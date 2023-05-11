// obtener elementos del DOM
const loginSection = document.getElementById("PagInicio");
const loadingSection = document.getElementById("PantallaCarga");
const contentSection = document.getElementById("PagFinal");

// ocultar secciones iniciales
loadingSection.style.display = "none";
contentSection.style.display = "none";

// agregar evento al formulario de inicio de sesión
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // evitar envío del formulario

  // mostrar pantalla de carga
  loginSection.style.display = "none";
  loadingSection.style.display = "block";

  // simular carga de contenido
  setTimeout(function() {
    // ocultar pantalla de carga y mostrar contenido final
    loadingSection.style.display = "none";
    contentSection.style.display = "block";
  }, 3000); // tiempo de espera en milisegundos
});