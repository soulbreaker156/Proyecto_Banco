document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('lineal').getContext('2d');
  const grafica = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [{
        label: 'Ventas (Q)',
        data: [1200, 1500, 1800, 1300, 1600, 1900],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Reporte Semestral de Ventas'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
