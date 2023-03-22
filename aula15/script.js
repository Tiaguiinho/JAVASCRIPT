 function verificarsex(){
    var data = new Date() //PUXANDO DATA ATUAL
    var ano = data.getFullYear() //23=2023
    var fAno = window.document.getElementById('txtano') 
    var res = window.document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value.length > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value) //CALCULANDO IDADE SEM MESES
        var img = document.createElement('img') //NO HTML SERIA: <img id ='foto' !!!!!!!AS IMAGENS NECESSITAM CORREÇÃO!!!!!!!!!>
        img.setAttribute('id', 'foto')
        var genero = ''
//TESTE res.innerHTML = `Idade calculada: ${idade}` //TESTE
        if(fsex[0].checked){  //CHECANDO QUAL SEXO ESCOLHIDO
            genero = 'Homem'
            if(idade >=0 && idade < 11){ 
                //CRIANÇA
                img.setAttribute('src', 'criança-M.jpg')
            } else if (idade < 21){ 
                //JOVEM
                img.setAttribute('src', 'jovem20-M.jpg')       
            } else if (idade < 50){ 
                //ADULTO
                img.setAttribute('src', 'adulto-M.jpg')
            } else { 
                //IDOSO
                img.setAttribute('src', 'idoso-M.jpeg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 11){ 
                //CRIANÇA
                img.setAttribute('src', 'criança-F.jpg')
            } else if (idade >=11 && idade < 21){ 
                //JOVEM
                img.setAttribute('src', 'jovem20-F.jpg')       
            } else if (idade < 50){ 
                //ADULTO
                img.setAttribute('src', 'adulto-F.jpg')
            } else { 
                //IDOSA
                img.setAttribute('src', 'idoso-F.jpg')
            }
        }
        res.style.textAlign = 'center' //usando JS pra fazer estilo CSS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
 }    