const tbody = document.getElementById('unidades');
console.log(tbody);
listaUnidades.forEach(unidade => { 
    
    if(unidade.endereco_municipio_nome === 'São Paulo'){

   
    tbody.innerHTML += ` 

   
        <tr'>
            <td>${unidade.nome}</td>
            <td>${unidade.endereco_logradouro + ', ' + unidade.endereco_numero }</td>
            <td>${unidade.endereco_bairro}</td>
            <td>${unidade.endereco_municipio_nome + ' / ' + unidade.endereco_uf_sigla}</td>
            <td>${unidade.clinica}</td>
            <td>${unidade.media_consultas_mes}</td>
        </tr>
    
    `; 
    
}

});


function total(listaUnidades) {
    
    
        const soma = listaUnidades.reduce((acumulador, unidade) => 
        

            acumulador + unidade.media_consultas_mes,0)
            return soma;
        
    

  

        }
        document.querySelector('#numeroConsultas').textContent = total(listaUnidades);


function totalConsultas(listaUnidades) {
    const quantidadeCarros = listaUnidades.reduce((contador, unidade) => {
        // Verifica se o carro atende à condição de busca
        if ( unidade.endereco_municipio_nome === 'São Paulo') {
            contador++;
        }

        // Retorna o contador atualizado
        return contador;
    }, 0);

    // Retorna a quantidade total de carros que atendem à condição
    return quantidadeCarros;
}

document.querySelector('#totalunidadesSP').textContent = totalConsultas(listaUnidades);

function totalUnidades(listaUnidades) {
    const quantidadeCarros = listaUnidades.reduce((contador, unidade) => {
        // Verifica se o carro atende à condição de busca
        if ( unidade.endereco_municipio_nome !== 'São Paulo') {
            contador++;
        }

        // Retorna o contador atualizado
        return contador;
    }, 0);

    // Retorna a quantidade total de carros que atendem à condição
    return quantidadeCarros;
}

document.querySelector('#totalunidadesForaSP').textContent = totalUnidades(listaUnidades);