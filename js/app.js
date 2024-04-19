let listFriend = [];

function adicionar(){
    let friendName = document.getElementById('nome-amigo').value;
    if(friendName == ''){
        return alert('Digite um nome, por favor!');
        
    }

    if(listFriend.includes(friendName)){
        alert('Nome já adicionado!');
        return;
    }

    let include = document.getElementById('lista-amigos');
    friendName = friendName.toUpperCase();
    listFriend.push(friendName);

    if(friendName < 9999999999 & friendName > -999999){
        return alert('Só palavras são permitidas');

    }else{
        if(include.textContent == ''){
            include.textContent = friendName;

        }else{
            include.textContent += ', ' + friendName;
            
        }

    }
    atualizarLista();
    atualizarSorteio();
    cleanCamp();

}

function sortear(){
    if(listFriend.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    embaralhar(listFriend);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < listFriend.length; i++){
        if(i == listFriend.length - 1){
            sorteio.innerHTML += listFriend[i] + ' --> ' + listFriend[0] + '<br>';

        }else{
            sorteio.innerHTML += listFriend[i] + ' --> ' + listFriend[i + 1] + '<br>';
        }
    }
}

function reiniciar(){
    listFriend = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';

}

function excluirAmigo(index) {
    if(confirm(`Tem certeza que deseja excluir este nome da lista?`)){
        listFriend.splice(index, 1);
        atualizarLista();
        atualizarSorteio();
    }else{
        return;
    }
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let include = document.getElementById('lista-amigos');
    include.innerHTML = '';


    for (let i = 0; i < listFriend.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listFriend[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {excluirAmigo(i);});


        // Adiciona o parágrafo à lista
        include.appendChild(paragrafo);
    }
}

function cleanCamp(){
    document.getElementById('nome-amigo').value = '';

}

function embaralhar(list) {
    for (let indice = list.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [list[indice - 1], list[indiceAleatorio]] = [list[indiceAleatorio], list[indice - 1]];
    }
}