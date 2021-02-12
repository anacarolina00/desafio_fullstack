const {response} = require('express')
const database = require('../database/connection')

    class PesController {
    novaPesRel(request, response){
    const { cpf, nome_pes, data_nasc, tel_pes, email} = request.body

    console.log({ cpf, nome_pes, data_nasc, tel_pes, email })

    database.insert( cpf, nome_pes, data_nasc, tel_pes, email).table("pessoa").then(data=>{
        console.log(data)
        response.json({ message: "Cadastro de Pessoa Relacionada realizado com sucesso!!" })
    }).catch(error=>{
        console.log(error)
    })
    }

    listarPesRel(request, response) {
    database.select("*").table("pessoa").then(cadpes=>{
        console.log(cadpes)
        response.json(cadpes)
    }).catch(error=>{
        console.log(error)
    })
    }

    listarUmaPesRel(request, response) {
    const {id} = request.params
    database.select("*").table("tasks").where({ id: id }).then(cadpess=>{
        response.json(cadpess)
    }).catch(error=>{
        console.log(error)
    })
    }

    atualizarPesRel(request, response) {
    const {id} = request.params
    const { cpf, nome_pes, data_nasc, tel_pes, email } = request.body; 

    database.update({ cpf:cpf, nome_pes:nome_pes, data_nasc:data_nasc, tel_pes:tel_pes, email:email
    }).table("pessoa").where({ id: id }).then(data=>{
        response.json({ message: "Cadastro de Pessoa Relacionada atualizado com sucesso!!" })
    }).catch(error=>{
        response.json(error)
    })
    }

    removerPesRel(request, response) {
    const {id} = request.params
    database.where({ id: id }).del().table("pessoa").then(data=>{
        response.json({ message: "Pessoa Relacionada removida com sucesso!!" })
    }).catch(error=>{
        response.json(error)
    })
    }
}

module.exports = new PesController()
