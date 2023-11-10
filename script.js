function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 4) {
                //Bebê
                img.setAttribute('src', 'imagens/bebem.png')
            } else if (idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criancam.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (sex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                //Bebê
                img.setAttribute('src', 'imagens/bebef.png')
            } else if (idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criancaf.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemf.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Verificamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
