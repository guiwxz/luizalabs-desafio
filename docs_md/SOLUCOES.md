# PRINCÍPIO DA SOLUÇÃO
Algumas soluções fui agregando ao longo do entendimento de como eu poderia solucionar da melhor forma e cobrindo maior parte dos problemas que poderia ter.

Iniciei resolvendo com um algoritmo simples para normalizar os dados conforme era recebido e ter eles formatados da maneira certa após a importação. Depois agreguei o MongoDB como banco de dados para salvar os dados.
Conforme fui implementando algumas funcionalidades, percebi que teria alguns problemas com a importação e consulta mais tarde, como por exemplo, a importação de dados duplicados ou “reimportação” dos mesmos dados, ocasionando na duplicação de todos conteúdos do banco de dados, deixando o sistema pouco flexível.

Após isso reorganizei o método de inserção, dividindo os users dos orders e apenas relacionando eles para conseguir tratar os dados da melhor forma. Desse jeito, fui capaz de fazer a validação de dados duplicados e apenas atualizar os dados que já existiam no banco. Junto a isso, precisei mudar minha consulta utilizando uma função do mongoose que me permite manipular os dados de uma forma mais flexível e retornar apenas o que é necessário.
Na importação também fiz a validação do arquivo, permitindo apenas arquivos de texto e na formatação correta, conforme proposto pelo desafio.


# TECNOLOGIAS UTILIZADAS

## Express.js
Express é um framework para o NodeJS muito utilizada e com facilidade de uso, permitindo criar APIs com simplicidade e serviços de grande eficiência. Utilizei o Express pois é uma ferramenta que já possuo familiaridade e sei que existe boa documentação e uma grande comunidade utilizando, sendo um diferencial para escolha na criação de aplicações. No cenário utilizado foi muito interessante pois ao utilizar a biblioteca `multer` como middleware, foi muito simples para criar uma rota onde pudesse receber uploads de arquivo texto para receber os dados do sistema legado.

## Typescript
Sinceramente, acredito que criar aplicações no ecossistema Javascript sem utilização do Typescript seja inviável. A manutenção de código usando essa tecnologia é muito eficaz, tornando o código mais seguro e mais legível principalmente quando há mais de uma pessoa trabalhando no projeto.

## MongoDB + mongoose
Quando comecei o desenvolvimento da solução, achei viável utilizar um banco de dados para armazenar os dados e realizar a consulta para as rotas da API. Nesse sentido, pensei no MongoDB pois é um banco de dados não relacional que seria interessante para salvar e fornecer os dados conforme a descrição do problema. Junto a isso utilizei a biblioteca ´mongoose´, um ODM para interagir com o MongoDB com mais facilidade e pensei nessa combinação pois são tecnologias que já tive experiência.

## Jest + Supertest
Jest é uma ferramenta para realizar testes unitários no Javascript, com disponibilidade para uso de mocks e code coverage. O Supertest é utilizado junto com o jest para realizar testes de integração com consultas HTTP na propria aplicação. Utilizei as duas ferramentas para realizar testes nas rotas criadas e em alguns serviços dessas rotas além de outras funções, tentando cobrir o máximo de coverage durante o desenvolvimento da aplicação.

## Eslint + Prettier
Além da necessidade de criar um código funcional, é importante manter um padrão de código que seja legível e que possua certas regras. Para isso, fiz a configuração do Eslint para criar regras que se repetem em todo o projeto e configuração do Prettier para ter um padrão de formatação do código.

## Husky + commit msg linter
Com o Husky é possível criar uma automação de execução de comandos que acontecem em um determinado momento, como por exemplo antes de pushs ou commits. Já o commit-msg-linter me ajuda na padronização de commits, utilizando o padrão de commits semânticos explicado abaixo. Utilizei isso para que fosse possível rodar os lints e os testes antes de qualquer commit e verificar a escrita em cada commit, obtendo organização e maior compreensão em cada commit. Assim é possível ter certeza que tudo está de acordo com as regras determinadas pelo linter e ter certeza que os testes estão passando dentro do projeto.

#### PADRÃO:
```
<TIPO>(SCOPO):<ASSUNTO>
```
#### TIPOS:

**NOME** | **DESCRICAO** |
------|-----------
**feat** | *Um novo recurso*
**fix** | *Uma correção de bug*
**docs** | *Alterações apenas na documentação*
**style** | *Mudanças que não afetam o significado do código (espaço em branco, formatação, ponto e vírgula ausente, etc)*
**refactor** | *Uma alteração de código que não corrige um bug nem adiciona um recurso*
**test** | *Adicionar testes ausentes ou corrigir os existentes*
**chore** | *Mudanças no processo de construção ou ferramentas e bibliotecas auxiliares, como geração de documentação*
**perf** | *Uma alteração de código que melhora o desempenho*
**ci** | *Mudanças em seus scripts e arquivos de configuração de CI*
**build** | *Mudanças que afetam o sistema de compilação ou dependências externas (escopos de exemplo: gulp, broccoli, npm)*
**revert** | *commit usado quando volta para um commit anterior*

## Zod
Biblioteca para validação de schema de typescript, podendo determinar os valores que devem ser recebidos e validar para que não passe nenhum parâmetro errado. Utilizei o zod para verificar os parâmetros recebidos pelas rotas e verificar a formatação do arquivo importado.

## Swagger
É uma ferramenta que permite criar documentações sobre a API e suas rotas, disponibilizando acesso a uma interface podendo realizar consultas na API documentada através de uma rota criada. Utilizei o swagger para documentar os parâmetros e respostas de cada rota, facilitando também os testes nas rotas.

## Github Actions
Através do github actions é possível criar workflows baseado em um conjunto de ações (jobs e steps) que são acionados a partir de um evento dentro do repositório, podendo assim automatizar alguns processos como testes, build, deploy e outros. Criei um workflow para que a partir de um push para o meu repositório, seja gerada a build e realizado todos testes do meu projeto.

## Docker
O docker é uma ferramenta que permite a criação e gerenciamento de aplicações em containers a partir de imagens com o sistema que precisamos, permitindo execução em qualquer diferente sistema. Utilizei o docker com a imagem do mongodb para facilitar a utilização do banco de dados.

## Postman
O postman é uma ferramenta para testar APIs facilmente, podendo realizar requisições HTTP, testar e documentar a aplicação. Utilizei o postman durante o desenvolvimento para construir as rotas da aplicação e também para verificar as rotas e possíveis erros.
