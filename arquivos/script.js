const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;
  const mensagemErro = document.getElementById("mensagemErro");

  if (usuario === "ademir" && senha === "Ade|mir_D0Xaquinh@2026") {
    window.location.replace("arquivos/parabens.html");
  } else {
    window.location.replace("arquivos/tentenovamente.html");
    mensagemErro.textContent = "Usuário ou senha incorretos. Tente novamente";
  }
});
