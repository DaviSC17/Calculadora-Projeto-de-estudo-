const Button = document.querySelector("#button");

Button.addEventListener("click", function (event) {
  event.preventDefault();
  const Altura = document.getElementById("Altura").value;
  const Peso = document.getElementById("peso").value;
  const Text = document.querySelector("#text");
  const Resultado = (Peso / (Altura * Altura)).toFixed(2);
  const Imc = document.querySelector("#Imc");

  if (Resultado < 16) {
    Imc.style.color = "#deb500";
    Text.innerHTML = "Cuidado! você está com Magreza grave!";
    Text.style.color = "#deb500";
    Imc.innerHTML = `${Resultado}`;
  } else if (Resultado > 16 && Resultado < 17) {
    Imc.style.color = "#ffe84f";
    Text.innerHTML = "Cuidado! você está com Magreza moderada!";
    Text.style.color = "#ffe84f";
    Imc.innerHTML = `${Resultado}`;
  } else if (Resultado > 17 && Resultado < 18.5) {
    Imc.style.color = "#fff2a1";
    Text.innerHTML = "Cuidado! você está com Magreza leve!";
    Text.style.color = "#fff2a1";
    Imc.innerHTML = `${Resultado}`;
  } else if (Resultado > 18.5 && Resultado < 25) {
    Imc.style.color = "green";
    Text.innerHTML = "Parábens você está Saudável!";
    Text.style.color = "green";
    Imc.innerHTML = `${Resultado}`;
  } else if (Resultado > 25 && Resultado < 30) {
    Imc.style.color = "#ff7a7a";
    Text.innerHTML = "Cuidado! você está com Sobrepeso!";
    Text.style.color = "#ff7a7a";
    Imc.innerHTML = `${Resultado}`;
  } else if (Resultado > 30 && Resultado < 35) {
    Imc.style.color = "#fc4949";
    Text.innerHTML = "Cuidado! você está com Obesidade Grau I!";
    Text.style.color = "#fc4949";
    Imc.innerHTML = `${Resultado}`;
  } else if (Resultado > 35 && Resultado < 40) {
    Imc.style.color = "#ff0000";
    Text.innerHTML = "Cuidado! você está com Obesidade severa!";
    Text.style.color = "#ff0000";
    Imc.innerHTML = `${Resultado}`;
  } else if (Resultado > 40) {
    Imc.style.color = "#4d0000";
    Text.innerHTML = "Cuidado! você está com Obesidade mórbida!";
    Text.style.color = "#4d0000";
    Imc.innerHTML = `${Resultado}`;
  } else {
    Imc.innerHTML = "0";
    Text.innerHTML = "Digite um número válido!";
    Imc.style.color = "whitesmoke";
    Text.style.color = "whitesmoke";
  }

  document.querySelector("#Result").classList.remove("Hidden");
  document.querySelector("#Result").classList.add("Result");
  document.querySelector("#info").classList.remove("Hidden");
  document.querySelector("#info").classList.add("Info");
});
