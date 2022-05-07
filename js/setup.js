
/*
    Unico codigo que executa sem ser chamado pelo HTML
*/
let txtInput = null;
let txtOuput = null;

/*
    Carregar o componente input na variavel e definir o foco
    Evento vinculado ao "onLoad" do elemento "body"
*/
function iniciarTela() {
    console.log('pagina Carregada');
    txtInput = document.getElementById("digite");
    txtInput.focus();

    txtOuput = document.getElementById("criptografado");
}


//Rotina para criptografar texto
function criptografar(textEntrada) {

    if (textEntrada !== null) {
        textRetorno = textEntrada
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll('o', 'ober')
            .replaceAll('u', 'ufat')
            ;
        return textRetorno
    }
}

//Rotina para descriptografar texto
function descriptografar(textEntrada) {

    if (textEntrada !== null) {
        textRetorno = textEntrada
            .replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ai', 'a')
            .replaceAll('ober', 'o')
            .replaceAll('ufat', 'u')
            ;
        return textRetorno
    }
}

//Evento do "onClick" do botão criptografar
function btnCriptografar() {

    entrada = txtInput.value;

    retorno = criptografar(entrada);

    txtOuput.value = retorno;

    document.getElementById("resultado").style.display = "initial";

    txtInput.value = '';
}

//Evento do "onClick" do botão descriptografar
function btnDescriptografar() {
    console.log('Clicado no btnDescriptografar');

    entrada = txtInput.value;
    console.log('Cripto=', entrada);

    retorno = descriptografar(entrada);
    console.log('Normal=', retorno);

    txtOuput.value = retorno;

    document.getElementById("resultado").style.display = "initial";

    txtInput.value = '';

}

//Evento do "onClick" do botão copiar
function btnCopiar() {
        var conteudo = document.getElementById('criptografado');
        
        conteudo.select();
        document.execCommand('copy');
    
        alert("Copiado!");
}

//Rotina para validar entrada de dados, não permitindo letras Maiúsculas e nem Acentos
function validaTextoInput(){
    const str = document.getElementById("digite").value;  
    const subst = '';
    const regex = /[^((a-z)|(0-9) | (''))]+/g;
    const result = str.replace(regex, subst);
    
    document.getElementById("digite").value = result;
  }