# Residência em Tecnologia da Informação e Comunicação

## INSTRUÇÃO PRÁTICA FEB-P010
### MÓDULO Programação WEB (Front end) - Básico

**OBJETIVO DA ATIVIDADE**
Entender como os componentes se comunicam no Angular e entender os conceitos de Observables e Subjects. Comunicação entre componentes não relacionados, reforçar os conceitos das linguagens HTML, CSS, TypeScript e Angular que foram vistas em sala de aula.

**TEMPO**
2H

**DESCRIÇÃO**
A tarefa FEB-P007 consistiu em desenvolver uma aplicação Angular para a leitura e análise de um arquivo JSON denominada JReader. A Figura 01 ilustra uma tela da aplicação em funcionamento. Nesta tarefa proposta, é necessário mudar a abordagem como os componentes da aplicação se comunicam em comparação com a abordagem exigida pela tarefa FEB-P007. Para esta tarefa, aproveite a interface e a lógica exigida na tarefa FEB-P007, e altere a forma que os componentes se comunicam, criando um Service de comunicação entre componentes utilizando a classe Subject. Todos os componentes da aplicação devem se comunicar utilizando os métodos implementados no Service, de forma que cada componente deve injetar a mesma instância do Service em seus construtores. Utilize o mesmo arquivo veiculos.json da tarefa FEB-P007 para a realização dos testes.

**Figura 1 – Captura de tela da aplicação JReader**
![Tela da aplicação JReader](link_para_imagem)

A aplicação a ser desenvolvida, deve se separada em componentes que devem ser chamados a partir do componente `app.component` por seus seletores e organizados utilizando o grid e o flexbox layout. Considere os seguintes componentes:
- `carrinho` - veículos selecionados;
- `classes` – categorias dos veículos;
- `objetos` – todos os veículos;
- `propriedades` – representa as propriedades de um objeto;
- `valor-propriedade` – representa o valor de uma propriedade;

Para critério de avaliação, será levado em consideração os seguintes itens que devem ser considerados na tarefa proposta.
- Criação e utilização de um Service com pelo menos um objeto da classe Subject incluído.
- Organização das views de cada componente nos arquivos `.css` e `.html`.
- Indentação e organização do código em TypeScript.

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
- [Subject](https://rxjs.dev/guide/subject). Acesso em: 17 dez. 2024.
- [Observable](https://rxjs.dev/guide/observable). Acesso em: 18 dez. 2024.
- [Introduction to services and dependency injection](https://angular.io/guide/architecture-services). Acesso em: 15 dez. 2024.
