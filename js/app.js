let jogosAlugados = 1;

function exibirAlugueisConsole(){
    console.log(`A quantidade de jogos alugados é ${jogosAlugados}!`)
}


function alterarStatus(id){
    let banner = document.getElementById(`game-${id}`);
    let imagem = banner.querySelector('.dashboard__item__img');
    let botao = banner.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')){
        alert('Você tem certeza que deseja devolver o jogo?')
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++
    }

    exibirAlugueisConsole();
    
}

