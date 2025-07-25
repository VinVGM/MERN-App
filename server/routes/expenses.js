const express = require("express")
const Expense = require('../models/expenseModel')
const {
    getExpenses,
    getExpense,
    createExpense,
    updateExpense,
    deleteExpense
} = require('../controllers/expenseController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)


router.get("/", getExpenses)


router.get("/:id", getExpense)


router.post("/", createExpense)


router.delete("/:id", deleteExpense)


router.patch("/:id", updateExpense)



module.exports = router