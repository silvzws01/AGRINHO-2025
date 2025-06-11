// Exemplo simples de JS
console.log("Campo News carregado!");
// Abrir o modal de login
function navegar(secao) {
  if (secao === 'login') {
    document.getElementById("login-modal").style.display = "block";
  } else {
    alert(`Você clicou em ${secao.charAt(0).toUpperCase() + secao.slice(1)}!`);
  }
}

// Fechar o modal
function fecharModal() {
  document.getElementById("login-modal").style.display = "none";
}

// Simular envio do formulário
function login(event) {
  event.preventDefault(); // impede recarregamento
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  
  // Aqui você pode substituir com validação real
  if (email && senha) {
    alert(`Bem-vindo, ${email}!`);
    fecharModal();
  } else {
    alert("Preencha todos os campos!");
  }
}