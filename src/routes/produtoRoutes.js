const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");
const validarId = require("../middlewares/validarId");

router.get("/", produtoController.listar);
router.get("/:id", validarId, produtoController.buscarPorId);
router.post("/", produtoController.criar);
router.put("/:id", validarId, produtoController.atualizar);
router.delete("/:id", validarId, produtoController.deletar);

module.exports = router;