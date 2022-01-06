var pisFuncionarios = [];	

var nomePadrao = document.getElementById("nomePadrao").value;
var departamento = document.getElementById("departamento").value;
var dataAdmissao =  new Date(document.getElementById("dataAdmissao").value + 'T00:00');	
var numFuncionarios = document.getElementById("numFuncionarios").value;
var textToWrite = "";

		function gerarFuncionarios()
		{
					
			for(var i = 1; i <= numFuncionarios; i++ ) 
			{
				pisFuncionarios[i] = gerarPis();
				textToWrite += nomePadrao + " " + i + ";" + pisFuncionarios[i] + ";" + departamento + ";" + dataAdmissao.toLocaleDateString() + "\r\n";   
			}
			
			//var textToWrite = document.getElementById("inputTextToSave").value;
			var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
			var fileNameToSaveAs = "ARQUIVO_RETORNO";
			var downloadLink = document.createElement("a");
			downloadLink.download = fileNameToSaveAs;
			downloadLink.innerHTML = "Download File";
			if (window.webkitURL != null)
			{
				// Chrome allows the link to be clicked
				// without actually adding it to the DOM.
				downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
			}
			else
			{
				// Firefox requires the link to be added to the DOM
				// before it can be clicked.
				downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
				downloadLink.onclick = destroyClickedElement;
				downloadLink.style.display = "none";
				document.body.appendChild(downloadLink);
			}

			downloadLink.click();

		}
		
		function gerarPis() 
		{
			var n = 9;
			var n1 = 1;//randomiza(1);
			var n2 = 2;//randomiza(2);
			var n3 = randomizaMaiorQueZero(5);
			var n4 = randomiza(n);
			var n5 = randomiza(n);
			var n6 = randomiza(n);
			var n7 = randomiza(n);
			var n8 = randomiza(n);
			var n9 = randomiza(n);
			var n10 = randomiza(n);
			//+ n10 * 4
			var somatorio = (n1 * 3) + (n2 * 2) + (n3 * 9) + (n4 * 8) + (n5 * 7) + (n6 * 6) + (n7 * 5) + (n8 * 4) + (n9 * 3) + (n10 * 2);
			var resto = (somatorio % 11);
			var resultado = 0;
			if (resto > 1)
			{
				resultado = 11 - resto;
			}
			numeroPuro = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + resultado;
			return numeroPuro;
			//return '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + n7 + '.' + n8 + n9 + n10 + '-' + resultado;
		}
			
		function randomiza(n) 
		{
			var ranNum = Math.round(Math.random() * n);
			return ranNum;
		}

		function randomizaMaiorQueZero(n) 
		{
			var num = Math.round(Math.random() * n);

			if (num = 0) {
				num = 1;
			}
			return num;
		}
				
		function gerarMarcacao() 
		{		
			var dataInicio = moment.utc(document.getElementById("dataInicio").valueAsDate);
			var dataFim = moment.utc(document.getElementById("dataFim").valueAsDate);
			var dataInicioFormat = (dataInicio.date() < 10 ? "0" + dataInicio.date() : dataInicio.date()) + "" + ((dataInicio.month()+1) < 10 ? "0"+ (dataInicio.month() + 1) : (dataInicio.month() + 1)) + dataInicio.year().toString().substr(-4);
			var dataFimFormat = (dataFim.date() < 10 ? "0" + dataFim.date() : dataFim.date()) + "" + ((dataFim.month()+1) < 10 ? "0"+ (dataFim.month() + 1) : (dataFim.month() + 1)) + dataFim.year().toString().substr(-4);
			var diferenca = dataFim.diff(dataInicio, 'days');
			var novaData;
			var entrada1 = document.getElementById("entrada1").value;
			entrada1 = entrada1.replace(":", "");
			var saida1 = document.getElementById("saida1").value;
			saida1 = saida1.replace(":", "");
			var entrada2 = document.getElementById("entrada2").value;
			entrada2 = entrada2.replace(":", "");
			var saida2 = document.getElementById("saida2").value;
			saida2 = saida2.replace(":", "");
			var nsr = document.getElementById("nsr").value;
			var cnpj = document.getElementById("cnpj").value;
			var serieCompleta = document.getElementById("serieCompleta").value;
			
			var textToWrite = "02RETORNO01COBRANCA       00000000000005469645INTERBELLE COMERCIO DE PRODUTO237BRADESCO       0501220160000000022                                                                                                                                                                                                                                                                          050122         000001";
			
			for(var i = 1; i <= pisFuncionarios.length - 1; i++) 
			{
				novaData = moment(dataInicio);

				for(var h = 0; h <= diferenca; h++) 
				{
					if(novaData.day() == 0 || novaData.day() == 6) 
					{
						console.log(novaData.day());
					} 
					else 
					{
						for(var j = 1; j <= 4; j++) 
						{
							if(j == 1) {
								textToWrite += geraNsr(nsr++) + "3" + (novaData.date() < 10 ? "0" + novaData.date() : novaData.date()) + (novaData.month()+1 < 10 ? "0"+ (novaData.month() + 1) : (novaData.month() + 1)) + novaData.year().toString().substr(-4) + entrada1 + "0" + pisFuncionarios[i] + "\r\n";
							} else if(j == 2) {
								textToWrite += geraNsr(nsr++) + "3" + (novaData.date() < 10 ? "0" + novaData.date() : novaData.date()) + (novaData.month() +1 < 10 ? "0"+ (novaData.month() + 1) : (novaData.month() + 1)) + novaData.year().toString().substr(-4) + saida1 + "0" + pisFuncionarios[i] + "\r\n";
							} 
							else if (j == 3) {
								textToWrite += geraNsr(nsr++) + "3" + (novaData.date() < 10 ? "0" + novaData.date() : novaData.date()) + (novaData.month() +1 < 10 ? "0"+ (novaData.month() + 1) : (novaData.month() + 1)) + novaData.year().toString().substr(-4) + entrada2 + "0" + pisFuncionarios[i] + "\r\n";
							} 
							else 
							{
								if(novaData.day() == 5) 
								{
									textToWrite += geraNsr(nsr++) + "3" + (novaData.date() < 10 ? "0" + novaData.date() : novaData.date()) + (novaData.month() +1 < 10 ? "0"+ (novaData.month() + 1) : (novaData.month() + 1)) + novaData.year().toString().substr(-4) + "1700" + "0"  + pisFuncionarios[i]+ "\r\n";
								} 
								else 
								{
									textToWrite += geraNsr(nsr++) + "3" + (novaData.date() < 10 ? "0" + novaData.date() : novaData.date()) + (novaData.month() +1 < 10 ? "0"+ (novaData.month() + 1) : (novaData.month() + 1)) + novaData.year().toString().substr(-4) + saida2 + "0"  + pisFuncionarios[i]+ "\r\n";
								}		
							}
						}					
					}
					novaData.date(novaData.date() + 1);
				}
			}

			var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
			var fileNameToSaveAs = "ARQUIVO_RETORNO";
			var downloadLink = document.createElement("a");
			downloadLink.download = fileNameToSaveAs;
			downloadLink.innerHTML = "Download File";
			if (window.webkitURL != null)
			{
				// Chrome allows the link to be clicked
				// without actually adding it to the DOM.
				downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
			}
			else
			{
				// Firefox requires the link to be added to the DOM
				// before it can be clicked.
				downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
				downloadLink.onclick = destroyClickedElement;
				downloadLink.style.display = "none";
				document.body.appendChild(downloadLink);
			}

			downloadLink.click();
		}
			
		function geraNsr(nsr) 
		{
			nsr = nsr.toString();
			while(nsr.length < 9) {
				nsr = "0" + nsr;
			}
			return nsr;
		}