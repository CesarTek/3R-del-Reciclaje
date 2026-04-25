function guardarActividad(e){
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let actividad = document.getElementById("actividad").value;

  let datos = JSON.parse(localStorage.getItem("datos3R")) || [];
  datos.push({nombre, actividad});

  localStorage.setItem("datos3R", JSON.stringify(datos));

  document.getElementById("formEquipo").reset();
  mostrarActividades();
}

function mostrarActividades(){
  let datos = JSON.parse(localStorage.getItem("datos3R")) || [];
  let lista = document.getElementById("lista");

  if(!lista) return;

  lista.innerHTML = "";

  datos.forEach((d, i) => {
    lista.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span><strong>${d.nombre}</strong> - ${d.actividad}</span>
        <button class="btn btn-sm btn-danger" onclick="eliminar(${i})">X</button>
      </li>
    `;
  });
}

function eliminar(index){
  let datos = JSON.parse(localStorage.getItem("datos3R")) || [];
  datos.splice(index, 1);
  localStorage.setItem("datos3R", JSON.stringify(datos));
  mostrarActividades();
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarActividades();

  let form = document.getElementById("formEquipo");
  if(form){
    form.addEventListener("submit", guardarActividad);
  }
});