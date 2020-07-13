## challengeDasaFront

###### Sistem de manutenção de exames e laboratórios
Demo: https://dasachallengefront.herokuapp.com/

#### Requisitos
 - node
 - yarn

###### Este projeto foi inciado com o [Create React App](https://create-react-app.dev/docs/getting-started/).
###### Atenção: todos os comando a seguir são rodadados no terminal na pasta do projeto

#### Instruçoes:

 - `Yarn install` ou `Yarn`

    Este comando instala todas as dependencias necessárias para rodar o projeto.
 
 - `Yarn start`

    Este comando roda a aplicação em modo de desenvolvimento. Abra o browser no endereço http://localhost:3000 após rodar o comando.
    
 - `Yarn test`

    Este comando roda os testes unitários do sistema.
 
 - `Yarn cy:run`
 
     Este comando roda os testes de integração em background. (precisa do sistema rodando em modo de desenvolvimento)
     
 - `Yarn cy:open`
 
     Este comando roda os testes de integração em modo interativo. (precisa do sistema rodando em modo de desenvolvimento)
     
 - `Yarn build`
 
     Este comando fara o build da aplicação gerando uma pasta chamanda build onde terá os arquivos para deploy ja otimizados.


#### Arquitetura
 Este projeto utliza:
 
 - [ant-desing](https://ant.design/)  como biblioteca de componentes visuais
 - [cypress](https://www.cypress.io/)  como framework para automação dos testes
 - [jest](https://jestjs.io/) + [enzyme](https://enzymejs.github.io/enzyme/) como framework para testes unitários utilizando o metodo de [Snpashot testing](https://jestjs.io/docs/en/snapshot-testing)
