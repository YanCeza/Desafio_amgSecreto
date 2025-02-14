let amigos = [];

function adicionarAmigo() {
    let campo = document.querySelector("input");

    if(campo.value == "") {
        alert("Este campo é obrigatório, por favor adicione um nome");
    } else {

        amigos.push(campo.value);
        console.log(amigos);
        
        limparCampo();

        pularLinha();
        

    }
    
}

function pularLinha() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(var i = 0; i < amigos.length; i++) {
        let a = document.createElement("li");
        a.textContent = `${amigos[i]} está na lista.`;
        lista.appendChild(a);
    }
}



function limparCampo() {
    campo = document.querySelector("input");
    campo.value = "";
}

function sortearAmigo() {
    if ((amigos == "") || ((campo.value == "") && (amigos == ""))) {
        alert("Por favor, adicione um nome para ser sorteado.");
    }
        
    const amigoEscolhido = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(amigoEscolhido); //Teste para o sorteio de nomes

    let exibirSortudo = document.getElementById("resultado");
    exibirSortudo.innerHTML = `O amigo sorteado foi ${amigoEscolhido}. Parabens!!!`;

}