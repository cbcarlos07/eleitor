const { param } = require("express/lib/request");


const scraperObject = {
    url: 'https://www.tre-am.jus.br/eleitor/servicos/titulo-e-local-de-votacao/titulo-e-local-de-votacao-consulta-por-nome',
    liberada: false,
    //itemSelector: "#resposta-local-votacao > p",
    //itemSelectorAutorizado: "#resposta-local-votacao > p:nth-child(4)",
    listSelector: "#_ingrid_undefined_0 > div:nth-child(2) > table > tbody > tr > td:nth-child(4) > div > ol",
    wait_time:1000,    
    
    async scraper(browser, params) {
        
        console.log(params);

        let page = await browser.newPage();        

        //Debug
        console.log(`>>>Navegando em ${this.url}...`);
        
        //Acessa a página
        await page.goto(this.url);        

        //Preenche o usuário
        const NOME = params.nome
        const DATANASC = params.dtNascimento
        const NOMEMAE = params.nomeDaMae
        await page.type('#LV_NomeTituloCPF', NOME);

        //Debug
        console.log(`>>>Informando o NOME...`);

        //Seleciona tab para preencher a lista de usuários
        await page.keyboard.press("Tab");
        await page.keyboard.press("Tab");

        
        await page.waitForTimeout(this.wait_time);

        //Preenche o campo de DATA DE NASCIMENTO
        await page.type('#LV_DataNascimento',DATANASC );

        
        //Debug
        console.log(`>>>Informando a DATA DE NASCIMENTO...`);

        await page.keyboard.press("Tab");
        await page.keyboard.press("Tab");
        //Seleciona o usuário na lista de usuários
        

        //Debug
        if(params.nomeDaMae && params.nomeDaMae != ''){
            await page.type('#LV_NomeMae',NOMEMAE );
        }else{
            await page.click('#LV_NaoConstaMae');            
        }
        console.log(`>>>Preenchendo o nome da mãe`);

        //Preenche o campo de senha
        //Clica no botão de login
        await page.click('#consultar-local-votacao-form-submit');

        //Debug
        console.log(`>>>Buscando dados...`);

        //Aguarda o carregamento da página
        await page.waitForTimeout(this.wait_time);

        const identificacao = await page.$eval('#resposta-local-votacao > p ', text => text.textContent);
        console.log('identificacao', identificacao);
        
        const inscricao = await page.$eval('#resposta-local-votacao > p:nth-child(3) ', text => text.textContent);
        console.log('inscricao', inscricao);
        const nome = await page.$eval('#resposta-local-votacao > p:nth-child(4) ', text => text.textContent);
        console.log('nome', nome);
        const local = await page.$eval('#resposta-local-votacao > p:nth-child(8) ', text => text.textContent);
        console.log('local', local);
        const endereco = await page.$eval('#resposta-local-votacao > p:nth-child(9) ', text => text.textContent);
        console.log('endereco', endereco);
        const cidade = await page.$eval('#resposta-local-votacao > p:nth-child(10) ', text => text.textContent);
        console.log('cidade', cidade);
        const localVotacaoArr = local.split(':')
        const localVotacao = localVotacaoArr[1].trim()
        const endLocalVotacao = endereco.split(':')
        const bairroArr = endLocalVotacao[1].split('-')
        const ruaLocalVotacao = bairroArr[0].trim()
        const bairroLocalVotacao = bairroArr[1]
        const cidadeLocalVotacao = cidade.split('-')
        const city = cidadeLocalVotacao[0].trim().split(':')
        const cidad = city[1]
        const estado = cidadeLocalVotacao[1].trim()
          
        return {
            local: localVotacao,
            rua: ruaLocalVotacao,
            bairro: bairroLocalVotacao,
            cidade: cidad.replace(/\t/g, ''),
            estado
        };
       



    }
}

module.exports = scraperObject;