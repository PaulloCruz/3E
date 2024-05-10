const url = require("url");
const adress = "https://ww.meusite.com.br/catalog?produtos=cadeira";
const pareseUrl = new url.URL(adress);

console.log(pareseUrl.host);
console.log(pareseUrl.pathname);
console.log(pareseUrl.search);
console.log(pareseUrl.searchParams);
console.log(pareseUrl.searchParams.get('produtos'))
