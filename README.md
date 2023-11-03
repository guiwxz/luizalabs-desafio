# Desafio Backend Luizalabs

## INTEGRAÇÃO DE SISTEMAS
Este desafio propõe a problemática de importação de dados de um sistema legado. Sendo essa importação e a consulta de dados realizada através de uma API REST.

## DESAFIO
- [Solução e tecnologias utilizadas](https://github.com/guiwxz/luizalabs-desafio/blob/main/docs_md/SOLUCOES.md)



## DEPENDÊNCIAS

### INSTALAÇÕES
- [Instalação NODE JS](https://nodejs.org/en/)
- [Instalação YARN](https://yarnpkg.com/getting-started/install)
- [Instalação DOCKER](https://www.docker.com/products/docker-desktop/)


- node >= `18.17.1`

## CONFIGURANDO AMBIENTE
* Criar o arquivo `.env` com o padrão do arquivo `.env.example`
### IMPORTANTE: 
  Para utilização do `docker` é necessário configurar as seguintes variáveis de ambiente:
 ```bash
MONGODB_USER=
MONGODB_PASSWORD=
MONGODB_PORT=
MONGODB_HOST=
MONGODB_DB=
```

Sem utilização do `docker` é possível utilizar a variável de ambiente `MONGODB_CONNECTION_URL` com uma URL de conexão do mongodb.
Ao utilizar essa variável, ela sobrescreve as demais do arquivo para o MongoDB


* Comando para instalar as dependências do projeto:
  
  ```
  yarn install
  ```
* Com as dependências instaladas, o comando utilizado para subir o banco é:
  
  ```
  yarn docker:up
  ```
* Após subir o docker, user o comando para inciar o servidor local:
  
  ```
  yarn start:dev
  ```
* Para parar a execução do docker:
  
  ```
  yarn docker:down
  ```
# TESTES
## AMBIENTE PARA TESTES
Para realizar os testes é necessário fazer a configuração da variável de ambiente `.env.test`, isso porque os testes utilizam essa variável para executar em um banco de testes.
```
MONGODB_USER=
MONGODB_PASSWORD=
MONGODB_PORT=
MONGODB_HOST=
MONGODB_DB=
```
* Setar a variável `MONGODB_DB='test'` para ter um banco de testes.

Sem utilização do `docker` é possível utilizar a variável de ambiente `MONGODB_CONNECTION_URL` com uma URL de conexão do mongodb.
Ao utilizar essa variável, ela sobrescreve as demais do arquivo para o MongoDB.
* Detalhe: caso não seja informado o `.env.test` alguns testes podem não funcionar e o conteúdo do banco de dados será apagado!

## EXECUTANDO TESTES
* Comando para realizar os testes
  ```
  yarn test
  ```

* Comando para realizar os testes e coverage
  ```
  yarn test:ci
  ```

## GERANDO BUILD
```
  yarn build
```
Para rodar a build:
```
  yarn start
```



# ROTAS

| TYPE | PATH | PARAMS | PAYLOAD | DESCRIÇÃO |
|------|------|--------|---------|-----------|
|GET| /docs | - | - | Documentação swagger da aplicação |
|GET| /healthcheck | - | - | Endpoint de verificação healthcheck |
|GET| /orders | `orderId: string` <br/> `initialDate: string` <br/> `finalDate: string` | - | Endpoint para consulta dos dados importados |
|POST| /import | - | multipart/form-data <br/> `file: upload file` | Endpoint para importação dos dados |

# COMO TESTAR
## VIA SWAGGER
1. Entrar na rota `/docs`
2. Importar dados com arquivo simulado (como determinado pelo desafio)
3. Consultar através da rota e testar query params

## VIA POSTMAN
1. Criar uma rota POST com a url: http://localhost:3000/import
2. Setar o body para form-data com a `key: file` e fazendo upload do arquivo
3. Criar uma rota GET com a url: http://localhost:3000/orders
4. Testar os query params `orderId`, `initialDate` e `finalDate` 

# Evidências

- Server rodando
 <br/> ![Imagem mostrando um console com o servidor startado](https://github.com/guiwxz/luizalabs-desafio/blob/main/assets/server%20rodando.png)

- Testes coverage
   <br/> ![Imagem mostrando uma pagina com a cobertura de testes](https://github.com/guiwxz/luizalabs-desafio/blob/main/assets/coverage.png)

- Health check
   <br/> ![Imagem mostrando o healthcheck na web](https://github.com/guiwxz/luizalabs-desafio/blob/main/assets/healthcheck.png)

- Resposta de consulta
   <br/> ![Imagem mostrando uma resposta de consulta](https://github.com/guiwxz/luizalabs-desafio/blob/main/assets/response.png)

- CI [github-actions](https://github.com/guiwxz/luizalabs-desafio/actions/runs/6741326721)
