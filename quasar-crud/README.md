# Projeto CRUD (Front End)

Um exemplo de um serviço "CRUD" construído com Vue JS 3 e Quasar Framework.

# Executar o projeto dentro da pasta quasar-crud.

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```



### Build the app for production
```bash
quasar build
```

# Visão geral do projeto
# axios.js = arquivo aonde consta o endereço da API.

# UseApi.js = arquivo aonde consta todas as requisições e funções do CRUD.

# posts.js = funções que são utilizadas apenas pelo serviço de post e se precisar mudar o endereço da API, será feito apenas nesse arquivo, evitando assim mexer em vários arquivos.

# db.json = mock simulando uma API local.

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
