let mediacurso = document.querySelector('#mediafac')
let v1 = document.querySelector('#v1txt')
let vt = document.querySelector('#vttxt')
let v2 = document.querySelector('#v2txt')
let media
let resta
let result = document.querySelector('#res')
let situacao = document.querySelector('#situacao')

function continuar() {
    if (mediacurso.value == '') {
        window.alert('Erro: Insira a média do seu curso para prosseguir!')
    } else {
        mediafacul.style.display = 'none'
        recebedora.style.display = 'block'
    }
    
}

function verificar() {
    media = (Number(v1.value) + Number(vt.value) + Number(v2.value))/ 3
    if (v2.value == 0) {
        resta = mediacurso.value*3 - (Number(v1.value) + Number(vt.value)) 
    } else if (vt.value == 0) {
        resta = mediacurso.value*3 - (Number(v1.value) + Number(v2.value)) 
    } else if (v1.value == 0) {
        resta = mediacurso.value*3 - (Number(vt.value) + Number(v2.value)) 
    }
    
    if(v1.value == '' || vt.value == '' || v2.value == '') {
        window.alert('Erro: Preencha os campos solicitados!')
    } else if (media >= mediacurso.value) {
        recebedora.style.display = 'none'
        result.style.display = 'block'
        situacao.innerHTML = `Aprovado <br> Sua média atual é: ${media.toFixed(1)}` 
    } else {
        recebedora.style.display = 'none'
        result.style.display = 'block'
        situacao.innerHTML = `Reprovado <br> Faltam ${resta.toFixed(1)} pontos para a aprovação.` 
    }               
    }

    function refazer() {
        result.style.display = 'none'
        mediafacul.style.display = 'block'
        v1.value = ''
        vt.value = ''
        v2.value = ''
    }

