// Filtrado de servicios en el portafolio
const services = document.querySelectorAll('.service');
services.forEach(service => {
  service.addEventListener('click', () => {
    // Resalta el servicio seleccionado
    services.forEach(s => {
      s.classList.remove('selected');
    });
    service.classList.add('selected');
  });
});
