var titulos, index;


function incluirTitulo(nome, altura) {

    titulos = document.getElementById("tbTitulos");
    var tb = document.getElementById("tbTitulos");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    cellCodigo = linha.insertCell(0);
    cellNome = linha.insertCell(1);
    cellAltura = linha.insertCell(2);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellAltura.innerHTML = altura;

    totalLinhas = qtdLinhas;
    console.log("teste valor total de linhas =", totalLinhas);
}


function pegarValores(nome, altura, codigo) {

    for (var i = 0; i < titulos.rows.lengths; i++)

    {
        index = this.rowsIndex;

        nome = documen.getElementById("txtnome").value = titulos.rows[index].cells[1];
        altura = documen.getElementById("txtaltura").value = titulos.rows[index].cells[2];
    }

    console.log("Quantidade de linhas =", totalLinhas);

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    console.log(dataAtual);


    // console.log("valor da coluna 2 =", altura);  
}


var textToWrite = "";


function gerarArquivo(nome, altura) {
    var nome;
    var altura;

    var textToWrite = "02RETORNO01COBRANCA \r\n";
    nsr = 1;


    for (var i = 1; i <= totalLinhas; i++) {

        index = this.rowsIndex;

        textToWrite += geraNsr(nsr++) + "102111370510001860000009030990003965900000000000000000" + nome + "00000000000" + altura + "linha =" + i + "\r\n";
    }

    function geraNsr(nsr) {
        nsr = nsr.toString();
        while (nsr.length < 9) {
            nsr = "0" + nsr;
        }
        return nsr;
    }




    var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
    var fileNameToSaveAs = "H_CB0501202201BPB";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}




// VER AULA https: //www.youtube.com/watch?v=s-lT6RZzOGw