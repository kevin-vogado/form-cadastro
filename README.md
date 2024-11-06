# Formulário de Cadastro 

***

## Descrição do projeto

O projeto consiste em um sistema de armazenamento de dados cadastrais feito em javascript, em que possui as funcionalidades de cadastrar, consultar e deletar usuário. Os dados para cadastramento de usuários são: nome, data de nascimento, telefone e e-mail, e foi utilizado o localStorage para armazenar esses dados.

***

## Funcionalidades do projeto

- `Funcionalidade 1`: Realizar cadastro dos usuários.
- `Funcionalidade 2`: Armazenar dados do usuário, como nome, data de nascimento, telefone e e-mail no localStorage.
- `Funcionalidade 3`: Consultar usuário e verificar seus dados.
- `Funcionalidade 4`: Deletar um usuário.

***

## Ferramentas utilizadas

- Javascript
- VSCode


***

## Histórico de versões 

- `Versão 1.0`: O arquivo.js havia 3 chamadas de escuta de evento para executar as funções: abrir tela de cadastro de novo usuário, fechar tela de cadastro de novo usuário e salvar dados de novo usuário.
- `Versão 1.1`: As 3 chamadas de escuta de evento foram movidas para o arquivo index.html sendo executadas por 'onclick', visando tornar o código mais limpo e com uma melhor performance.

***

## Testes realizados 

Nosso grupo decidiu testar a seguinte funcionalidade do sistema: 
- `Funcionalidade 2`: Armazenar dados do usuário, como nome, data de nascimento, telefone e e-mail no localStorage.

Explicação do teste: Foi implementado um teste unitário na função saveUsuario() para verificar se ela retorna false, isto é, se a função de salvar um usuário está salvando dados mesmo quando não é executada. Portanto, o teste aplicado visa validar que a função não salva um usuário fora da tela de cadastrar um novo usuário, isto também ajuda a identificar se os campos estão sendo corretamente limpos após a tela de cadastrar um usuário ser encerrada.

O teste da funcionalidade 2 está descrito no arquivo test.js.

Framework usado para teste unitário: QUnit.

***

## Acesso ao projeto

Você pode acessar o [código fonte do projeto](https://github.com/Compass-pb-aws-2024-SETEMBRO/sprint-1-pb-aws-setembro/tree/ana-capistrano) ou baixá-lo.

***

## Autoria do projeto

Desenvolvido por [Ana Luiza Capistrano dos Santos](https://github.com/luucaps)
