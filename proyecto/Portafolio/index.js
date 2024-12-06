

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




