*** Settings ***
Documentation            Todas as configurações de Setup e Teardown do projeto estarão aqui.

Resource                  package.robot

*** Variables ***
${BROWSER}           chrome        
${URL}               file:///C:/Automacao/Projetos/Gerar%20aquivo%20de%20retorno/GeradorDeArquivos/Gerador%20de%20arquivo%20de%20retorno/gerar-arquivo-Retorno.html

*** Keywords ***
Abrir navegador
    Open Browser           browser=${BROWSER}       options=add_experimental_option('excludeSwitches', ['enable-logging'])
    Maximize Browser Window

# Fechar navegador
#      Close Browser