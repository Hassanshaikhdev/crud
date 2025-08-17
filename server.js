require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');

const Hero = require('./modals/heroModel')

connectDB();
app.use(express.json())

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

// // welcome to index
// app.get("/", (req, res) => {
//     res.json({
//         success: true,
//         message: "Hello World"
//     })
// })

// get all superhero
app.get("/superhero", async (req, res) => {
    try {
        const heros = await Hero.find({});
        res.json(heros)
    } catch (error) {
        console.log('error', error.message)
    }
})


// create superhero
app.post("/superhero", async (req, res) => {
    try {
        await Hero.create({
            superheroname: req.body.superheroname,
            name: req.body.name
        })
        res.json({ msg: "Superhero Created Succesfully" })

    } catch (error) {
        console.log(error)
    }
})

// get superhero by id
app.get("/superhero/:id", async (req, res) => {
    try {
        const hero =  await Hero.findById(req.params.id)
        res.json(hero)

    } catch (error) {
        console.log(error)
    }

})

// edit superhero
app.put("/superhero/:id", async (req, res) => {
    try {
        await Hero.findByIdAndUpdate(req.params.id, {
            superheroname: req.body.superheroname,
            name: req.body.name
        })
        res.json({ message: ' Hero is updated'})
    } catch (error) {
        console.log(error)
    }
     

})

// delete superhero
app.delete("/superhero/:id", async (req, res) => {
    try {
        await Hero.findByIdAndDelete(req.params.id)
        res.json({ mesaage: 'Superhero is Successfully Deleted'})
    } catch(error) {
        console.log(error)
    }

})

