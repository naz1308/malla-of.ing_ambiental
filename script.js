
// script.js

const ramos = [
  // 1er Semestre
  { codigo: "PG315", nombre: "TECNICAS DE COMUNICACION Y REDACCION", creditos: 2, semestre: 1, requisitos: [] },
  { codigo: "MT301B", nombre: "ALGEBRA LINEAL", creditos: 3, semestre: 1, requisitos: [] },
  { codigo: "MT104", nombre: "CALCULO DIFERENCIAL", creditos: 3, semestre: 1, requisitos: [] },
  { codigo: "UPC01", nombre: "CATEDRA UPECISTA", creditos: 1, semestre: 1, requisitos: [] },
  { codigo: "HM201", nombre: "HUMANIDADES I", creditos: 2, semestre: 1, requisitos: [] },
  { codigo: "AS100", nombre: "INTRODUCCION A LA ING AMBIENTAL Y SANITARIA", creditos: 2, semestre: 1, requisitos: [] },
  { codigo: "CN332", nombre: "QUIMICA I", creditos: 4, semestre: 1, requisitos: [] },

  // 2do Semestre
  { codigo: "CN206", nombre: "BIOLOGIA I", creditos: 3, semestre: 2, requisitos: [] },
  { codigo: "MT303B", nombre: "CALCULO INTEGRAL", creditos: 3, semestre: 2, requisitos: ["MT104"] },
  { codigo: "AS201", nombre: "DIBUJO", creditos: 2, semestre: 2, requisitos: [] },
  { codigo: "UPC04", nombre: "LENGUA EXTRANJERA-GRAMATICA", creditos: 2, semestre: 2, requisitos: [] },
  { codigo: "FS202", nombre: "MECANICA", creditos: 3, semestre: 2, requisitos: ["MT104"] },
  { codigo: "CN333", nombre: "QUIMICA II", creditos: 4, semestre: 2, requisitos: ["CN332"] },

  // 3er Semestre
  { codigo: "SS302", nombre: "ALGORITMOS Y FUNDAMENTOS DE PROGRAMACION", creditos: 2, semestre: 3, requisitos: ["MT301B"] },
  { codigo: "CN345", nombre: "BIOLOGIA II", creditos: 3, semestre: 3, requisitos: ["CN206"] },
  { codigo: "MT331", nombre: "CALCULO MULTIVARIABLE", creditos: 3, semestre: 3, requisitos: ["MT303B"] },
  { codigo: "AS401", nombre: "ECOLOGIA", creditos: 3, semestre: 3, requisitos: ["AS100"] },
  { codigo: "FS332", nombre: "ELECTROMAGNETISMO", creditos: 3, semestre: 3, requisitos: ["FS202"] },
  { codigo: "ING303", nombre: "EPISTEMOLOGIA", creditos: 2, semestre: 3, requisitos: ["HM201"] },
  { codigo: "UPC05", nombre: "LENGUA EXTRANJERA-LECTURA", creditos: 2, semestre: 3, requisitos: ["UPC04"] },

  // 4to Semestre
  { codigo: "MT305B", nombre: "ECUACIONES DIFERENCIALES ORDINARIAS", creditos: 3, semestre: 4, requisitos: ["MT331"] },
  { codigo: "MT403", nombre: "ESTADISTICA DESCRIPTIVA E INFERENCIAL", creditos: 3, semestre: 4, requisitos: ["MT303B"] },
  { codigo: "AS465", nombre: "ESTATICA", creditos: 3, semestre: 4, requisitos: ["FS202"] },
  { codigo: "AS466", nombre: "FISICOQUIMICA AMBIENTAL", creditos: 3, semestre: 4, requisitos: ["CN333"] },
  { codigo: "UPC06", nombre: "LENGUA EXTRANJERA-ESCRITURA", creditos: 2, semestre: 4, requisitos: ["UPC05"] },
  { codigo: "AS468", nombre: "METODOLOGIA DE LA INVESTIGACION I", creditos: 2, semestre: 4, requisitos: ["ING303"] },
  { codigo: "AS467", nombre: "MICROBIOLOGIA AMBIENTAL", creditos: 3, semestre: 4, requisitos: ["CN345"] },

  // 5to Semestre
  { codigo: "AS504", nombre: "DISEÑO EXPERIMENTAL", creditos: 2, semestre: 5, requisitos: ["MT403"] },
  { codigo: "AS405", nombre: "GEOLOGIA", creditos: 3, semestre: 5, requisitos: ["AS466"] },
  { codigo: "UPC07", nombre: "LENGUA EXTRANJERA-CONVERSACION", creditos: 2, semestre: 5, requisitos: ["UPC06"] },
  { codigo: "AS501", nombre: "MECANICA DE FLUIDOS", creditos: 3, semestre: 5, requisitos: ["AS465"] },
  { codigo: "AS502", nombre: "QUIMICA SANITARIA", creditos: 3, semestre: 5, requisitos: ["AS466"] },
  { codigo: "AS413", nombre: "RESISTENCIA DE MATERIALES", creditos: 3, semestre: 5, requisitos: ["AS465"] },
  { codigo: "AS503", nombre: "TOPOGRAFIA", creditos: 3, semestre: 5, requisitos: [] },

  // 6to Semestre
  { codigo: "UPC08", nombre: "ACTIVIDAD DEPORTIVA", creditos: 1, semestre: 6, requisitos: [] },
  { codigo: "AS602", nombre: "CONCRETO", creditos: 3, semestre: 6, requisitos: ["AS413"] },
  { codigo: "AS603", nombre: "DISEÑO DE ACUEDUCTO", creditos: 3, semestre: 6, requisitos: ["AS501", "AS503"] },
  { codigo: "AS604", nombre: "HIDRAULICA", creditos: 3, semestre: 6, requisitos: ["AS501"] },
  { codigo: "AS605", nombre: "METODOLOGIA DE LA INVESTIGACION II", creditos: 2, semestre: 6, requisitos: ["AS504", "AS468"] },
  { codigo: "AS412", nombre: "RECURSOS NATURALES", creditos: 3, semestre: 6, requisitos: [] },
  { codigo: "AS601", nombre: "SUELOS", creditos: 3, semestre: 6, requisitos: ["AS405"] },

  // 7mo Semestre
  { codigo: "UPC09", nombre: "ACTIVIDAD CULTURAL", creditos: 1, semestre: 7, requisitos: [] },
  { codigo: "AS703", nombre: "DISEÑO DE ALCANTARILLADO", creditos: 3, semestre: 7, requisitos: ["AS603"] },
  { codigo: "AS702", nombre: "GEOMATICA", creditos: 2, semestre: 7, requisitos: ["AS503"] },
  { codigo: "AS411", nombre: "HIDROLOGIA", creditos: 3, semestre: 7, requisitos: ["MT403", "AS412"] },
  { codigo: "AS705", nombre: "LEGISLACION AMBIENTAL", creditos: 2, semestre: 7, requisitos: ["AS412"] },
  { codigo: "AS701", nombre: "PROCESOS QUIMICOS Y BIOLOGICOS", creditos: 3, semestre: 7, requisitos: ["AS502", "AS467"] },
  { codigo: "AS704", nombre: "TRATAMIENTO DE AGUA POTABLE", creditos: 3, semestre: 7, requisitos: ["AS603", "AS604"] },

  // 8vo Semestre
  { codigo: "AS806", nombre: "ECONOMIA AMBIENTAL", creditos: 2, semestre: 8, requisitos: ["AS705"] },
  { codigo: "AS804", nombre: "EVALUACION DE IMPACTO AMBIENTAL", creditos: 3, semestre: 8, requisitos: ["AS705"] },
  { codigo: "AS802", nombre: "MANEJO DE CUENCAS", creditos: 3, semestre: 8, requisitos: ["AS702", "AS411"] },
  { codigo: "AS805", nombre: "PROYECTO DE INVESTIGACION", creditos: 2, semestre: 8, requisitos: ["AS605"] },
  { codigo: "AS803", nombre: "TRATAMIENTO DE AGUAS RESIDUALES", creditos: 3, semestre: 8, requisitos: ["AS703", "AS701"] },
  { codigo: "AS801", nombre: "TRATAMIENTO DE RESIDUOS SOLIDOS", creditos: 3, semestre: 8, requisitos: ["AS601"] },

  // 9no Semestre
  { codigo: "AS426", nombre: "CONTROL DE CONTAMINACION ATMOSFERICA", creditos: 3, semestre: 9, requisitos: ["AS702"] },
  { codigo: "AS903", nombre: "COSTOS Y PRESUPUESTO", creditos: 2, semestre: 9, requisitos: ["AS704", "AS803"] },
  { codigo: "AS424", nombre: "ELECTIVA IA", creditos: 0, semestre: 9, requisitos: [] },
  { codigo: "FC407", nombre: "FORMULACION Y EVALU DE PROYEC EN INGENIERIA", creditos: 3, semestre: 9, requisitos: ["AS806"] },
  { codigo: "AS902", nombre: "SEGURIDAD Y SALUD EN EL TRABAJO", creditos: 3, semestre: 9, requisitos: ["AS705"] },

  // 10mo Semestre
  { codigo: "AS462", nombre: "COMUNIDAD Y GESTION EMPRESARIAL", creditos: 3, semestre: 10, requisitos: ["FC407"] },
  { codigo: "AS425", nombre: "ELECTIVA IB", creditos: 0, semestre: 10, requisitos: [] },
  { codigo: "AS428", nombre: "ELECTIVA II", creditos: 0, semestre: 10, requisitos: [] },
  { codigo: "AS102", nombre: "PROYECTO DE GRADO", creditos: 2, semestre: 10, requisitos: ["AS805"] },
  { codigo: "AS101", nombre: "SISTEMAS DE GESTION", creditos: 3, semestre: 10, requisitos: ["AS804"] },
];
let estadoRamos = JSON.parse(localStorage.getItem('estadoRamos')) || {};

