var numeroSecr;
var chance = 1;

function Iniciar() {
  chance = 1;
  var elmentoChances = document.getElementById("chances");
  elmentoChances.innerHTML = "(4 chances)";
  var elementoResultado = document.getElementById("resultado1");
  elementoResultado.innerHTML = " ";
  elementoResultado = document.getElementById("resultado2");
  elementoResultado.innerHTML = " ";

  var numeroSecreto = parseInt(Math.random() * 11);
  console.log(numeroSecreto);
  numeroSecr = numeroSecreto;

  document.getElementById("iniciarJogo").disabled = true;
  document.getElementById("valor").disabled = false;
  document.getElementById("chutar").disabled = false;
}

function Chutar() {
  var elementoResultado = document.getElementById("resultado1");
  var elmentoChances = document.getElementById("chances");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute < 0 || chute > 10) {
    elementoResultado = document.getElementById("resultado1");
    elementoResultado.innerHTML = "Apenas números entre 0 e 10!!!";
    elementoResultado = document.getElementById("resultado2");
    elementoResultado.innerHTML = " ";
  } else {
    if (chute == numeroSecr) {
      elementoResultado.innerHTML =
        "<img src='https://acertou.com.br/assets/images/logo.png'>";
      elementoResultado = document.getElementById("resultado2");
      elementoResultado.innerHTML = " ";
      document.getElementById("iniciarJogo").disabled = false;
      document.getElementById("valor").disabled = true;
      document.getElementById("chutar").disabled = true;
    } else {
      chance++;
      if (chance == 2) {
        elementoResultado.innerHTML =
          "<img src='https://campanhas.eurofarma.com.br/pneumo/public/images/ico-errou.png'>";
        elmentoChances.innerHTML = "(3 chances)";
        if (chute < numeroSecr) {
          elementoResultado = document.getElementById("resultado2");
          elementoResultado.innerHTML = "O número correto é maior que " + chute;
        } else {
          elementoResultado = document.getElementById("resultado2");
          elementoResultado.innerHTML = "O número correto é menor que " + chute;
        }
      } //////////////////////////////////////
      else if (chance == 3) {
        elementoResultado.innerHTML =
          "<img src='https://campanhas.eurofarma.com.br/pneumo/public/images/ico-errou.png'>";
        elmentoChances.innerHTML = "(2 chances)";
        if (chute < numeroSecr) {
          elementoResultado = document.getElementById("resultado2");
          elementoResultado.innerHTML = "O número correto é maior que " + chute;
        } else {
          elementoResultado = document.getElementById("resultado2");
          elementoResultado.innerHTML = "O número correto é menor que " + chute;
        }
      } ///////////////
      else if (chance == 4) {
        elementoResultado.innerHTML =
          "<img src='https://campanhas.eurofarma.com.br/pneumo/public/images/ico-errou.png'>";
        elmentoChances.innerHTML = "(ultima chance)";
        if (chute < numeroSecr) {
          elementoResultado = document.getElementById("resultado2");
          elementoResultado.innerHTML = "O número correto é maior que " + chute;
        } else {
          elementoResultado = document.getElementById("resultado2");
          elementoResultado.innerHTML = "O número correto é menor que " + chute;
        }
      }
    } ///////////////////
    if (chance == 5) {
      elementoResultado.innerHTML =
        "Suas chances acabaram, inicie o jogo novamente!";
      elementoResultado = document.getElementById("resultado2");
      elementoResultado.innerHTML = "Número correto: " + numeroSecr;
      document.getElementById("iniciarJogo").disabled = false;
      document.getElementById("valor").disabled = true;
      document.getElementById("chutar").disabled = true;
    }
  }
}