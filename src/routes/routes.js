const connection = require ('../database/connection')
const express = require ('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

    router.post('/novaTarefa',TaskController.novaTarefa)

    router.get('/tarefas',TaskController.listarTarefas)

    router.get('/tarefa/:id',TaskController.listarUmaTarefa)

    router.put('/atualizar/tarefa/:id',TaskController.atualizarTarefa)

    router.delete('/delete/tarefa/:id',TaskController.removerTarefa)

                //CliController

    //const TaskController = require("../controllers/CliController")

    //router.post('/novoCli',CliController.novoCli)

    //router.get('/cadcli',CliController.listarCli)

   // router.get('/cadclie/:id',CliController.listarUmCli)

    //router.put('/atualizar/CadCli/:id',CliController.atualizarCadCli)

   // router.delete('/delete/CadCli/:id',CliController.removerCadCli)

                //PesController

    //const TaskController = require("../controllers/PesController")

    //router.post("/novaPesRel", PesController.novaPesRel)

    //router.get("/cadpes", PesController.listarPesRel)

    //router.get("/cadpess/:id", PesController.listarUmaPesRel)

   // router.put("/atualizar/PesRel/:id", PesController.atualizarPesRel)

    //router.delete("/delete/PesRel/:id", PesController.removerPesRel)






    module.exports = router