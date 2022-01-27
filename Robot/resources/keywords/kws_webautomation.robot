*** Settings ***
Documentation        Aqui estarão presentes todas as keywords dos testes.

Resource             ../package.robot

*** Variables ***

*** Keywords ***

Dado que acesso a pagina

    Go To                               ${URL}
    Title Should Be                     ${HOME.TITLE_PAGE_HOME}

Quando informo os titulos

    FOR    ${COUNT}    IN RANGE    0    100000

    # Input Text      ${HOME.NUMERO_TITULO}        ${TITULOS[${COUNT}]}       

    # Input Text      ${HOME.VALOR_TITULO}         ${VALOR_TITULO[${COUNT}]}

    # Input Text      ${HOME.VALOR_PAGO}           ${VALOR_PAGO[${COUNT}]}

    Click Button    ${HOME.BTN_ADC_TITULO}


    

    # Capture page Screenshot
    log To Console    Estou no titulo n°: ${COUNT} 
    Run Keyword If    ${COUNT} == 100000    Log    Acabou o loop!!!
    END

# Entao clico em gerar arquivo de retorno
