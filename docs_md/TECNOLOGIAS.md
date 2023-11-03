# TECNOLOGIAS UTILIZADAS

## Express.js
Express é uma framework para o NodeJS muito utilizada e com facilidade de uso, permitindo criar APIs com simplicidade e serviços de grande eficiência. Utilizei o Express pois é uma ferramenta que já possuo familiaridade e sei que existe boa documentação e uma grande comunidade utilizando, sendo um diferencial para escolha na criação de aplicações. No cenário utilizado foi muito interessante pois ao utilizar a biblioteca `multer` como middleware, foi muito simples para criar uma rota onde pudesse receber uploads de arquivo texto para receber os dados do sistema legado.

## Typescript
Sinceramente, acredito que criar aplicações no ecossistema Javascript sem utilização do Typescript seja inviável. A manutenção de código usando essa tecnologia é muito eficaz, tornando o código mais seguro e mais legível principalmente quando há mais de uma pessoa trabalhando no projeto.

## MongoDB + mongoose
Quando comecei o desenvolvimento da solução, achei viável utilizar um banco de dados para armazenar os dados e realizar a consulta para as rotas da API. Nesse sentido, pensei no MongoDB pois é um banco de dados não relacional que seria interessante para salvar e fornecer os dados conforme a descrição do problema. Junto a isso utilizei a biblioteca ´mongoose´, um ODM para interagir com o MongoDB com mais facilidade e pensei nessa combinação pois são tecnologias que já tive experiência.

## Jest + Supertest
Jest é uma ferramenta para realizar testes unitários no Javascript, com disponibilidade para uso de mocks e code coverage. O Supertest é utilizado junto com o jest para realizar testes de integração com consultas HTTP na propria aplicação. Utilizei as duas ferramentas para realizar testes nas rotas criadas e em alguns serviços dessas rotas além de outras funções, tentando cobrir o máximo de coverage durante o desenvolvimento da aplicação.

## Eslint + Prettier
Além da necessidade de criar um código funcional, é importante manter um padrão de código que seja legível e que possua certas regras. Para isso, fiz a configuração do Eslint para criar regras que se repetem em todo o projeto e configuração do Prettier para ter um padrão de formatação do código.

## Husky + commit msg linter
Com essas ferramentas é possível criar uma automação de execução de comandos que acontecem em um determinado momento. Utilizei isso para que fosse possível rodar os lints e os testes antes de qualquer commit. Assim é possível ter certeza que tudo está de acordo com as regras determinadas pelo linter e ter certeza que os testes estão passando dentro do projeto.

## Zod
Biblioteca para validação de schema de typescript, podendo determinar os valores que devem ser recebidos e validar para que não passe nenhum parâmetro errado. Utilizei o zod para verificar os parâmetros recebidos pelas rotas e verificar a formatação do arquivo importado.

## Swagger
É uma ferramenta que permite criar documentações sobre a API e suas rotas, disponibilizando acesso a uma interface podendo realizar consultas na API documentada através de uma rota criada. Utilizei o swagger para documentar os parâmetros e respostas de cada rota, facilitando também os testes nas rotas.

## Github Actions
Através do github actions é possível criar workflows baseado em um conjunto de ações (jobs e steps) que são acionados a partir de um evento dentro do repositório, podendo assim automatizar alguns processos como testes, build, deploy e outros. Criei um workflow para que a partir de um push para o meu repositório, era gerada a build e realizado todos testes do meu projeto.

## Docker
O docker é uma ferramenta que permite a criação e gerenciamento de aplicações em containers a partir de imagens com o sistema que precisamos permitindo execução em qualquer diferente sistema. Utilizei o docker com a imagem do mongodb para facilitar a utilização do banco de dados.

## Postman
O postman é uma ferramenta para testar APIs facilmente, podendo realizar requisições HTTP, testar e documentar a aplicação. Utilizei o postman durante o desenvolvimento para construir as rotas da aplicação e também para verificar as rotas e possíveis erros.
