function teste(){
    
   
    var data = new Date() 
    var anoatual = data.getFullYear()
    var ano = document.getElementById('inascimento')
    var msg = document.querySelector('div#msg')
    
          
    if (ano.value.length == 0 || Number(ano.value) > anoatual){
        window.alert(`[ERROR] Verifique os dados e tente novamente!`)
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = anoatual - ano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
                

        if (sexo[0].checked){
            genero = 'Mulher'
        } else{
            genero = 'Homem'
        }
             
        
        if (genero =='Homem'){            
            if (idade<=2){
                var estado = 'um bebê'
                img.src ='imagens/homem2menos.png'
            } else if (idade<=10){
                var estado = 'um menino'
                img.src = 'imagens/homem10menos.png'
            } else if (idade<=20){
                var estado = 'um garoto'
                img.src = 'imagens/homem25menos.png'
            } else if (idade<=50){
                var estado = 'um homem'
                img.src= 'imagens/homem25mais.png'
            } else {
                var estado = 'um senhor'
                img.src = 'imagens/homem60mais.png'
            } 

        } else if (idade<=2){
            var estado = 'uma bebê'
            img.setAttribute('src','imagens/mulher2menos.png')
        } else if (idade<=10){
            var estado = 'uma menina'
            img.setAttribute('src','imagens/mulher10menos.png')
        } else if (idade<=20){
            var estado = 'uma garota'
            img.setAttribute('src','imagens/mulher25menos.png')
        } else if (idade<=50){
            var estado = 'uma mulher'
            img.setAttribute('src','imagens/mulher25mais.png')
        } else {
            var estado = 'uma senhora'
            img.setAttribute('src','imagens/mulher60mais.png')
        } 
        
    }
    msg.innerHTML = `Detectamos que é ${estado} de ${idade} anos.`
    msg.appendChild(img)
       
}
        
    
            
    

    

    


