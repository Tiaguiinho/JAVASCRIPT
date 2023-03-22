function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = x // teste do site em varios horários
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>=0 && hora < 12){
        //BOM DIA!
        img.src = 'manhasGIMP.jpg'
        document.body.style.background = '#BCBCBC'
    }else if (hora>=12 && hora < 18){
        //BOA TARDE!
        img.src = 'tardeGIMP.jpg'
        document.body.style.background = '#FDAD34'
    }else{
        //BOA NOITE!
        img.src = 'noiteGIMP.jpeg'
        document.body.style.background = '#002045'
    }

}