function testar(evento) {
    if (evento.key == "Enter") {
      let entrada = document.querySelector("#entrada").value;
      entrada = entrada;
      let nomes = entrada.split(" ");
      exibirQuantidade(nomes);
    }
  }
  
  function exibirQuantidade(nomes){
    // pegando o elemento <div id="saida">
    let saida = document.querySelector("#saida");
    // criando o elemento <p></p>
    let elemento = document.createElement("p");
    // colocando conteúdo no elemento <p>conteúdo</p>
    elemento.textContent = `${nomes.length} nomes`;
    // adicionando o elemento <p> como filho do elemento <div id="saida">
    saida.appendChild(elemento);}
