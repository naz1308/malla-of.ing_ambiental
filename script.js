const ramos = [
  // ----- 1er semestre -----
  { codigo: "PG315", nombre: "TÉCNICAS DE COMUNICACIÓN Y REDACCIÓN", creditos: 2, semestre: 1 },
  { codigo: "MT301B", nombre: "ÁLGEBRA LINEAL", creditos: 3, semestre: 1, desbloquea: ["SS302"] },
  { codigo: "MT104", nombre: "CÁLCULO DIFERENCIAL", creditos: 3, semestre: 1, desbloquea: ["MT303B", "FS202"] },
  { codigo: "UPC01", nombre: "CÁTEDRA UPECISTA", creditos: 1, semestre: 1 },
  { codigo: "HM201", nombre: "HUMANIDADES I", creditos: 2, semestre: 1, desbloquea: ["ING303"] },
  { codigo: "AS100", nombre: "INTRODUCCIÓN A LA ING. AMBIENTAL Y SANITARIA", creditos: 2, semestre: 1, desbloquea: ["AS401"] },
  { codigo: "CN332", nombre: "QUÍMICA I", creditos: 4, semestre: 1, desbloquea: ["CN333"] },

  // ----- 2do semestre -----
  { codigo: "CN206", nombre: "BIOLOGÍA I", creditos: 3, semestre: 2, desbloquea: ["CN345"] },
  { codigo: "MT303B", nombre: "CÁLCULO INTEGRAL", creditos: 3, semestre: 2, requisitos: ["MT104"], desbloquea: ["MT331", "MT403"] },
  { codigo: "AS201", nombre: "DIBUJO", creditos: 2, semestre: 2 },
  { codigo: "UPC04", nombre: "LENGUA EXTRANJERA-GRAMÁTICA", creditos: 2, semestre: 2, desbloquea: ["UPC05"] },
  { codigo: "FS202", nombre: "MECÁNICA", creditos: 3, semestre: 2, requisitos: ["MT104"], desbloquea: ["FS332", "AS465"] },
  { codigo: "CN333", nombre: "QUÍMICA II", creditos: 4, semestre: 2, requisitos: ["CN332"], desbloquea: ["AS466"] },

  // ----- 3er semestre -----
  { codigo: "SS302", nombre: "ALGORITMOS Y FUNDAMENTOS DE PROGRAMACIÓN", creditos: 2, semestre: 3, requisitos: ["MT301B"] },
  { codigo: "CN345", nombre: "BIOLOGÍA II", creditos: 3, semestre: 3, requisitos: ["CN206"], desbloquea: ["AS467"] },
  { codigo: "MT331", nombre: "CÁLCULO MULTIVARIABLE", creditos: 3, semestre: 3, requisitos: ["MT303B"], desbloquea: ["MT305B"] },
  { codigo: "AS401", nombre: "ECOLOGÍA", creditos: 3, semestre: 3, requisitos: ["AS100"] },
  { codigo: "FS332", nombre: "ELECTROMAGNETISMO", creditos: 3, semestre: 3, requisitos: ["FS202"] },
  { codigo: "ING303", nombre: "EPISTEMOLOGÍA", creditos: 2, semestre: 3, requisitos: ["HM201"], desbloquea: ["AS468"] },
  { codigo: "UPC05", nombre: "LENGUA EXTRANJERA-LECTURA", creditos: 2, semestre: 3, requisitos: ["UPC04"], desbloquea: ["UPC06"] },

  // ----- 4to semestre -----
  { codigo: "MT305B", nombre: "ECUACIONES DIFERENCIALES ORDINARIAS", creditos: 3, semestre: 4, requisitos: ["MT331"] },
  { codigo: "MT403", nombre: "ESTADÍSTICA DESCRIPTIVA E INFERENCIAL", creditos: 3, semestre: 4, requisitos: ["MT303B"], desbloquea: ["AS504", "AS411"] },
  { codigo: "AS465", nombre: "ESTÁTICA", creditos: 3, semestre: 4, requisitos: ["FS202"], desbloquea: ["AS501", "AS413"] },
  { codigo: "AS466", nombre: "FISICOQUÍMICA AMBIENTAL", creditos: 3, semestre: 4, requisitos: ["CN333"], desbloquea: ["AS405", "AS502"] },
  { codigo: "UPC06", nombre: "LENGUA EXTRANJERA-ESCRITURA", creditos: 2, semestre: 4, requisitos: ["UPC05"], desbloquea: ["UPC07"] },
  { codigo: "AS468", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN I", creditos: 2, semestre: 4, requisitos: ["ING303"], desbloquea: ["AS605"] },
  { codigo: "AS467", nombre: "MICROBIOLOGÍA AMBIENTAL", creditos: 3, semestre: 4, requisitos: ["CN345"], desbloquea: ["AS701"] },

  // ----- 5to semestre -----
  { codigo: "AS504", nombre: "DISEÑO EXPERIMENTAL", creditos: 2, semestre: 5, requisitos: ["MT403"] },
  { codigo: "AS405", nombre: "GEOLOGÍA", creditos: 3, semestre: 5, requisitos: ["AS466"], desbloquea: ["AS601"] },
  { codigo: "UPC07", nombre: "LENGUA EXTRANJERA - CONVERSACIÓN", creditos: 2, semestre: 5, requisitos: ["UPC06"] },
  { codigo: "AS501", nombre: "MECÁNICA DE FLUIDOS", creditos: 3, semestre: 5, requisitos: ["AS465"], desbloquea: ["AS604", "AS603"] },
  { codigo: "AS502", nombre: "QUÍMICA SANITARIA", creditos: 3, semestre: 5, requisitos: ["AS466"], desbloquea: ["AS701"] },
  { codigo: "AS413", nombre: "RESISTENCIA DE MATERIALES", creditos: 3, semestre: 5, requisitos: ["AS465"], desbloquea: ["AS602"] },
  { codigo: "AS503", nombre: "TOPOGRAFÍA", creditos: 3, semestre: 5, desbloquea: ["AS603", "AS702"] },

  // ----- 6to semestre -----
  { codigo: "UPC08", nombre: "ACTIVIDAD DEPORTIVA", creditos: 1, semestre: 6 },
  { codigo: "AS602", nombre: "CONCRETO", creditos: 3, semestre: 6, requisitos: ["AS413"] },
  { codigo: "AS603", nombre: "DISEÑO DE ACUEDUCTO", creditos: 3, semestre: 6, requisitos: ["AS501", "AS503"], desbloquea: ["AS703", "AS704"] },
  { codigo: "AS604", nombre: "HIDRÁULICA", creditos: 3, semestre: 6, requisitos: ["AS501"], desbloquea: ["AS704"] },
  { codigo: "AS605", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN II", creditos: 2, semestre: 6, requisitos: ["AS468"] },
  { codigo: "AS412", nombre: "RECURSOS NATURALES", creditos: 3, semestre: 6, desbloquea: ["AS411", "AS705"] },
  { codigo: "AS601", nombre: "SUELOS", creditos: 3, semestre: 6, requisitos: ["AS405"], desbloquea: ["AS801"] },

  // ----- 7mo semestre -----
  { codigo: "UPC09", nombre: "ACTIVIDAD CULTURAL", creditos: 1, semestre: 7 },
  { codigo: "AS703", nombre: "DISEÑO DE ALCANTARILLADO", creditos: 3, semestre: 7, requisitos: ["AS603"], desbloquea: ["AS803"] },
  { codigo: "AS702", nombre: "GEOMÁTICA", creditos: 2, semestre: 7, requisitos: ["AS503"], desbloquea: ["AS802", "AS426"] },
  { codigo: "AS411", nombre: "HIDROLOGÍA", creditos: 3, semestre: 7, requisitos: ["AS412", "MT403"], desbloquea: ["AS802"] },
  { codigo: "AS705", nombre: "LEGISLACIÓN AMBIENTAL", creditos: 2, semestre: 7, requisitos: ["AS412"], desbloquea: ["AS804", "AS806", "AS902"] },
  { codigo: "AS701", nombre: "PROCESOS QUÍMICOS Y BIOLÓGICOS", creditos: 3, semestre: 7, requisitos: ["AS467", "AS502"], desbloquea: ["AS803"] },
  { codigo: "AS704", nombre: "TRATAMIENTO DE AGUA POTABLE", creditos: 3, semestre: 7, requisitos: ["AS603", "AS604"], desbloquea: ["AS903"] },

  // ----- 8vo semestre -----
  { codigo: "AS806", nombre: "ECONOMÍA AMBIENTAL", creditos: 2, semestre: 8, requisitos: ["AS705"], desbloquea: ["FC407"] },
  { codigo: "AS804", nombre: "EVALUACIÓN DE IMPACTO AMBIENTAL", creditos: 3, semestre: 8, requisitos: ["AS705"], desbloquea: ["AS101"] },
  { codigo: "AS802", nombre: "MANEJO DE CUENCAS", creditos: 3, semestre: 8, requisitos: ["AS702", "AS411"] },
  { codigo: "AS805", nombre: "PROYECTO DE INVESTIGACIÓN", creditos: 2, semestre: 8, requisitos: ["AS605"], desbloquea: ["AS102"] },
  { codigo: "AS803", nombre: "TRATAMIENTO DE AGUAS RESIDUALES", creditos: 3, semestre: 8, requisitos: ["AS701", "AS703"], desbloquea: ["AS903"] },
  { codigo: "AS801", nombre: "TRATAMIENTO DE RESIDUOS SÓLIDOS", creditos: 3, semestre: 8, requisitos: ["AS601"] },

  // ----- 9no semestre -----
  { codigo: "AS426", nombre: "CONTROL DE CONTAMINACIÓN ATMOSFÉRICA", creditos: 3, semestre: 9, requisitos: ["AS702"] },
  { codigo: "AS903", nombre: "COSTOS Y PRESUPUESTOS", creditos: 2, semestre: 9, requisitos: ["AS704", "AS803"] },
  { codigo: "AS424", nombre: "ELECTIVA IA", creditos: 3, semestre: 9, creditosMin: 125 },
  { codigo: "FC407", nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS EN INGENIERÍA", creditos: 3, semestre: 9, requisitos: ["AS806"], desbloquea: ["AS462"] },
  { codigo: "AS902", nombre: "SEGURIDAD Y SALUD EN EL TRABAJO", creditos: 3, semestre: 9, requisitos: ["AS705"] },

  // ----- 10mo semestre -----
  { codigo: "AS462", nombre: "COMUNIDAD Y GESTIÓN EMPRESARIAL", creditos: 3, semestre: 10, requisitos: ["FC407"] },
  { codigo: "AS425", nombre: "ELECTIVA IB", creditos: 3, semestre: 10, creditosMin: 141 },
  { codigo: "AS428", nombre: "ELECTIVA II", creditos: 3, semestre: 10, creditosMin: 141 },
  { codigo: "AS102", nombre: "PROYECTO DE GRADO", creditos: 2, semestre: 10, requisitos: ["AS805"] },
  { codigo: "AS101", nombre: "SISTEMAS DE GESTIÓN", creditos: 3, semestre: 10, requisitos: ["AS804"] }
];

const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos")) || {};

function crearRamos() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  // Créditos aprobados
  let creditosAprobados = 0;
  ramos.forEach(r => {
    if (estadoRamos[r.codigo]) creditosAprobados += r.creditos;
  });

  // Agrupar por semestre
  const semestres = {};
  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) {
      semestres[ramo.semestre] = [];
    }
    semestres[ramo.semestre].push(ramo);
  });

  for (const semestre in semestres) {
    const box = document.createElement("div");
    box.className = "semestre-container";

    const titulo = document.createElement("div");
    titulo.className = "semestre-title";
    titulo.textContent = `Semestre ${semestre}`;
    box.appendChild(titulo);

    semestres[semestre].forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.id = ramo.codigo;
      const nombre = document.createElement("div");
      nombre.textContent = ramo.nombre;
      nombre.style.fontWeight = "bold";

      const codigo = document.createElement("div");
      codigo.className = "info";
      codigo.textContent = `Código: ${ramo.codigo}`;
      
      const creditos = document.createElement("div");
      creditos.className = "info";
      creditos.textContent = `Créditos: ${ramo.creditos}`;


      div.appendChild(nombre);
      div.appendChild(codigo);
      div.appendChild(creditos);

      if (estadoRamos[ramo.codigo]) {
        div.classList.add("aprobado");
      } else {
        let bloqueado = false;

        // Requisitos por ramos
        if (ramo.requisitos) {
          const ok = ramo.requisitos.every(req => estadoRamos[req]);
          if (!ok) bloqueado = true;
        }

        // Requisitos por créditos
        if (ramo.creditosMin && creditosAprobados < ramo.creditosMin) {
          bloqueado = true;
        }

        if (bloqueado) div.classList.add("bloqueado");
      }

      div.addEventListener("click", () => aprobarRamo(ramo.codigo));
      box.appendChild(div);
    });

    contenedor.appendChild(box);
  }

  // Mostrar créditos aprobados
  const creditosDiv = document.createElement("div");
  creditosDiv.style.textAlign = "center";
  creditosDiv.style.margin = "30px";
  creditosDiv.innerHTML = `<strong>Créditos Aprobados: ${creditosAprobados}</strong>`;
  contenedor.appendChild(creditosDiv);
}

function aprobarRamo(codigo) {
  estadoRamos[codigo] = !estadoRamos[codigo];
  localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
  crearRamos();
}

// Botón para reiniciar
const botonReiniciar = document.createElement("button");
botonReiniciar.textContent = "🔄 Reiniciar Malla";
botonReiniciar.className = "reiniciar";
botonReiniciar.onclick = () => {
  if (confirm("¿Estás seguro de que deseas reiniciar la malla?")) {
    localStorage.removeItem("estadoRamos");
    location.reload();
  }
};
document.body.appendChild(botonReiniciar);

// Inicializar
document.addEventListener("DOMContentLoaded", crearRamos);
