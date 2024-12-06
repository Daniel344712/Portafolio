

document.querySelectorAll('dotlottie-player').forEach(player => {
  player.addEventListener('click', () => {
    const filePath = player.getAttribute('data-file');
    // Inicia la descarga del archivo PDF
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});


function toggleAllSections() {
  const sections = ['unitySeccion', 'phaserSeccion', 'hospitalSeccion'];
  const button = document.querySelector('#trabajos-personales button');

  let seccionesOcultas = sections.every(id => document.getElementById(id).style.display === 'none');

  sections.forEach(id => {
    document.getElementById(id).style.display = seccionesOcultas ? 'block' : 'none';
  });

  button.textContent = seccionesOcultas ? 'Ocultar Trabajos' : 'Mostrar Trabajos';
}

