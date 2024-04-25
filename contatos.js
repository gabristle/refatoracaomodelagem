// Aluno(a): Gabriella Ribeiro de Melo e Costa
// RA: 2487837

// Classe Contato com nome, telefone e email
class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

// Armazenador de Contatos podendo adicionar, remover e listar
class ArmazenamentoContatos {
    constructor() {
        this.contatos = [];
    }

    adicionar(contato) {
        this.contatos.push(contato);
    }

    remover(contato) {
        const index = this.contatos.indexOf(contato);
        if (index !== -1) {
            this.contatos.splice(index, 1);
        }
    }

    listar() {
        return this.contatos;
    }
}

// Gerenciador de Contatos podendo adicionar, remover e listar
class GerenciadorContatos {
    constructor(adapter) {
        this.adapter = adapter;
    }

    adicionarContato(nome, telefone, email) {
        const contato = new Contato(nome, telefone, email);
        this.adapter.adicionar(contato);
    }

    removerContato(contato) {
        this.adapter.remover(contato);
    }

    listarContatos() {
        return this.adapter.listar();
    }
}

// Interface do Usuário
class InterfaceUsuario {
    constructor(gerenciadorContatos) {
        this.gerenciadorContatos = gerenciadorContatos;
        this.estrategiaBusca = new EstrategiaBuscaPadrao();
    }

    adicionarContato(nome, telefone, email) {
        this.gerenciadorContatos.adicionarContato(nome, telefone, email);
    }

    removerContato(contato) {
        this.gerenciadorContatos.removerContato(contato);
    }

    listarContatos() {
        const contatos = this.gerenciadorContatos.listarContatos();
        console.log("Lista de Contatos:");
        contatos.forEach(contato =>
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`)
        );
    }

    buscarContatos(busca) {
        const contatos = this.gerenciadorContatos.listarContatos();
        const resultados = this.estrategiaBusca.buscar(contatos, busca);
        console.log("Resultados da Busca:");
        resultados.forEach(contato =>
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`)
        );
    }
}

// Estratégia de Busca
class EstrategiaBusca {
    buscar(contatos, busca) {
        // Implementação de busca
        return contatos.filter(contato =>
            contato.nome.toLowerCase().includes(busca.toLowerCase())
        );
    }
}

// Estratégia de Busca Padrão
class EstrategiaBuscaPadrao extends EstrategiaBusca {
    buscar(contatos, busca) {
        // Implementação de busca simples por email
        return contatos.filter(contato =>
            contato.email.toLowerCase().includes(busca.toLowerCase())
        );
    }
}

// Estratégia de Busca Avançada
class EstrategiaBuscaAvancada extends EstrategiaBusca {
    buscar(contatos, busca) {
        // Implementação de busca avançada por nome, email e telefone
        return contatos.filter(contato =>
            contato.nome.toLowerCase().includes(busca.toLowerCase()) ||
            contato.email.toLowerCase().includes(busca.toLowerCase()) ||
            contato.telefone.toLowerCase().includes(busca.toLowerCase())
        );
    }
}

// Teste dos objetos e implementação classes
const adaptador = new ArmazenamentoContatos();
const gerenciadorContatos = new GerenciadorContatos(adaptador);
const interfaceUsuario = new InterfaceUsuario(gerenciadorContatos);

interfaceUsuario.adicionarContato("João Vitor", "123456789", "joaov@gmail.com");
interfaceUsuario.adicionarContato("Giovanna", "2525253", "giovanna@gmail.com");
interfaceUsuario.adicionarContato("Gabriella", "2487837", "gabriella@gmail.com");
interfaceUsuario.adicionarContato("Rafael", "2347644", "rafael@gmail.com");

interfaceUsuario.listarContatos();

interfaceUsuario.removerContato("João Vitor", "123456789", "joaov@gmail.com");

interfaceUsuario.listarContatos();

interfaceUsuario.buscarContatos("j");
interfaceUsuario.buscarContatos("g");