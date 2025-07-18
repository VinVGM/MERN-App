require('dotenv').config()

const express = require('express')
const expensesRoutes = require('./routes/expenses.js')
const userRoutes = require('./routes/user.js')

const mongoose = require('mongoose')


const app = express()



app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})



app.use('/api/expenses',expensesRoutes);
app.use('/api/user',userRoutes);



mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB and Listening on port 4000")
        })
    })
    .catch((error) => {
        console.log(error)
    })





