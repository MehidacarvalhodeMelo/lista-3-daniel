function gerarTabuada() {
    var numero = document.getElementById("numero").value;
    var mensagem_final = "";
    for (let i = 0; i <= 10; i++) {
        var multiplicacao = numero * i;
        var mensagem_multiplicacao = numero + "X" + i + " = " + multiplicacao + "\n";
        mensagem_final = mensagem_final + mensagem_multiplicacao;
    }
    alert(mensagem_final);
}