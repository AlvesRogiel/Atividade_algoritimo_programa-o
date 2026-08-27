function testar(evento) {
    if (evento.key == "Enter") {
      let entrada = document.querySelector("#entrada").value;
      entrada = entrada.toUpperCase();
      let nomes = entrada.split(" ");
      let i = 0;
      while( i < nomes.length){
        adicionarElemento(nomes[i]);
        i = i + 1;
      }
    }
  }
  
  function adicionarElemento(nome){
    // pegando o elemento <div id="saida">
    let saida = document.querySelector("#saida");
    // criando o elemento <p></p>
    let elemento = document.createElement("p");
    // colocando conteúdo no elemento <p>conteúdo</p>
    elemento.textContent = nome;
    // adicionando o elemento <p> como filho do elemento <div id="saida">
    saida.appendChild(elemento);
  }