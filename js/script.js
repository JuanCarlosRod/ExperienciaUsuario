window.onload = () => {
  let form = document.querySelector("#registroForm");
  form.nombre.addEventListener("input", validarNombre);
  form.apellidos.addEventListener("input", validarApellido);
  form.edad.addEventListener("input", validadEdad);
  form.telefono.addEventListener("input", validarTelefono);
  form.email.addEventListener("input", validarEmail);
  form.pass.addEventListener("input", validarPass);
  form.pass2.addEventListener("input", validarPass2);

  form.reset.addEventListener("click", () => {
    inputs = document.querySelectorAll("input"); //Array de todos los input del form
    inputs.forEach((element) => {
      element.classList.remove("errorInput"); //Borra el borde rojo de todos los input con error
      element.classList.remove("validoInput");
    });
    let mensajeError = document.querySelectorAll(".msn"); //elmina los mensajes de error que haya en el form
    mensajeError.forEach((mensaje) => {
      mensaje.textContent = "";
    });
  });
};

function validarFormulario() {
  if (validarNombre() && validarApellido() && validadEdad() && validarEmail() && validarTelefono() && validarPass() && validarPass2()) {
    return true;
  } else {
    return false;
  }
}

function validarNombre() {
  let nombre = document.querySelector("#nombre");
  let msnError = document.querySelector(".nombreError");
  if (!nombre.value.trim()) {
    nombre.classList.add("errorInput");
    nombre.classList.remove("validoInput");
    msnError.textContent = "El nombre es obligatorio";
    return false;
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
    nombre.classList.add("errorInput");
    nombre.classList.remove("validoInput");
    msnError.textContent = "El nombre solo debe contener letras y espacios";
    return false;
  } else {
    nombre.classList.remove("errorInput");
    nombre.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}

function validarApellido() {
  let apellido = document.querySelector("#apellidos");
  let msnError = document.querySelector(".apellidosError");
  if (!apellido.value.trim()) {
    apellido.classList.add("errorInput");
    apellido.classList.remove("validoInput");
    msnError.textContent = "El apellido es obligatorio";
    return false;
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)) {
    apellido.classList.add("errorInput");
    apellido.classList.remove("validoInput");
    msnError.textContent = "El apellido solo debe contener letras y espacios";
    return false;
  } else {
    apellido.classList.remove("errorInput");
    apellido.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}
function validadEdad() {
  let edad = document.querySelector("#edad");
  let msnError = document.querySelector(".edadError");
  if (isNaN(edad.value) || !edad.value.trim()) {
    edad.classList.add("errorInput");
    edad.classList.remove("validoInput");
    msnError.textContent = "La edad solo puede contener numeros";
    return false;
  } else if (edad.value <= 0 || edad.value > 100) {
    edad.classList.add("errorInput");
    edad.classList.remove("validoInput");
    msnError.textContent = "La edad debe ser mayor a 0 y menor que 100";
    return false;
  } else {
    edad.classList.remove("errorInput");
    edad.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}

// tambien existe la posibilidad de evaluar una expresion regular con la funcion match

function validarTelefono() {
  let telefono = document.querySelector("#telefono");
  let msnError = document.querySelector(".telefonoError");

  if (!telefono.value.trim()) {
    telefono.classList.add("errorInput");
    telefono.classList.remove("validoInput");
    msnError.textContent = "El telefono solo puede contener números";
    return false;
  } else if (!/^[6789]\d{8}$/.test(telefono.value)) {
    telefono.classList.add("errorInput");
    telefono.classList.remove("validoInput");
    msnError.textContent =
      "El telefono debe comenzar con [6/7/8/9] y de longitud 9 números";
    return false;
  } else {
    telefono.classList.remove("errorInput");
    telefono.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}
function validarEmail() {
  let email = document.querySelector("#email");
  let msnError = document.querySelector(".emailError");

  if (!email.value.trim()) {
    email.classList.add("errorInput");
    email.classList.remove("validoInput");
    msnError.textContent = "El email debe ser email";
    return false;
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)
  ) {
    email.classList.add("errorInput");
    email.classList.remove("validoInput");
    msnError.textContent = "El email debe tener formato email";
    return false;
  } else {
    email.classList.remove("errorInput");
    email.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}

function validarPass() {
  let pass = document.querySelector("#pass");
  let msnError = document.querySelector(".passError");

  if (!pass.value.trim()) {
    pass.classList.add("errorInput");
    pass.classList.remove("validoInput");
    msnError.textContent = "La contraseña debe estar rellena";
    return false;
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass.value)) {
    pass.classList.add("errorInput");
    pass.classList.remove("validoInput");
    msnError.textContent = "El formato de la contraseña no es válido";
    return false;
  } else {
    pass.classList.remove("errorInput");
    pass.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}

function validarPass2() {
  let pass = document.querySelector("#pass");
  let pass2 = document.querySelector("#pass2");
  let msnError = document.querySelector(".pass2Error");

  if (pass.value != pass2.value || !pass2.value.trim()) {
    pass2.classList.add("errorInput");
    pass2.classList.remove("validoInput");
    msnError.textContent = "Las contraseñas no coinciden";
    return false;
  } else {
    pass2.classList.remove("errorInput");
    pass2.classList.add("validoInput");
    msnError.textContent = "";
    return true;
  }
}
