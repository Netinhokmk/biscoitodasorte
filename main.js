const frasesMotivacionais = [
     "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
     "Acredite em si mesmo e tudo será possível.",
     "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
     "A persistência é o caminho do êxito.",
     "Você é capaz de mais do que imagina.",
     "Quanto maior a dificuldade, maior será a glória.",
     "Nunca é tarde demais para ser aquilo que sempre desejou ser.",
     "Acredite nos seus sonhos e lute por eles.",
     "O segredo do sucesso é a constância no objetivo.",
     "Lembre-se: você não veio até aqui só para chegar até aqui.",
];

btnOpen.addEventListener('click', function( event ){
     document.querySelector('.screen1').classList.add('hide')
     document.querySelector('.screen2').classList.remove('hide')
     const indice = Math.floor(Math.random() * frasesMotivacionais.length)
     document.querySelector('.screen2 p').innerText = `${frasesMotivacionais[indice]}`
})

btnReset.addEventListener('click', function( event ){
     document.querySelector('.screen1').classList.remove('hide')
     document.querySelector('.screen2').classList.add('hide')
})
