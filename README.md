# Refatoração do Código Utilizando os Princípios SOLID
Nesta documentação, vamos abordar a refatoração do código fornecido, utilizando os princípios SOLID. O código original consiste em classes relacionadas à manipulação de contatos e interação com o usuário através da linha de comando. Os princípios SOLID serão aplicados para melhorar a modularidade, flexibilidade e extensibilidade do sistema.

## 1. Princípio da Responsabilidade Única (SRP)
Inicialmente, a classe CLI era responsável por manipular a interface do usuário e a interação com os contatos. Essa classe estava violando o princípio SRP.
Foi refatorada a classe CLI para separar suas responsabilidades, mantendo cada classe focada em uma única responsabilidade.
Uma nova classe InterfaceUsuario foi criada para lidar exclusivamente com a interação do usuário.
A classe CLI agora delega as operações relacionadas aos contatos para a classe GerenciadorContatos e as operações de busca para a classe EstrategiaBusca.

## 2. Princípio Aberto/Fechado (OCP)
O sistema original não estava fechado para modificação e aberto para extensão. Adicionar novas funcionalidades, como estratégias de busca adicionais, exigiria modificação direta das classes existentes.
Refatoramos o código para seguir o princípio OCP, garantindo que o sistema possa ser estendido com novas funcionalidades sem modificar o código existente. Isso promove uma arquitetura mais flexível e fácil de manter.
Foi criada uma interface EstrategiaBusca para definir o contrato para as diferentes estratégias de busca.
A classe CLI agora depende da interface EstrategiaBusca, em vez de uma implementação concreta.

## 3. Princípio da Substituição de Liskov (LSP)
Garantir que as classes derivadas possam ser substituídas por suas classes base sem problemas é essencial para evitar que extensões quebrem o comportamento existente.
Foi verificado se todas as classes derivadas podem ser substituídas por suas classes base sem problemas.
Com essas refatorações, o sistema se torna mais modular, flexível e de fácil manutenção, seguindo os princípios SOLID. Isso proporciona uma base sólida para futuras extensões e evolução do código.
