// Função para adicionar uma nova linha ao cardápio
function insertMenu() {
    // Obtém os valores dos campos do formulário
    const pratoPrincipal = prompt("Digite o nome do prato principal:");
    const acompanhamento = prompt("Digite o nome do acompanhamento:");
    const tipoRefeicao = prompt("Digite o tipo de refeição:");
    const localObra = prompt("Digite o local da obra:");
    const dataRefeicao = prompt("Digite a data da refeição:");
    const fornecedor = prompt("Digite o nome do fornecedor:");

    // Verifica se algum campo está vazio
    if (!pratoPrincipal || !acompanhamento || !tipoRefeicao || !localObra || !dataRefeicao || !fornecedor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria uma nova linha na tabela
    const tabela = document.getElementById("menu-table").getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    // Adiciona as células com os valores
    const celulaPratoPrincipal = novaLinha.insertCell(0);
    celulaPratoPrincipal.textContent = pratoPrincipal;

    const celulaAcompanhamento = novaLinha.insertCell(1);
    celulaAcompanhamento.textContent = acompanhamento;

    const celulaTipoRefeicao = novaLinha.insertCell(2);
    celulaTipoRefeicao.textContent = tipoRefeicao;

    const celulaLocalObra = novaLinha.insertCell(3);
    celulaLocalObra.textContent = localObra;

    const celulaDataRefeicao = novaLinha.insertCell(4);
    celulaDataRefeicao.textContent = dataRefeicao;

    const celulaFornecedor = novaLinha.insertCell(5);
    celulaFornecedor.textContent = fornecedor;

    // Limpa os campos do formulário
    clearFields();
}

// Função para limpar os campos do formulário após a inserção
function clearFields() {
    document.getElementById("menu-table").reset();
}
