const form = document.getElementById('form-contato');
const tableCorpo = document.getElementById('corpo-tabela');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nomeContato = document.getElementById('nome-contato').value;
    const telefoneContato = document.getElementById('telefone-contato').value;

    // Verificação: Se o contato já está na lista, informar ao usuário a seguinte mensagem
    const contatos = tableCorpo.getElementsByTagName('td');
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].textContent === nomeContato) {
            alert('Já existe um contato com este nome cadastrado. Favor alterar o nome para poder prosseguir.');
            // Reseta o campo Nome
            document.getElementById('nome-contato').value = "";
            return;
        }
    }

    const novaLinha = `
    <tr>
      <td>${nomeContato}</td>
      <td>${telefoneContato}</td>
    </tr>
  `;

    tableCorpo.innerHTML += novaLinha;

    form.reset();
});
