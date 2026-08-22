function adicionar(){
    let entrada = document.querySelector("#nome").value;
    let saida = document.querySelector("#saida");

    //criar o elemento <li>
    let li = document.createElement("li");
    // colocando conteúdo no elemento <li>
    li.textContent = entrada;
    // adiciona o elemento <li> no elemento <ol>
    saida.appendChild(li);
}
