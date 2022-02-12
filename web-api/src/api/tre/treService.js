const gsScrapper = require('../../helpers/scraper')
const browserObject = require('../../config/browser');
let browserInstance = browserObject.startBrowser();
class Service {

    buscar(params){
        return new Promise(async(resolve, reject)=>{
          
            
            const retornoScrapper = await this.scrapAll(browserInstance,params)
            
            //res.send(JSON.parse(JSON.stringify(`[{autorizado:${retornoScrapper}}]`))); 
            //resolve({ autorizado: retornoScrapper})
            resolve(retornoScrapper)

        })
    }

    async scrapAll(browseInstance, params){
        let browser;
        let scrapper;
        try {
            browser = await browseInstance;
            scrapper = await gsScrapper.scraper(browser,params);
    
            return scrapper;
    
            
    
        }
        catch (err) {
            console.log("Não foi possível instanciar o browser => ", err);
    
            return err;
        }
    
    }
}

module.exports = new Service