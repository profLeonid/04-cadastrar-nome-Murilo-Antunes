'use strict'
const btNome = document.getElementById('nome')
const saida = document.getElementById('saida')

const salvarNome =  function(){
    const p = document.createElement('p')
    p.textContent = btNome.value

    saida.appendChild(p)
}