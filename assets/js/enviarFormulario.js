function enviarFormulario() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;

  var mensagemErro = document.getElementById('mensagemErro');

  if (nome === '' || email === '' || telefone === '') {
    mensagemErro.innerHTML = 'Preencha todos os campos.';
  } else {
    // Lógica para enviar o formulário
    mensagemErro.innerHTML = ''; // Limpar mensagens de erro
    alert('Formulário enviado!');
  }
}

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('mensagem').value = '';
  document.getElementById('mensagemErro').innerHTML = '';
}