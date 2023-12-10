const escribirTarea = document.getElementById("escribirTarea");
const btnTarea = document.getElementById("btnTarea");
const numeracionTareas = document.getElementById("numeroTareas");
const infomacionTareas = document.getElementById("listaTareas");
const numeracionTareasR = document.getElementById("tareasMarcadas");

const tareas = [
  { id: 1, name: "Terminar esta actividad.", completado: false },
  { id: 2, name: "Sobrevivir a este modulo.", completado: false },
  { id: 3, name: "Graduarme de programador (espero sea lo mas pronto posible).", completado: false,
  },
];

btnTarea.addEventListener("click", () => {
  if (escribirTarea.value === "") return;
  const nombreTarea = escribirTarea.value.trim();

  const ultimaTarea = tareas[tareas.length - 1];
  const nuevaTarea = {
    id: ultimaTarea ? ultimaTarea.id + 1 : 1,
    name: nombreTarea,
    completado: false,
  };

  tareas.push(nuevaTarea);
  escribirTarea.value = "";
  actualizarTareas();
});

const actualizarTareas = () => {
  let template = "";
  let tareasRealizadas = 0;
  let numeroTareas = 0

  tareas.forEach((tarea) => {
    template += `
      <div class="caja" type="flexbox">
        <p>${tarea.id}  ${tarea.name} <input type="checkbox" class="form-check-input-lg" ${
      tarea.completado ? "checked" : ""
    } onclick="cambiarEstado(${tarea.id})" />
        <button class="btn btn-danger border-0 rounded-circle mx-1" onclick="borrarTarea(${tarea.id})">X</button> 
      </p> `;

    if (tarea.completado) {
      tareasRealizadas++;
    }
  });

  infomacionTareas.innerHTML = template;
  numeracionTareas.textContent = `Cantidad de Tareas: ${tareas.length}`;
  numeracionTareasR.textContent = `Tareas realizadas: ${tareasRealizadas} / ${tareas.length}`;
};

const mostrarTareas = (tareas, tareaId) => {
  const listaTareas = document.getElementById(tareaId);
  const mostrarTareas = tareas.slice(0, 3);

  let template = "";
  mostrarTareas.forEach(
    (tarea) =>
      (template += `
        <div class="caja"  type="flexbox">
        
        <p>${tarea.id} ${tarea.name} <input type="checkbox" class="rounded-circle"${
        tarea.completado ? "checked" : ""
      } onclick="cambiarEstado(${tarea.id})" />
            <button onclick="borrarTarea(${tarea.id})">Borrar</button> 
        </p> 
    `)
  );
  listaTareas.innerHTML = template;
};
const cambiarEstado = (tareaId) => {
  const tareaIndex = tareas.findIndex((tarea) => tarea.id === tareaId);
  tareas[tareaIndex].completado = !tareas[tareaIndex].completado;
  actualizarTareas();
};

const borrarTarea = (tareaId) => {
  const tareaIndex = tareas.findIndex((tarea) => tarea.id === tareaId);
  tareas.splice(tareaIndex, 1);
  actualizarTareas();
};

actualizarTareas();

//se que se podrian reducir esta barbaridad de codigos pero ya de por si estoy llorando con esta actividad
//siento que me quitara puntos por no aplicar el css en el boostrap en su totalidad pero sinceramente me siento saturado
//tambien quiero agregar que se que tengo una sopa de letras con los nombres porque me toco anotar todos y cada uno
//de ellos porque literal tengo un glosario escrito, cuando termine esta clase debo estudiarla de nuevo porque 
//siendole totalmente franco profe, tengo muchas dificultades con estructurar constantes y funciones
//he estado usando las clases y ejemplos para guiarme pero no me siento capaz de hacerlo de cero de golpe
//sin embargo, gracias al js estoy entendiendo la funcionalidad de todo a mi alrededor, es interesante aunque dificil...
//por cierto me rendi con buscar hacer crecer el checkbox, no me responde el boostrap