'use strict';

const pesquisarNome = () => {
    const nome = document.getElementById('nome').value;
    const url = `https://rickandmortyapi.com/api/character`
}

document.getElementById('nome').addEventListener('focusout', pesquisarNome);