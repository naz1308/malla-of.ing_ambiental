// script.js

const ramos = [
  // --- Semestre 1 ---
  { codigo: 'PG315', nombre: 'TECNICAS DE COMUNICACION Y REDACCION', creditos: 2, semestre: 1 },
  { codigo: 'MT301B', nombre: 'ALGEBRA LINEAL', creditos: 3, semestre: 1, desbloquea: ['SS302'] },
  { codigo: 'MT104', nombre: 'CALCULO DIFERENCIAL', creditos: 3, semestre: 1, desbloquea: ['MT303B', 'FS202'] },
  { codigo: 'UPC01', nombre: 'CATEDRA UPECISTA', creditos: 1, semestre: 1 },
  { codigo: 'HM201', nombre: 'HUMANIDADES I', creditos: 2, semestre: 1, desbloquea: ['ING303'] },
  { codigo: 'AS100', nombre: 'INTRODUCCION A LA ING AMBIENTAL Y SANITARIA', creditos: 2, semestre: 1, desbloquea: ['AS401'] },
  { codigo: 'CN332', nombre: 'QUIMICA I', creditos: 4, semestre: 1, desbloquea: ['CN333'] },

  // --- Semestre 2 ---
  { codigo: 'CN206', nombre: 'BIOLOGIA I', creditos: 3, semestre: 2, desbloquea: ['CN345'] },
  { codigo: 'MT303B', nombre: 'CALCULO INTEGRAL', creditos: 3, semestre: 2, requisitos: ['MT104'], desbloquea: ['MT331', 'MT403'] },
  { codigo: 'AS201', nombre: 'DIBUJO', creditos: 2, semestre: 2 },
  { codigo: 'UPC04', nombre: 'LENGUA EXTRANJERA-GRAMATICA', creditos: 2, semestre: 2, desbloquea: ['UPC05'] },
  { codigo: 'FS202', nombre: 'MECANICA', creditos: 3, semestre: 2, requisitos: ['MT104'], desbloquea: ['FS332', 'AS465'] },
  { codigo: 'CN333', nombre: 'QUIMICA II', creditos: 4, semestre: 2, requisitos: ['CN332'], desbloquea: ['AS466'] },

  // --- Semestre 3 ---
  { codigo: 'SS302', nombre: 'ALGORITMOS Y FUNDAMENTOS DE PROGRAMACION', creditos: 2, semestre: 3, requisitos: ['MT301B'] },
  { codigo: 'CN345', nombre: 'BIOLOGIA II', creditos: 3, semestre: 3, requisitos: ['CN206'], desbloquea: ['AS467'] },
  { codigo: 'MT331', nombre: 'CALCULO MULTIVARIABLE', creditos: 3, semestre: 3, requisitos: ['MT303B'], desbloquea: ['MT305B'] },
  { codigo: 'AS401', nombre: 'ECOLOGIA', creditos: 3, semestre: 3, requisitos: ['AS100'] },
  { codigo: 'FS332', nombre: 'ELECTROMAGNETISMO', creditos: 3, semestre: 3, requisitos: ['FS202'] },
  { codigo: 'ING303', nombre: 'EPISTEMOLOGIA', creditos: 2, semestre: 3, requisitos: ['HM201'], desbloquea: ['AS468'] },
  { codigo: 'UPC05', nombre: 'LENGUA EXTRANJERA-LECTURA', creditos: 2, semestre: 3, requisitos: ['UPC04'], desbloquea: ['UPC06'] },

  // --- Semestre 4 ---
  { codigo: 'MT305B', nombre: 'ECUACIONES DIFERENCIALES ORDINARIAS', creditos: 3, semestre: 4, requisitos: ['MT331'] },
  { codigo: 'MT403', nombre: 'ESTADISTICA DESCRIPTIVA E INFERENCIAL', creditos: 3, semestre: 4, requisitos: ['MT303B'], desbloquea: ['AS504', 'AS411'] },
  { codigo: 'AS465', nombre: 'ESTATICA', creditos: 3, semestre: 4, requisitos: ['FS202'], desbloquea: ['AS501', 'AS413'] },
  { codigo: 'AS466', nombre: 'FISICOQUIMICA AMBIENTAL', creditos: 3, semestre: 4, requisitos: ['CN333'], desbloquea: ['AS405', 'AS502'] },
  { codigo: 'UPC06', nombre: 'LENGUA EXTRANJERA-ESCRITURA', creditos: 2, semestre: 4, requisitos: ['UPC05'], desbloquea: ['UPC07'] },
  { codigo: 'AS468', nombre: 'METODOLOGIA DE LA INVESTIGACION I', creditos: 2, semestre: 4, requisitos: ['ING303'], desbloquea: ['AS605'] },
  { codigo: 'AS467', nombre: 'MICROBIOLOGIA AMBIENTAL', creditos: 3, semestre: 4, requisitos: ['CN345'], desbloquea: ['AS701'] },

  // --- Semestre 5 ---
  { codigo: 'AS504', nombre: 'DISEÑO EXPERIMENTAL', creditos: 2, semestre: 5, requisitos: ['MT403'], desbloquea: ['AS605'] },
  { codigo: 'AS405', nombre: 'GEOLOGIA', creditos: 3, semestre: 5, requisitos: ['AS466'], desbloquea: ['AS601'] },
  { codigo: 'UPC07', nombre: 'LENGUA EXTRANJERA CONVERSACION', creditos: 2, semestre: 5, requisitos: ['UPC06'] },
  { codigo: 'AS501', nombre: 'MECANICA DE FLUIDOS', creditos: 3, semestre: 5, requisitos: ['AS465'], desbloquea: ['AS604', 'AS603'] },
  { codigo: 'AS502', nombre: 'QUIMICA SANITARIA', creditos: 3, semestre: 5, requisitos: ['AS466'], desbloquea: ['AS701'] },
  { codigo: 'AS413', nombre: 'RESISTENCIA DE MATERIALES', creditos: 3, semestre: 5, requisitos: ['AS465'], desbloquea: ['AS602'] },
  { codigo: 'AS503', nombre: 'TOPOGRAFIA', creditos: 3, semestre: 5, desbloquea: ['AS603', 'AS702'] },

  // --- Semestre 6 ---
  { codigo: 'UPC08', nombre: 'ACTIVIDAD DEPORTIVA', creditos: 1, semestre: 6 },
  { codigo: 'AS602', nombre: 'CONCRETO', creditos: 3, semestre: 6, requisitos: ['AS413'] },
  { codigo: 'AS603', nombre: 'DISEÑO DE ACUEDUCTO', creditos: 3, semestre: 6, requisitos: ['AS501', 'AS503'], desbloquea: ['AS703', 'AS704'] },
  { codigo: 'AS604', nombre: 'HIDRAULICA', creditos: 3, semestre: 6, requisitos: ['AS501'], desbloquea: ['AS704'] },
  { codigo: 'AS605', nombre: 'METODOLOGIA DE LA INVESTIGACION II', creditos: 2, semestre: 6, requisitos: ['AS504', 'AS468'], desbloquea: ['AS805'] },
  { codigo: 'AS412', nombre: 'RECURSOS NATURALES', creditos: 3, semestre: 6, desbloquea: ['AS705', 'AS411'] },
  { codigo: 'AS601', nombre: 'SUELOS', creditos: 3, semestre: 6, requisitos: ['AS405'], desbloquea: ['AS801'] },

  // --- Semestre 7 ---
  { codigo: 'UPC09', nombre: 'ACTIVIDAD CULTURAL', creditos: 1, semestre: 7 },
  { codigo: 'AS703', nombre: 'DISEÑO DE ALCANTARILLADO', creditos: 3, semestre: 7, requisitos: ['AS603'], desbloquea: ['AS803'] },
  { codigo: 'AS702', nombre: 'GEOMATICA', creditos: 2, semestre: 7, requisitos: ['AS503'], desbloquea: ['AS802', 'AS426'] },
  { codigo: 'AS411', nombre: 'HIDROLOGIA', creditos: 3, semestre: 7, requisitos: ['MT403', 'AS412'], desbloquea: ['AS802'] },
  { codigo: 'AS705', nombre: 'LEGISLACION AMBIENTAL', creditos: 2, semestre: 7, requisitos: ['AS412'], desbloquea: ['AS806', 'AS804', 'AS902'] },
  { codigo: 'AS701', nombre: 'PROCESOS QUIMICOS Y BIOLOGICOS', creditos: 3, semestre: 7, requisitos: ['AS467', 'AS502'], desbloquea: ['AS803'] },
  { codigo: 'AS704', nombre: 'TRATAMIENTO DE AGUA POTABLE', creditos: 3, semestre: 7, requisitos: ['AS604', 'AS603'], desbloquea: ['AS903'] },

  // --- Semestre 8 ---
  { codigo: 'AS806', nombre: 'ECONOMIA AMBIENTAL', creditos: 2, semestre: 8, requisitos: ['AS705'], desbloquea: ['FC407'] },
  { codigo: 'AS804', nombre: 'EVALUACION DE IMPACTO AMBIENTAL', creditos: 3, semestre: 8, requisitos: ['AS705'], desbloquea: ['AS101'] },
  { codigo: 'AS802', nombre: 'MANEJO DE CUENCAS', creditos: 3, semestre: 8, requisitos: ['AS411', 'AS702'] },
  { codigo: 'AS805', nombre: 'PROYECTO DE INVESTIGACION', creditos: 2, semestre: 8, requisitos: ['AS605'], desbloquea: ['AS102'] },
  { codigo: 'AS803', nombre: 'TRATAMIENTO DE AGUAS RESIDUALES', creditos: 3, semestre: 8, requisitos: ['AS703', 'AS701'], desbloquea: ['AS903'] },
  { codigo: 'AS801', nombre: 'TRATAMIENTO DE RESIDUOS SOLIDOS', creditos: 3, semestre: 8, requisitos: ['AS601'] },

  // --- Semestre 9 ---
  { codigo: 'AS426', nombre: 'CONTROL DE CONTAMINACION ATMOSFERICA', creditos: 3, semestre: 9, requisitos: ['AS702'] },
  { codigo: 'AS903', nombre: 'COSTOS Y PRESUPUESTO', creditos: 2, semestre: 9, requisitos: ['AS704', 'AS803'] },
  { codigo: 'AS424', nombre: 'ELECTIVA IA', creditos: 0, semestre: 9 },
  { codigo: 'FC407', nombre: 'FORMULACION Y EVALU DE PROYEC EN INGENIERIA', creditos: 3, semestre: 9, requisitos: ['AS806'], desbloquea: ['AS462'] },
  { codigo: 'AS902', nombre: 'SEGURIDAD Y SALUD EN EL TRABAJO', creditos: 3, semestre: 9, requisitos: ['AS705'] },

  // --- Semestre 10 ---
  { codigo: 'AS462', nombre: 'COMUNIDAD Y GESTION EMPRESARIAL', creditos: 3, semestre: 10, requisitos: ['FC407'] },
  { codigo: 'AS425', nombre: 'ELECTIVA IB', creditos: 0, semestre: 10 },
  { codigo: 'AS428', nombre: 'ELECTIVA II', creditos: 0, semestre: 10 },
  { codigo: 'AS102', nombre: 'PROYECTO DE GRADO', creditos: 2, semestre: 10, requisitos: ['AS805'] },
  { codigo: 'AS101', nombre: 'SISTEMAS DE GESTION', creditos: 3, semestre: 10, requisitos: ['AS804'] }
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

