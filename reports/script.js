// Função para adicionar uma nova linha ao relatório
function adicionarRelatorio(registro, nome, proximaRefeicao, tipoRefeicao, marcouHoje, comeuHoje) {
    // Obtém a referência da tabela
    const tabela = document.querySelector('.tabela table tbody');

    // Cria uma nova linha
    const novaLinha = tabela.insertRow();

    // Adiciona as células com os valores
    const celulaRegistro = novaLinha.insertCell(0);
    celulaRegistro.textContent = registro;

    const celulaNome = novaLinha.insertCell(1);
    celulaNome.textContent = nome;

    const celulaProximaRefeicao = novaLinha.insertCell(2);
    celulaProximaRefeicao.textContent = proximaRefeicao;

    const celulaTipoRefeicao = novaLinha.insertCell(3);
    celulaTipoRefeicao.textContent = tipoRefeicao;

    const celulaMarcouHoje = novaLinha.insertCell(4);
    const paragrafoMarcouHoje = document.createElement('p');
    paragrafoMarcouHoje.textContent = marcouHoje ? 'Sim' : 'Não';
    celulaMarcouHoje.appendChild(paragrafoMarcouHoje);

    const celulaComeuHoje = novaLinha.insertCell(5);
    const paragrafoComeuHoje = document.createElement('p');
    paragrafoComeuHoje.textContent = comeuHoje ? 'Sim' : 'Não';
    celulaComeuHoje.appendChild(paragrafoComeuHoje);
}

// Exemplo de chamadas da função para adicionar dados ao relatório
adicionarRelatorio(987654, 'Luiz Oliveira', '15/12/2023', 'Almoço, Jantar', true, false);
adicionarRelatorio(876543, 'Gabriela Silva', '17/12/2023', 'Café, Jantar', false, false);
adicionarRelatorio(765432, 'Marcos Pereira', '14/12/2023', 'Café, Almoço, Jantar', true, true);
adicionarRelatorio(654321, 'Isabel Santos', '12/12/2023', 'Almoço', false, false);
adicionarRelatorio(543210, 'Ricardo Costa', '12/12/2023', 'Jantar', false, false);
