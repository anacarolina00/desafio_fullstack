    const connection = require('../database/connection.js')
    const express = require('express')
    const router = express.Router()
    const CliController = require('../controllers/CliController')
    const PesController = require('../controllers/PesController')

                //CliController

    router.post('/novoCli',CliController.novoCli)

    router.get('/cadcli',CliController.listarCli)

    router.get('/cadclie/:id',CliController.listarUmCli)

    router.put('/atualizar/CadCli/:id',CliController.atualizarCadCli)

    router.delete('/delete/CadCli/:id',CliController.removerCadCli)

                //PesController

    router.post('/novaPesRel',PesController.novaPesRel)

    router.get('/cadpes',PesController.listarPesRel)

    router.get('/cadpess/:id',PesController.listarUmaPesRel)

    router.put('/atualizar/PesRel/:id',PesController.atualizarPesRel)

    router.delete('/delete/PesRel/:id',PesController.removerPesRel)

    module.exports = router