function crearRamos() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';

  for (let semestre = 1; semestre <= 10; semestre++) {
    const semCont = document.createElement('div');
    semCont.className = 'semestre-container';

    const titulo = document.createElement('div');
    titulo.className = 'semestre-title';
    titulo.innerText = `Semestre ${semestre}`;
    semCont.appendChild(titulo);

    ramos.filter(r => r.semestre === semestre).forEach(ramo => {
      const div = document.createElement('div');
      div.className = 'ramo';
      div.id = ramo.codigo;
      div.innerHTML = `<strong>${ramo.codigo}</strong><br>${ramo.nombre}<div class="info">${ramo.creditos} créditos</div>`;

      if (estadoRamos[ramo.codigo]) {
        div.classList.add('aprobado');
      } else if (ramo.requisitos && ramo.requisitos.length) {
        const cumplidos = ramo.requisitos.every(req => estadoRamos[req]);
        if (!cumplidos) div.classList.add('bloqueado');
      } else {
        estadoRamos[ramo.codigo] = false;
      }

      div.onclick = () => aprobarRamo(ramo);
      semCont.appendChild(div);
    });

    contenedor.appendChild(semCont);
  }
}

function aprobarRamo(ramo) {
  const div = document.getElementById(ramo.codigo);
  if (div.classList.contains('bloqueado')) return;

  div.classList.add('aprobado');
  estadoRamos[ramo.codigo] = true;
  localStorage.setItem('estadoRamos', JSON.stringify(estadoRamos));

  ramos.forEach(r => {
    if (r.requisitos && r.requisitos.includes(ramo.codigo)) {
      const cumplidos = r.requisitos.every(req => estadoRamos[req]);
      if (cumplidos) {
        const target = document.getElementById(r.codigo);
        if (target) target.classList.remove('bloqueado');
      }
    }
  });
}

function reiniciarMalla() {
  localStorage.removeItem('estadoRamos');
  estadoRamos = {};
  crearRamos();
}

document.addEventListener('DOMContentLoaded', () => {
  crearRamos();

  const botonReiniciar = document.createElement('button');
  botonReiniciar.innerText = 'Reiniciar Malla';
  botonReiniciar.className = 'reiniciar';
  botonReiniciar.onclick = reiniciarMalla;
  document.body.prepend(botonReiniciar);
});

