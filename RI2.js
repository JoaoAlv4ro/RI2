class Cliente {
    constructor(nome, telefoneCelular, email, endereco) {
        this._nome = nome;
        this._telefoneCelular = telefoneCelular;
        this._email = email;
        this._endereco = endereco;
    }

    get nome() { return this._nome; }
    set nome(novoNome) { this._nome = novoNome; }
    get nomeUpper() { return this._nome.toUpperCase(); }
    get nomeLower() { return this._nome.toLowerCase(); }

    get telefoneCelular() { return this._telefoneCelular; }
    set telefoneCelular(novoTelefoneCelular) { this._telefoneCelular = novoTelefoneCelular; }

    get email() { return this._email; }
    set email(novoEmail) { this._email = novoEmail; }
    get emailUpper() { return this._email.toUpperCase(); }
    get emailLower() { return this._email.toLowerCase(); }

    get endereco() { return this._endereco; }
    set endereco(novoEndereco) { this._endereco = novoEndereco; }

    descricao() {
        return `Nome: ${this._nome}, Telefone: (${this._telefoneCelular.ddd}) ${this._telefoneCelular.numero}, Email: ${this._email}, Endereço: ${this._endereco.rua}, ${this._endereco.numero}, ${this._endereco.cidade} - ${this._endereco.estado}`;
    }
}

class TelefoneCelular {
    constructor(ddd, numero) {
        this._ddd = ddd;
        this._numero = numero;
    }

    get numero() { return this._numero; }
    set numero(novoNumero) { this._numero = novoNumero; }

    get ddd() { return this._ddd; }
    set ddd(novoDDD) { this._ddd = novoDDD; }
}

class Endereco {
    constructor(rua, numero, cidade, estado) {
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
    }

    get rua() { return this._rua; }
    set rua(novaRua) { this._rua = novaRua; }
    get ruaUpper() { return this._rua.toUpperCase(); }
    get ruaLower() { return this._rua.toLowerCase(); }

    get numero() { return this._numero; }
    set numero(novoNumero) { this._numero = novoNumero; }

    get cidade() { return this._cidade; }
    set cidade(novaCidade) { this._cidade = novaCidade; }
    get cidadeUpper() { return this._cidade.toUpperCase(); }
    get cidadeLower() { return this._cidade.toLowerCase(); }

    get estado() { return this._estado; }
    set estado(novoEstado) { this._estado = novoEstado; }
    get estadoUpper() { return this._estado.toUpperCase(); }
    get estadoLower() { return this._estado.toLowerCase(); }
}

let telefone1 = new TelefoneCelular(12, '91234-5678');
let endereco1 = new Endereco('Rua A', 123, 'Encruzilhada', 'BH');
let cliente1 = new Cliente('Álvaro', telefone1, 'joao@gmail.com', endereco1);

let telefone2 = new TelefoneCelular(12, '98765-4321');
let endereco2 = new Endereco('Rua B', 312, 'São José dos Campos', 'SP');
let cliente2 = new Cliente('Vivian', telefone2, 'vivian@gmail.com', endereco2);

let telefone3 = new TelefoneCelular(12, '99876-5432');
let endereco3 = new Endereco('Rua C', 231, 'Caçapava', 'SP');
let cliente3 = new Cliente('Rodolfo', telefone3, 'rodolfo@gmail.com', endereco3);

console.log(cliente1.descricao());
console.log(cliente2.descricao());
console.log(cliente3.descricao());

let clientes = [cliente2, cliente3, cliente1]

function listarClientesNome(clientes) {
    return clientes.sort((a, b) => a.nome.localeCompare(b.nome))   
}

console.log(listarClientesNome(clientes));
