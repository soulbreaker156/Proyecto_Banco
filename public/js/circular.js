document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('circular').getContext('2d');

  const data = {
    labels: ['Ventas', 'Gastos', 'Ahorro'],
    datasets: [{
      label: 'Distribución financiera',
      data: [45, 30, 25],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 10
    }]
  };

  const config = {
    type: 'pie', 
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Distribución Financiera Mensual'
        }
      }
    }
  };

  new Chart(ctx, config);
});