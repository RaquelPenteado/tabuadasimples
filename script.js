function GerarNumero() {
    var numero = document.getElementById('caixa1')
    var res = document.getElementById('res')
    

    numero = Number(numero.value)
   
    
    if (!numero ){
        window.alert('[ERRO] Não deixe os campos em branco!')
    } else { 
        res.innerHTML = ''
        var c = 1
        while (c <= 10){
        
        res.innerHTML += `${numero} X  ${c}  =  ${numero*c}<br>`
        c=c+1
        }
    }


}