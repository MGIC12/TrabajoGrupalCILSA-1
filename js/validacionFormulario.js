(() => {
    "use strict";
    const forms = document.querySelectorAll(".needs-validation");

    // Función de validación para comprobar si hay símbolos no deseados
    function contieneSimbolos(texto) {
      const expresion = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; // Expresión regular que permite letras, números y espacios
      return !expresion.test(texto);
    }

    // Loop sobre los formularios y prevenir el envío
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          let camposInvalidos = true;

          // Verificar cada campo del formulario
          form.querySelectorAll("input, textarea").forEach((campo) => {
            if (contieneSimbolos(campo.value)) {
              camposInvalidos = false;
            }
          });

          if (!camposInvalidos && form.checkValidity()) {
            console.log("Todos los campos son válidos");
            // Mostrar una alerta si todos los campos son válidos
            alert("El formulario se ha validado correctamente.");
            form.reset();
          } else {
            console.log("Hay campos inválidos");
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();