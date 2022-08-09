/*
A loja de carros será nosso desafio final. Na aula anterior, você fez a parte
do cadastro dos carros. Agora nós vamos começar a deixar ele com cara de
projeto mesmo.
Crie um novo repositório na sua conta do GitHub, com o nome do seu projeto.
Na hora de criar, o GitHub te dá a opção de criar o repositório com um
README. Use essa opção.
Após criar o repositório, clone ele na sua máquina.
Crie uma nova branch chamada `challenge-30`, e copie tudo o que foi feito no
desafio da aula anterior para esse novo repositório, nessa branch
`challenge-30`.
Adicione um arquivo na raiz desse novo repositório chamado `.gitignore`.
O conteúdeo desse arquivo deve ser somente as duas linhas abaixo:
node_modules
npm-debug.log
Faça as melhorias que você achar que são necessárias no seu código, removendo
duplicações, deixando-o o mais legível possível, e então suba essa alteração
para o repositório do seu projeto.
Envie um pull request da branch `challenge-30` para a `master` e cole aqui
nesse arquivo, dentro do `console.log`, o link para o pull request no seu
projeto.
*/

(function (doc, win, DOM) {
  "use strict";

  function AppCarRegister() {
    var $imagemInput = document.querySelector('[data-js="imagem"]');
    var $modeloInput = document.querySelector('[data-js="modelo"]');
    var $anoInput = document.querySelector('[data-js="ano"]');
    var $placaInput = document.querySelector('[data-js="placa"]');
    var $corInput = document.querySelector('[data-js="cor"]');

    var inputs = [
      $imagemInput,
      $modeloInput,
      $anoInput,
      $placaInput,
      $corInput,
    ];

    var $enviarButton = document.querySelector('[data-js="enviar"]');

    var $tabelaTbody = document.querySelector('[data-js="tabela"]');

    function handleSubmit(e) {
      e.preventDefault();
      var newTr = document.createElement("tr");
      var newTd;
      var newImg;
      forEachInput(inputs, newTr, newTd, newImg);
    }

    function forEachInput(inputs, newTr, newTd, newImg) {
      inputs.forEach((input) => {
        newTd = document.createElement("td");
        newImg = document.createElement("img");
        inputValueIsImage(input, newImg, newTd);
        input.value = "";
        newTr.appendChild(newTd);
      });
      $tabelaTbody.appendChild(newTr);
    }

    function inputValueIsImage(input, newImg, newTd) {
      if (input.getAttributeNode("data-js").nodeValue === "imagem") {
        newImg.src = input.value;
        newTd.appendChild(newImg);
      } else newTd.innerHTML = input.value;
    }

    $enviarButton.addEventListener("click", handleSubmit);
  }

  //   var ajax = new XMLHttpRequest();
  //   ajax.open("get", "./desafio29.json");
  //   ajax.send();
  //   console.log(ajax);

  AppCarRegister();
})(document, window, window.DOM);

console.log("Link do pull request do seu projeto");
