const dataInicio = new Date("2026-01-08"); // COLOQUE A DATA QUE VOCÊS COMEÇARAM

function atualizarTempo() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

  document.getElementById("tempo").innerHTML =
    `${dias} dias, ${horas} horas e ${minutos} minutos 💞`;
}

setInterval(atualizarTempo, 1000);