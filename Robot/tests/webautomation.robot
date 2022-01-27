*** Settings ***
Documentation        Aqui estarão presentes os cases de testes.

Resource             ../resources/package.robot

Test Setup           Abrir navegador
# Test Teardown        Fechar navegador

*** Test Cases ***
Caso de Teste 01: Gerar arquivosde retorno
    [Tags]            GeradorDeArquivos
    Dado que acesso a pagina
    Quando informo os titulos
    Entao clico em gerar arquivo de retorno