const puppeteer = require('puppeteer');

async function startBrowser() {
    let browser;
    try {
        console.log(">>>Abrindo o browser......");
        browser = await puppeteer.launch({
            headless: true,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (err) {
        console.log("Não foi possível criar uma instância do browser => : ", err);
    }
    return browser;
}

module.exports = {
    startBrowser
};