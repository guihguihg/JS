const listaUnidades = [{
        nome: 'CC BELEM',
        endereco_logradouro: 'R CESARIO ALVIM',
        endereco_numero: '174',
        endereco_bairro: 'BELENZINHO',
        endereco_municipio_nome: 'São Paulo',
        endereco_uf_sigla: 'SP',
        clinica: 'Cardiologia',
        media_consultas_mes: 645
    },
    {
        nome: 'CASA DE SAUDE E MAT SANTANA',
        endereco_logradouro: 'R OSMAR MARINHO',
        endereco_numero: '71',
        endereco_bairro: 'CENTRO',
        endereco_municipio_nome: 'MOGI DAS CRUZES',
        endereco_uf_sigla: 'SP',
        clinica: 'Ortopedia',
        media_consultas_mes: 553
    },
    {
        nome: 'CC ZONA SUL',
        endereco_logradouro: 'AV JOAO DIAS',
        endereco_numero: '76',
        endereco_bairro: 'STO AMARO',
        endereco_municipio_nome: 'São Paulo',
        endereco_uf_sigla: 'SP',
        clinica: 'Clínica Geral',
        media_consultas_mes: 418
    },
    {
        nome: 'HOSPITAL PREVINA PLENA SAUDE',
        endereco_logradouro: 'R ANGELO RANIERI',
        endereco_numero: '52',
        endereco_bairro: 'VL V CRUZ',
        endereco_municipio_nome: 'FRANCO DA ROCHA',
        endereco_uf_sigla: 'SP',
        clinica: 'Cardiologia',
        media_consultas_mes: 713
    },
    {
        nome: 'CENTRO MEDICO IPIRANGA',
        endereco_logradouro: 'R MAURICIO CASTILHO',
        endereco_numero: '416',
        endereco_bairro: 'VL MONUMENTO',
        endereco_municipio_nome: 'São Paulo',
        endereco_uf_sigla: 'SP',
        clinica: 'Cardiologia',
        media_consultas_mes: 756
    },
    {
        nome: 'CC ZONA NORTE',
        endereco_logradouro: 'AV NOVA CANTAREIRA',
        endereco_numero: '229',
        endereco_bairro: 'TUCURUVI',
        endereco_municipio_nome: 'São Paulo',
        endereco_uf_sigla: 'SP',
        clinica: 'Clínica Geral',
        media_consultas_mes: 609
    },
    {
        nome: 'HOSPITAL PSIQUIATRICO ITUPEVA LTDA',
        endereco_logradouro: 'R DA ALEGRIA',
        endereco_numero: '156',
        endereco_bairro: 'MINA',
        endereco_municipio_nome: 'ITUPEVA',
        endereco_uf_sigla: 'SP',
        clinica: 'Neurologia',
        media_consultas_mes: 421
    },
    {
        nome: 'CENTRO MEDICO SAO GABRIEL',
        endereco_logradouro: 'AV AMADOR B, VEIGA',
        endereco_numero: '195',
        endereco_bairro: 'PENHA',
        endereco_municipio_nome: 'São Paulo',
        endereco_uf_sigla: 'SP',
        clinica: 'Ortopedia',
        media_consultas_mes: 444
    },
    {
        nome: 'CENTRO CLINICO BARRA FUNDA',
        endereco_logradouro: 'AV FRANCISCO MATARAZZO',
        endereco_numero: '612',
        endereco_bairro: 'ÁGUA BRANCA',
        endereco_municipio_nome: 'São Paulo',
        endereco_uf_sigla: 'SP',
        clinica: 'Clínica Geral',
        media_consultas_mes: 673
    },
    {
        nome: 'GREEN LINE SISTEMA DE SAUDE',
        endereco_logradouro: 'AV REBOUCAS',
        endereco_numero: '2011',
        endereco_bairro: 'PINHEIROS',
        endereco_municipio_nome: 'São Paulo',
        endereco_uf_sigla: 'SP',
        clinica: 'Cardiologia',
        media_consultas_mes: 214
    },
    {
        nome: 'CC TATUAPE',
        endereco_logradouro: 'R PLATINA',
        endereco_numero: '215',
        endereco_bairro: 'VL AZEVEDO',
        endereco_municipio_nome: 'São Paulo',
        endereco_uf_sigla: 'SP',
        clinica: 'Neurologia',
        media_consultas_mes: 333
    },
    {
        nome: 'HOSP SAO LUCAS DE SANTOS LTDA',
        endereco_logradouro: 'AV ANA COSTA,',
        endereco_numero: '168',
        endereco_bairro: 'VL BELMIRO',
        endereco_municipio_nome: 'SANTOS',
        endereco_uf_sigla: 'SP',
        clinica: 'Ortopedia',
        media_consultas_mes: 218
    },
    {
        nome: 'CC DIADEMA',
        endereco_logradouro: 'AV FABIO ESQUIVEL',
        endereco_numero: '2421',
        endereco_bairro: 'CENTRO',
        endereco_municipio_nome: 'Diadema',
        endereco_uf_sigla: 'SP',
        clinica: 'Neurologia',
        media_consultas_mes: 167
    },
    {
        nome: 'HOSPITAL SAUDE GUARULHOS',
        endereco_logradouro: 'R DONA ANTONIA',
        endereco_numero: '636',
        endereco_bairro: 'VL DAS PALMEIRAS',
        endereco_municipio_nome: 'GUARULHOS',
        endereco_uf_sigla: 'SP',
        clinica: 'Clínica Geral',
        media_consultas_mes: 777
    },
    {
        nome: 'HOSPITAL HOSP NOVA VIDA',
        endereco_logradouro: 'AV CAROLINA PAULINO',
        endereco_numero: '66',
        endereco_bairro: 'VL SAO FRANCISCO',
        endereco_municipio_nome: 'ITAPEVI',
        endereco_uf_sigla: 'SP',
        clinica: 'Neurologia',
        media_consultas_mes: 298
    },
    {
        nome: 'HOSP FREI GALVAO',
        endereco_logradouro: 'R HEITOR DE MORAES,',
        endereco_numero: '23',
        endereco_bairro: 'BOQUEIRAO',
        endereco_municipio_nome: 'SANTOS',
        endereco_uf_sigla: 'SP',
        clinica: 'Clínica Geral',
        media_consultas_mes: 412
    },
    {
        nome: 'CC HERMINIO LEMOS',
        endereco_logradouro: 'R HERMINIO LEMOS,',
        endereco_numero: '385',
        endereco_bairro: 'CAMBUCI',
        endereco_municipio_nome: 'São Paulo',
        endereco_uf_sigla: 'SP',
        clinica: 'Neurologia',
        media_consultas_mes: 312
    },
];