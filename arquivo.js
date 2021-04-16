'use strict';

const pesquisarNome = async() => {
    const nome = document.getElementById('campoNome').value;
    const url = `https://rickandmortyapi.com/api/character/?name=rick&status=alive${nome}`;
    const dados = await fetch(url);
    const status = await dados.query();
    const genero = await dados.query();
}


document.getElementById('campoNome').addEventListener('focusout', pesquisarNome);

document.getElementById('campoNome').addEventListener('focusout', pesquisarNome);

document.getElementById('campoNome').addEventListener('focusout', pesquisarNome);