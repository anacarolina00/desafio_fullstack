const {response} = require('express')
const database = require('../database/connection')

    class CliController {
    novoCli(request, response) {
    const {cnpj, nome_cli, data_fun, tipo, tel_cli, email, cep, logradouro, num, bairro,
        cidade, estado, senha, fk_nome_pes} = request.body

    console.log({cnpj, nome_cli, data_fun, tipo, tel_cli, email, cep, logradouro, num, bairro,
        cidade, estado, senha, fk_nome_pes})

    database.insert(cnpj, nome_cli, data_fun, tipo, tel_cli, email, cep, logradouro, num, bairro,
        cidade, estado, senha, fk_nome_pes).table("cliente").then(data=>{
                console.log(data)
                response.json({ message: "Cliente cadastrado com sucesso!!" })
            }).catch(error=>{
        console.log(error)
    })
    }

    listarCli(request, response) {
    database.select("*").table("cliente").then(cadcli=>{
        console.log(cadcli)
        response.json(cadcli)
    }).catch(error=>{
        console.log(error)
    })
    }

    listarUmCli(request, response) {
    const {id} = request.params
    database.select("*").table("cliente").where({ id: id }).then(cadclie=>{
        response.json(cadclie)
    }).catch(error=>{
        console.log(error)
    });
    }

    atualizarCadCli(request, response) {
    const {id} = request.params
    const {cnpj, nome_cli, data_fun, tipo, tel_cli, email, cep, logradouro, num, bairro,
        cidade, estado, senha, fk_nome_pes} = request.body  

    database.update({cnpj:cnpj, nome_cli:nome_cli, data_fun:data_fun, tipo:tipo, tel_cli:tel_cli,
        email:email, cep:cep, logradouro:logradouro, num:num, bairro:bairro, cidade:cidade,
        estado:estado, senha:senha, fk_nome_pes:fk_nome_pes}).table("cliente").where({ id: id }).then(data=>{
        response.json({ message: "Cadastro Atualizado com sucesso!!" })
    }).catch(error=>{
        response.json(error)
    })
    }

    removerCadCli(request, response) {
    const {id} = request.params
    database.where({ id: id }).del().table("cliente").then(data=>{
        response.json({ message: "Cliente removido com sucesso!!" })
    }).catch(error=>{
        response.json(error)
    })
    }
}

module.exports = new CliController()
