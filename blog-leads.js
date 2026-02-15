import { db } from "./firebase-init.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

function esCorreoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

function esNombreValido(nombre) {
  return nombre.trim().length >= 2;
}

document.querySelectorAll("a.read-more").forEach((link) => {
  link.addEventListener("click", async (e) => {
    e.preventDefault();

    alert("Bienvenido. Solo una cosa más antes de seguir: nos falta un paso que tomará unos segundos.");

    const nombre = prompt("Por favor, ingresa tu nombre:");
    if (!nombre) return;

    if (!esNombreValido(nombre)) {
      alert("Nombre inválido. Intenta de nuevo.");
      return;
    }

    const correo = prompt("Ahora ingresa tu correo electrónico:");
    if (!correo) return;

    if (!esCorreoValido(correo)) {
      alert("Correo inválido. Intenta de nuevo.");
      return;
    }

    try {
      await addDoc(collection(db, "leads_articulos"), {
        nombre: nombre.trim(),
        correo: correo.trim().toLowerCase(),
        articulo: link.getAttribute("href"),
        fecha: serverTimestamp()
      });

      alert("Gracias. ¡Listo! Ahora sí, continuemos al artículo.");
      window.location.href = link.href;
    } catch (error) {
      console.error("Error guardando lead:", error);
      alert("No se pudo guardar la información. Intenta de nuevo.");
    }
  });
});
