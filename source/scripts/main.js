document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#form-sort").addEventListener("submit", function (e) {
    e.preventDefault();
    let numeroMax = document.querySelector("#numero-maximo").value;
    numeroMax = parseInt(numeroMax);

    let numeroAleatorio = Math.random() * numeroMax;
    numeroAleatorio = Math.floor(numeroAleatorio + 1);
    document.querySelector("#resultado").innerText = numeroAleatorio;
    document.querySelector(".revelado").style.display = "block";
  });
});
