'use strict'
const btNome = document.getElementById('nome')
const saida = document.getElementById('saida')
const linha = document.getElementById('linha')
const p = document.createElement('p')
const salvarNome =  function(){
    p.textContent = btNome.value

    saida.appendChild(linha)
    linha.appendChild(p)
}