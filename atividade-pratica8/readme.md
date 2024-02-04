# Residência em Tecnologia da Informação e Comunicação

## INSTRUÇÃO PRÁTICA FEB-P008
### MÓDULO Programação WEB (Front end) - Básico

**OBJETIVO DA ATIVIDADE**
Aprender a utilizar pipes e injeção de dependências no Angular. Criar Services no Angular e injetar serviços em componentes que valem em toda a aplicação. Reforçar os conceitos das linguagens HTML, CSS, TypeScript e Angular que foram vistas em sala de aula.

**TEMPO**
2H

**DESCRIÇÃO**
A Wikipédia é um projeto de enciclopédia multilíngue de licença livre baseado na web e escrito de maneira colaborativa. Foi lançado em 2001 por Jimmy Wales e Larry Sanger e é atualmente administrado pela Fundação Wikimedia, integrando vários projetos mantidos pela fundação. É formada por mais de 61 milhões de artigos (1.116.554 em português, até 7 de janeiro de 2024) escritos de forma conjunta por diversos editores voluntários ao redor do mundo. Em maio de 2023, havia edições ativas da Wikipédia em 321 idiomas.

A Wikipédia também disponibiliza uma API para os desenvolvedores Web [API da Wikipedia](https://www.mediawiki.org/wiki/API:Main_page), onde podem ser consultados seus artigos por chamadas a uma REST API. O objetivo dessa tarefa é criar uma aplicação web para a consulta de artigos na Wikipédia e disponibilizá-los para os usuários.

**Figura 1 - Tela inicial da aplicação proposta para esta tarefa**
![Tela Inicial](link_para_imagem)

A Figura 1 ilustra um esboço da tela inicial da aplicação a ser desenvolvida para esta tarefa. O usuário deve inserir o termo da busca e a aplicação deve exibir um resumo do resultado da consulta e um endereço que deve ser direcionado para a página com mais informações sobre o artigo retornado.

A aplicação a ser desenvolvida, deve se separada em componentes que devem ser chamados a partir do componente `app.component` por seus seletores e organizados utilizando um layout de sua preferência. Considere os seguintes componentes:
- **Barra de busca** – Template onde devem ser manipulados todos os objetos que o usuário deve interagir para realizar a busca do verbete.
- **Resultado da Pesquisa** – Deve ser organizados os artigos retornados pela busca.

Crie um Service que deve ser responsável em consultar a API da Wikipedia e retornar os resultados. Esse service deve ser injetado no `app.component` principal que através de comunicação de componentes (Aula 7) deve alimentar o componente de Resultado da Pesquisa.

Crie um pipe para formatar o texto exibido na pesquisa para negrito, toda vez que ele encontrar uma correspondência do termo pesquisado.

Para critério de avaliação, será levado em consideração os seguintes itens que devem ser considerados na tarefa proposta.
- Utilização de decoradores `@Input` e `@Output` para a comunicação entre os componentes;
- Utilização de classe de Serviço e injeção de dependências;
- Organização das views de cada componente nos arquivos `.css` e `.html`;
- Indentação e organização do código em TypeScript;
- Apresentação do design da aplicação.

**REFERÊNCIAS**
- [Fundação Mozilla - Estruturando a web com HTML](https://developer.mozilla.org/pt-BR/docs/Learn/HTML). Acesso em: 21 out. 2023.
- [Fundação Mozilla - Aprenda a estilizar HTML utilizando CSS](https://www.w3schools.com/css/default.asp). Acesso em: 2 nov. 2023.
- [W3schools - CSS Tutorial](https://www.w3schools.com/css/default.asp). Acesso em: 01 nov. 2023.
- [Google Fonts](https://fonts.google.com/). Acesso em: 01 nov. 2023.
- [Color Hunt](https://colorhunt.co/). Acesso em: 03 nov. 2023.
- [Ming, S. Flexbox30](https://www.samanthaming.com/flexbox30/). Acesso em: 10 nov. 2023.
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript). Acesso em: 10 nov. 2023.
- [HTML DOM Documents - The Document Object](https://www.w3schools.com/jsrEF/dom_obj_document.asp). Acesso em: 12 nov. 2023.
- [Angular tutorials](https://angular.io/tutorial). Acesso em: 12 dez. 2023.
- [Attribute directives](https://angular.io/guide/attribute-directives). Acesso em: 14 dez. 2023.
- [Wikipédia, a enciclopédia livre](https://pt.wikipedia.org/wiki/Wikip%C3%A9dia). Acesso em: 02 jan. 2024.
- [API:Main page](https://www.mediawiki.org/wiki/API:Main_page). Acesso em: 03 jan. 2024.
- [Pipes](https://angular.io/api/common/CommonModule#pipes). Acesso em: 03 jan. 2024.
- [Understanding dependency injection](https://angular.io/guide/dependency-injection#understanding-dependency-injection). Acesso em: 04 jan. 2024.
