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


function relatorioVeiculos() {
    veiculo.classList.remove('model')
    manutencao.classList.add('model')
    // operacao.classList.add('model')

    var ctxVeiculo = document.querySelector("#grafico-veiculo")
    fetch(`http://localhost:3000/frota`)
        .then(response => response.json())
        .then(response => {
            let veiculos = {
                placas: [],
                dispo: [],
                cor: []
            }

            let corFalsa = "#2E8B57";
            let corVerdadeira = '#ff4040'

            response.forEach(v => {
                veiculos.placas.push(v.placa);
                veiculos.dispo.push(1);
                if (v.uso) {
                    veiculos.cor.push(corVerdadeira)
                } else {
                    veiculos.cor.push(corFalsa)
                }

                console.log(veiculos.placas);
            })
            new Chart(ctxVeiculo, {
                type: 'pie',
                data: {
                    labels: veiculos.placas,
                    datasets: [{
                        label: 'Veiculos',
                        data: veiculos.dispo,
                        backgroundColor: veiculos.cor
                    }]
                },


                title: {
                    display: true,
                    text: 'Chart.js Pie Chart'

                },
                options: {
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                }
            });

        })
}