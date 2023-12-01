// Função para inserir um novo fornecedor na tabela
function inserirFornecedor() {
    // Obtém os valores dos campos do formulário
    const nome = prompt("Digite o nome do fornecedor:");
    const localEntrega = prompt("Digite o local de entrega:");
    const telefone = prompt("Digite o número de telefone:");
    const valorRefeicao = prompt("Digite o valor por refeição:");

    // Verifica se algum campo está vazio
    if (!nome || !localEntrega || !telefone || !valorRefeicao) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria uma nova linha na tabela
    const tabela = document.getElementById("fornecedor-table").getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Adiciona as células com os valores
    const celulaNome = novaLinha.insertCell(0);
    celulaNome.textContent = nome;

    const celulaLocalEntrega = novaLinha.insertCell(1);
    celulaLocalEntrega.textContent = localEntrega;

    const celulaTelefone = novaLinha.insertCell(2);
    celulaTelefone.textContent = telefone;

    const celulaValorRefeicao = novaLinha.insertCell(3);
    celulaValorRefeicao.textContent = valorRefeicao;

    // Limpa os campos do formulário
    limparCampos();
}

// Função para limpar os campos do formulário após a inserção
function limparCampos() {
    document.getElementById("fornecedor-table").reset();
}
