function calcular() {

    var idades = [];
    for (let i = 1; i <= 8; i++) {
        var idQueSeraPesquisado = "pessoa" + i;
        var idade = document.getElementById(idQueSeraPesquisado).value;
        idades.push(idade);
    }

    var quantidadeDePessoasFaixaEtaria1 = 0;
    var quantidadeDePessoasFaixaEtaria2 = 0;
    var quantidadeDePessoasFaixaEtaria3 = 0;
    var quantidadeDePessoasFaixaEtaria4 = 0;
    var quantidadeDePessoasFaixaEtaria5 = 0;

    for (let i = 0; i < idades.length; i++) {       
        if(idades[i] <= 15){
            quantidadeDePessoasFaixaEtaria1 = quantidadeDePessoasFaixaEtaria1 + 1;
        }
        if(idades[i] >= 16 && idades[i] <= 30){
            quantidadeDePessoasFaixaEtaria2 = quantidadeDePessoasFaixaEtaria2 + 1;
        }
        if(idades[i] >= 31 && idades[i] <= 45){
            quantidadeDePessoasFaixaEtaria3 = quantidadeDePessoasFaixaEtaria3 + 1;
        }
        if(idades[i] >= 46 && idades[i] <= 60){
            quantidadeDePessoasFaixaEtaria4 = quantidadeDePessoasFaixaEtaria4 + 1;
        }
        if(idades[i] >= 60){
            quantidadeDePessoasFaixaEtaria5 = quantidadeDePessoasFaixaEtaria5 + 1;
        }
    }

    var porcentagemPessoasFaixaEtaria1 = quantidadeDePessoasFaixaEtaria1 * 100 / idades.length;
    var porcentagemPessoasFaixaEtaria5 = quantidadeDePessoasFaixaEtaria5 * 100 / idades.length;

    var mensagemQuantidadePessoas = "Pessoas faixa etária 1: " + quantidadeDePessoasFaixaEtaria1 + "\n";
    mensagemQuantidadePessoas += "Pessoas faixa etária 2: " + quantidadeDePessoasFaixaEtaria2 + "\n";
    mensagemQuantidadePessoas += "Pessoas faixa etária 3: " + quantidadeDePessoasFaixaEtaria3 + "\n";
    mensagemQuantidadePessoas += "Pessoas faixa etária 4: " + quantidadeDePessoasFaixaEtaria4 + "\n";
    mensagemQuantidadePessoas += "Pessoas faixa etária 5: " + quantidadeDePessoasFaixaEtaria5 + "\n";

    var mensagemPorcentagemFaixaEtaria1 = "A quantidade de pessoas na faixa etária 1 é de: " + porcentagemPessoasFaixaEtaria1;
    var mensagemPorcentagemFaixaEtaria5 = "A quantidade de pessoas na faixa etária 5 é de: " + porcentagemPessoasFaixaEtaria5;

    alert(mensagemQuantidadePessoas);
    alert(mensagemPorcentagemFaixaEtaria1);
    alert(mensagemPorcentagemFaixaEtaria5);
    
}