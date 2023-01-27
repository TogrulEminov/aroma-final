const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose');
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

mongoose.set('strictQuery', false);
const { Schema } = mongoose

const newSchema = new Schema({
    name: {
        type: String
    },
    mark: {
        type: String
    },
    url: {
        type: String
    },
    price: {
        type: String
    }
},
    { timestamps: true }
)

const Product = mongoose.model("product", newSchema)


// ! get product
app.get("/product", (req, res) => {
    Product.find({}, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    })
})

// ! get by id
app.get("/product/:id", (req, res) => {
    const { id } = req.params
    Product.findById(id, (err, doc) => {
        if (!err) {
            res.send(doc)
        }
    })
})

// ? post data
app.post("/product", (req, res) => {
    let newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        url: req.body.url,
        mark: req.body.mark
    })
    newProduct.save()
    res.send("Post is succes")
})

// ? delete by id
app.delete("/product/:id", (req, res) => {
    const { id } = req.params
    Product.findByIdAndDelete(id, (err) => {
        res.send("Delete is succes")
    })
})
const PORT = process.env.PORT
const DB = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(DB, () => {
    console.log("Db is succes")
    app.listen(PORT, () => {
        console.log(`server is up and running ${PORT}`);
    })
})