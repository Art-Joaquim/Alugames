let fichas = 3;

function alterarStatus(id){
    let game = document.getElementById(`game-${id}`);
    let itemImage = game.querySelector(".dashboard__item__img");
    let itemBotton = game.querySelector(".dashboard__item__button");
    
    if(itemImage.classList.contains("dashboard__item__img--rented")){
        itemImage.classList.remove("dashboard__item__img--rented");
        itemBotton.classList.remove("dashboard__item__button--return");
        itemBotton.innerHTML = "Alugar";
        fichas++;
    } else {
        if(fichas >= 1){
            itemImage.classList.add("dashboard__item__img--rented");
            itemBotton.classList.add("dashboard__item__button--return");
            itemBotton.innerHTML = "Devolver";
            fichas--;
        } else {
            alert("você já alugou 3 jogos, devolva pelo menos 1 para poder alugar outro jogo.");
            return;
        }
    }

    atualizarTexto();
}

function atualizarTexto() {
    document.getElementById("fichas").innerHTML = `Fichas de aluguel disponiveis: ${fichas}`;
}