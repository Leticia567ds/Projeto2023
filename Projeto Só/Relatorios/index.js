var manutencao = document.querySelector(".myChartManutencao")
var veiculo = document.querySelector(".myChartVeiculos")


function relatorioManutencao() {
    var Manutencao = document.querySelector("#grafico-manutencao")
    manutencao.classList.remove('model')
    // operacao.classList.add('model')
    veiculo.classList.add('model')
    fetch(`http://localhost:3000/registrar/relatorio`)
        .then(response => response.json())
        .then(response => {
            //informações que aprecerão no gráfico
            let labels = [
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro'
            ];
            let datasets = [];
            let placaAtual = "";
            //adicionar cor na barra
            let color = [
                "#C5DFAA",
                "#D9BF77",
                "#205D67",
                "#639A67",
                "#D8EBB5",
                "#C1F39C",

            ];

            response.forEach(data => {
                if (placaAtual != data.placa) {
                    placaAtual = data.placa;
                    datasets.push(JSON.parse(`{"${placaAtual}" : [0,0,0,0,0,0,0,0,0,0,0,0]}`));
                    datasets[datasets.length - 1][placaAtual][data.mes - 1] = data.total;
                    console.log(datasets)
                } else {
                    datasets[datasets.length - 1][placaAtual][data.mes - 1] = data.total;
                }
            })



            datasets = datasets.map((data, i) => {
                return {
                    type: 'bar',
                    label: Object.keys(data)[0],
                    data: data[Object.keys(data)[0]],
                    borderColor: color[i],
                    borderWidth: 1,
                    backgroundColor: color[i],

                }
            })

            console.log(labels, datasets);

            new Chart(Manutencao, {
                type: 'bar',
                data: {
                    labels,
                    datasets,
                },
                options: {
                    borderJoinStyle: "bevel",
                    scales: {
                        y: {
                            beginAtZero: true
                        },
                        x: {
                            stacked: true
                        }
                    }
                }
            })
        })
}


function relatorioFrota() {
    var Frota = document.querySelector("#grafico-veiculo")
    // manutencao.classList.remove('model')
    // // operacao.classList.add('model')
    // veiculo.classList.add('model')

    new Chart(Frota, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Quantidade de carros e motos',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Tempo'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Valor'
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  }
   
})
}


