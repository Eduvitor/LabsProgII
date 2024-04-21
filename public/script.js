//vetores do conteudo da tabela
var MateriasCC = ["Estrutura de Dados", "Circuitos Digitais", "Calculo I", "Producao Textual", "Probabilidade e Estatistica"];
var MateriasHis = ["Politicas Educacionais", "Didática", "Historia Antiga", "Historia Medieval", "Informatica Basica"];
var MateriasMED = ["Matemática Instrumental", "Anatomia", "Imunologia", "Patologia", "Estatistica Basica"];
var MateriasMED2 = ["Producao Textual Academica", "Patologia", "", "Anatomia", "Estatistica Basica"];




let button_dark = $("#dark");
let button_light = $("#light");

console.log(button_dark);
button_light.on('click', function(){
    $('html').attr('data-bs-theme', 'light');
});

button_dark.on('click', function(){
    $('html').attr('data-bs-theme', 'dark');
});

//preencher a tabela com os dados
function preencheTabelaGenerica(materias, campo) { //campo=Id do campo da tabela
    var forPreencher = $("#" + campo);
    if (forPreencher !== null) {
         let tdElements = forPreencher.find('td:not(:first-child)'); //para não pegar o primeiro nó filho
         if (tdElements.length > 0) {
             tdElements.each(function (index) {
                 $(this).html(materias[index]);
             });
         } else {
             console.warn('O campo da tabela não possui nenhum filho para ser iterado');
         }
    }else {
         console.warn('Elemento não encontrado!');
    }
 }

 //funcao limpar tabela

 const limpaTabela = () => {
    
    let celulasParaLimpar = document.querySelectorAll('#thrs td:not(:first-child)');
    console.log(celulasParaLimpar)
    if (celulasParaLimpar.length > 0) {

        celulasParaLimpar.forEach(function(cell) {
            $(cell).html('');
        });
    }
}

 //implementa acao de preencher as tabelas

let botaoCC = $("#CC");

console.log(botaoCC);

 if (botaoCC.length > 0) {
    console.log('Elemento existe');
    botaoCC.on('click', () => {
        $("#alerta").addClass("d-none");
        console.log('CLICOU');
        limpaTabela();
        preencheTabelaGenerica(MateriasCC, 'trDas7');
        preencheTabelaGenerica(MateriasCC, 'trDas9');
        $("#alerta").removeClass("d-none");
        
    });
} else {
    console.log("elemento nao encontraDO");
}

let botaoHIS = $("#HIS");

if (botaoHIS.length > 0) {
    console.log('Elemento existe');
    botaoHIS.on('click', () => {
        $("#alerta").addClass("d-none");
        console.log('CLICOU');
        limpaTabela();
        preencheTabelaGenerica(MateriasHis, 'trDas7');
        preencheTabelaGenerica(MateriasHis, 'trDas9');
        $("#alerta").removeClass("d-none");
    });
} else {
    console.log("elemento nao encontraDO");
}

let botaoMED = $("#MED");

if (botaoMED.length > 0) {
    console.log('Elemento existe');
    botaoMED.on('click', () => {
        $("#alerta").addClass("d-none");
        console.log('CLICOU');
        limpaTabela();
        preencheTabelaGenerica(MateriasMED, 'trDas730');
        preencheTabelaGenerica(MateriasMED, 'trDas10');
        preencheTabelaGenerica(MateriasMED2, 'trDas1');
        preencheTabelaGenerica(MateriasMED2, 'trDas4');
        $("#alerta").removeClass("d-none");
    });
} else {
    console.log("elemento nao encontraDO");
}