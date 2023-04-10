const setaFechada = document.getElementById('seta1')
const setaAberta = document.getElementById('seta-aberta1')
const sobre1 = document.getElementById ('sobre1')
const setaFechada2 = document.getElementById('seta2')
const setaAberta2= document.getElementById('seta-aberta2')
const sobre2 = document.getElementById('sobre2')

setaFechada.addEventListener('click', function() {

setaFechada.style.display='none'
setaAberta.style.display ='inline'
sobre1.style.display = 'block'

})

setaAberta.addEventListener('click', function(){

setaAberta.style.display='none'
setaFechada.style.display ='inline-block'
sobre1.style.display ='none'
})


setaFechada2.addEventListener('click', function(){

setaFechada2.style.display ='none'
setaAberta2.style.display ='inline-block'
sobre2.style.display ='block'

})

setaAberta2.addEventListener('click', function(){

setaAberta2.style.display =' none'
setaFechada2.style.display =' inline'
sobre2.style.display ='none'

})
