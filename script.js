// Fecha de inicio con tu novia (2 de septiembre de 2022)
const fechaInicio = new Date('2023-09-02');

// Función para actualizar el contador
function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const segundosTotales = Math.floor(diferencia / 1000);
  const minutosTotales = Math.floor(segundosTotales / 60);
  const horasTotales = Math.floor(minutosTotales / 60);
  const diasTotales = Math.floor(horasTotales / 24);

  const años = Math.floor(diasTotales / 365);
  const meses = Math.floor((diasTotales % 365) / 30);
  const dias = diasTotales % 30;
  const horas = horasTotales % 24;
  const minutos = minutosTotales % 60;
  const segundos = segundosTotales % 60;

  const tiempoTranscurrido = `${años} años, ${meses} meses, ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;

  document.getElementById('contador').innerText = `${tiempoTranscurrido}`;
}

// Actualizar contador cada segundo
actualizarContador();
setInterval(actualizarContador, 1000);