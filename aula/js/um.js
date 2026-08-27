function testar(evento){
    if(evento.key == "Enter"){
        let entrada = document.querySelector("#entrada").value;
        document.querySelector("#saida").textContent = entrada
    }
    
}