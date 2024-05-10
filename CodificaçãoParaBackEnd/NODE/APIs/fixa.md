Para usar o get precisa de urlBase + endpoint + parametro
https:localhost:3333/user/1
ate o 3333 é a pagina base (url)

toda api que desenvolve tem que prestar atenção no caminho (/user)
e o metodo que vai usar (GET,PUT...)
depois de pegar o metodo cria a logica

if(url==='/users && method === "GET")

o front faz requisição baseado no caminho que foi determinado e toda vez que fizer a requisição o back recebe, trata os dados e responde a requisição feita pelo BackEnd

base de dados é um array:
    const users = [];

const server = http.createServer((request, response) => {


cria um objeto e atribui a request,tendo 2 variaveis, para não precisar fazer 2 vezes
    const { method, url } = request;

Cada if espera um comportamento/metodo

if(url === "/users" && method === "GET") {//Buscar todos os usuarios
} else if (false) {
//Busar um unico usuario
} else if (url === "/users" && method === "POST") {
//Cadastrar um usuario
} else if (true) {
//Atualizar um usuario
} else if (true) {
//deletar um usuário
} else {
//Recurso não encontrado
}

-----------ESTRUTURA FS-----------
    fs.readFile('ondeEstáOarquivo','utf8',callback)
